
const choices = ["rock","paper","scissors"] //for computer to take the choices...
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
//then for counting the scores...
const spanDisplayP = document.getElementById("spanDisplayP");
const spanDisplayC = document.getElementById("spanDisplayC");
let playerScore = 0;
let computerScore = 0;


function playgame(input) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";
    
    if(input === computerChoice){
        result = "It's a tie!";
    }else {
        switch(input) {
            case "rock":
                if(computerChoice === "scissors") result = "You win!";
                else result = "You lose!";
                break;
            case "paper":
                if(computerChoice === "rock") result = "You win!";
                else result = "You lose!";
                break;
            case "scissors":
                if(computerChoice === "paper") result = "You win!";
                else result = "You lose!";
                break;
        }
    }
   

    switch (result) {
        case "You win!":
            resultDisplay.style.color = "green";
            playerScore++;
            spanDisplayP.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.style.color = "red";
            computerScore++;
            spanDisplayC.textContent = computerScore;
            break;
        default:
            resultDisplay.style.color = "orange";
            break;
    }
    playerDisplay.textContent = `Player: ${input}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}
