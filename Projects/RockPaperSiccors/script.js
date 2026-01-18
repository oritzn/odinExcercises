let computerScore = 0;
let playerScore = 0;

function playGame() {
    for(let i = 0; i <= 4; i++) {
        const humanSelection = getPlayerChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();

        playRound(humanSelection, computerSelection);

        console.log("Human: " + playerScore + " Computer: " + computerScore);
    }

    if(computerScore > playerScore) {
        console.log("Game Over Computer Won");
    }else {
        console.log("Game Over Player Won");
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Its a draw!!")
        computerScore++;
        playerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer won Paper beats Rock!");
        computerScore++;
    }else if(computerChoice === "rock" && humanChoice === "paper") {
        console.log("Player won Paper beats Rock");
        playerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissor") {
        console.log("Player won Rock beats Scissor");
        playerScore++;
    }else if(humanChoice === "scissor" && computerChoice === "rock") {
        console.log("Computer won Rock beats Scissor");
        computerScore++;
    }
    else if(humanChoice === "scissor" && computerChoice === "paper") {
        console.log("Player won Scissor beats Paper");
        playerScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissor") {
        console.log("Computer won Rock beats Scissor");
        computerScore++;
    }

}


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 0) {
        computerChoice = "rock";
    }else if(computerChoice == 1) {
        computerChoice = "paper";
    }else {
        computerChoice = "scissor";
    }

    return computerChoice;
}


function getPlayerChoice() {
    let humanChoice = prompt("What do you chosse");

    return humanChoice;
}