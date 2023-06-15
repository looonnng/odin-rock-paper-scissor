// Create a function called getComputerChoice
// that return Rock, Paper, Scissors randomly
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function getplayerChoice() {
  const playerChoice = prompt("Player Choice: Rock, Paper, or Scissors?", "");

  if (
    playerChoice.toLowerCase() == "rock" ||
    playerChoice.toLowerCase() == "paper" ||
    playerChoice.toLowerCase() == "scissors"
  ) {
    return playerChoice;
  } else {
    const typoMessage = "Please enter Rock, Paper, or Scissors!";
    return typoMessage;
  }
}

// Create a function called playRound() that play a single round of RPS
// takes two parameters - playerSelection and computer Selection

function playRound(playerSelection, computerSelection) {
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

let playerScore = 0;
let computerScore = 0;

function game() {
  const playerSelection = getplayerChoice();
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

game();

game();

game();

game();

game();

// function game() does not keep track of computer score
/* function game() {
    const playerSelection = getplayerChoice();
    const computerSelection = getComputerChoice();

    let roundString = playRound(playerSelection, computerSelection);
    let roundScore = roundString.slice(0,7);

    if (roundScore == 'You Win') {
        playerScore += 1;
        console.log(roundString + ` ${playerScore} : ${computerScore}`);
    } else if (roundScore == 'You Lose') {
        computerScore += 1;
        console.log(roundString + ` ${playerScore} : ${computerScore}`);
    } else if (roundScore == 'Tie') {
        console.log(roundString + ` ${playerScore} : ${computerScore}`);
    } else {
        console.log(roundString + ` ${playerScore} : ${computerScore}`);
    }
} */
