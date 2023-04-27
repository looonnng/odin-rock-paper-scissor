// Create a function called getComputerChoice
// that return Rock, Paper, Scissors randomly
const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// Create a function called playRound() that play a single round of RPS
// takes two parameters - playerSelection and computer Selection
// return a string "You Lose! {winner} beats {loser}"
// make playerSelection parameter case-insensitive

let computerSelection = getComputerChoice(options);
let playerChoice = prompt("Player Choice: Rock, Paper, or Scissors?", "");

function checkPlayerChoice(playerChoice) {
  if (
    playerChoice.toLowerCase() == "rock" ||
    playerChoice.toLowerCase() == "paper" ||
    playerChoice.toLowerCase() == "scissors"
  ) {
    return playerChoice;
  }
  const typoMessage = "Please enter Rock, Paper, or Scissors!";
  return typoMessage;
}

/* 
const playerSelection = playerChoice.charAt(0).toUpperCase() + 
return(playerSelection) */

function playRound(playerSelection, computerSelection) {
  playerSelection = checkPlayerChoice(playerChoice);

  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Tie";
  } else if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "Paper") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "Scissors") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "rock") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else {
    return playerSelection;
  }
}

//playRound(playerChoice, computerSelection);

// Create a function called game()
// Combine previous function to play a 5 round
// that keeps score
// reports a winner or loser at the end

function game() {
  let playerScore = 0;
  let copmuterScore = 0;

  let checkWin = /You Win/;
  let checkLose = /You Lose/;

  let roundResult = playRound(playerChoice, computerSelection);
  if (checkWin.test(roundResult)) {
    playerScore += 1;
    console.log(roundResult);
  } else if (checkLose.test(roundResult)) {
    copmuterScore += 1;
    console.log(roundResult);
  } else console.log("Tie");
}


game();
// for (let gameRound = 1; gameRound < 6; gameRound++) {}
