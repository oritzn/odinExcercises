    let computerScore = 0;
let playerScore = 0;

function playGame() {
    const humanSelection = getPlayerChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    console.log("Human: " + playerScore + " Computer: " + computerScore);

    if(computerScore > playerScore) {
        console.log("Game Over Computer Won");
    }else {
        console.log("Game Over Player Won");
    }
}

function playRound(humanChoice, computerChoice) {
    const resultText = document.querySelector("#resultText");
    const playerScoreValue = document.querySelector("#playerScoreValue");
    const computerScoreValue = document.querySelector("#computerScoreValue");
    const drawValue = document.querySelector("#drawValue");

    if(humanChoice === computerChoice) {
        resultText.textContent = "It's a draw!";
        drawValue.textContent = parseInt(drawValue.textContent) + 1;
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScoreValue.textContent = parseInt(computerScoreValue.textContent) + 1;
        resultText.textContent = "Computer won Paper beats Rock!";
    }else if(computerChoice === "rock" && humanChoice === "paper") {
        playerScoreValue.textContent = parseInt(playerScoreValue.textContent) + 1;
        resultText.textContent = "Player won Paper beats Rock";
    }
    else if(humanChoice === "rock" && computerChoice === "scissor") {
        playerScoreValue.textContent = parseInt(playerScoreValue.textContent) + 1;
        resultText.textContent = "Player won Rock beats Scissor";
    }else if(humanChoice === "scissor" && computerChoice === "rock") {
        computerScoreValue.textContent = parseInt(computerScoreValue.textContent) + 1;
        resultText.textContent = "Computer won Rock beats Scissor";
    }
    else if(humanChoice === "scissor" && computerChoice === "paper") {
        playerScoreValue.textContent = parseInt(playerScoreValue.textContent) + 1;
        resultText.textContent = "Player won Scissor beats Paper";
    }else if(humanChoice === "paper" && computerChoice === "scissor") {
        computerScoreValue.textContent = parseInt(computerScoreValue.textContent) + 1;
        resultText.textContent = "Computer won Scissor beats Paper";
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
    const playerBtns = document.querySelectorAll(".playerBtn");

    playerBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const humanChoice = e.target.textContent.toLowerCase();
            playRound(humanChoice, getComputerChoice());

            return humanChoice;
        });
    });

    
}