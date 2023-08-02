// DOM Manipulation and Event Captures
const buttons = document.querySelectorAll("button");

const getPlayerChoice = e => e.target.textContent;

buttons.forEach(button => button.addEventListener("click", playRound));

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
    console.log("Tie"); 
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) ;
    } else {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`) ;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) ;
    } else {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`) ;
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) ;
    } else {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`) ;
    }
  }
} 

let playerScore = 0;
let computerScore = 0;

function game(e) {
  const playerSelection = getplayerChoice(e);
  const computerSelection = getComputerChoice();

  let roundString = playRound(playerSelection, computerSelection);

  if (roundString.includes("You Win")) {
    playerScore += 1;
    console.log(roundString + ` ${playerScore} : ${computerScore}`);
  } else if (roundString.includes("You Lose")) {
    computerScore += 1;
    console.log(roundString + ` ${playerScore} : ${computerScore}`);
  } else if (roundString.includes("Tie")) {
    console.log(roundString + ` ${playerScore} : ${computerScore}`);
  } else {
    console.log(roundString);
  }
}


