// DOM Manipulation and Event Captures
const buttons = document.querySelectorAll("button");

const getPlayerChoice = (e) => e.target.textContent;

buttons.forEach((button) => button.addEventListener("click", game)); // Click one of the opiton to start game

const resultDisplay = document.querySelector("#result");

const buttonContainer = document.querySelector(".buttons");

const scoreBoard = document.createElement("div");
scoreBoard.classList.toggle("result");

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
    resultDisplay.textContent = `Round ${roundNum}: Tie`;
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      resultDisplay.textContent = `Round ${roundNum}: You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      resultDisplay.textContent = `Round ${roundNum}: You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      resultDisplay.textContent = `Round ${roundNum}: You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultDisplay.textContent = `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}


let roundNum = 1;
let playerScore = 0;
let computerScore = 0;

function trackScore(e) {
  playRound(e);

  if (resultDisplay.textContent.includes("You win")) {
    roundNum += 1;
    playerScore += 1;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, buttonContainer);
  } else if (resultDisplay.textContent.includes("You lose")) {
    roundNum += 1;
    computerScore += 1;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, buttonContainer);
  } else if (resultDisplay.textContent.includes("Tie")) {
    roundNum += 1;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    container.insertBefore(scoreBoard, buttonContainer);
  }
}

function game(e) {
  trackScore(e);

  if (playerScore == 5) {
    resultDisplay.textContent = "Congratulations! You won.";
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
  }
  if (computerScore == 5) {
    resultDisplay.textContent = "Game over! Machine won.";
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
  }
}
