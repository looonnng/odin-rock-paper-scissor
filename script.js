// DOM Manipulation and Event Captures
const buttons = document.querySelectorAll("button");

const getPlayerChoice = (e) => e.target.textContent;

buttons.forEach((button) => button.addEventListener("click", game));

const resultDisplay = document.querySelector("#result");
const buttonContainer = document.querySelector(".buttons");

const scoreBoard = document.createElement("div");

const container = document.querySelector(".container");

// Create a function called getComputerChoice
// that return Rock, Paper, Scissors randomly
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Create a function called playRound() that play a single round of RPS
// takes two parameters - playerSelection and computer Selection

function playRound(e) {
  const playerSelection = getPlayerChoice(e);
  const computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    resultDisplay.textContent = "Tie";
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}

//Rewrite Game to track score and play first to 5

let playerScore = 0;
let computerScore = 0;

function game(e) {
  playRound(e);

  if (resultDisplay.textContent.includes("You win")) {
    playerScore += 1;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, resultDisplay);
  } else if (resultDisplay.textContent.includes("You lose")) {
    computerScore += 1;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, resultDisplay);
  } else if (resultDisplay.textContent.includes("Tie")) {
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, resultDisplay);
  }
}

scoreBoard.style.marginBottom = "1rem";
