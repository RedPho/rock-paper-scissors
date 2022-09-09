function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber == 0) {
    return "rock";
  }
  else if (randomNumber == 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

let playerSelection;
let computerSelection;

function playRaund(playerSelection, computerSelection) {

  computerSelection = getComputerChoice();
  playerSelection = prompt("rock, paper or scissors?").toLowerCase();

  if (computerSelection == "rock") {

    if (playerSelection == "rock") {
      return "Tie";
    }
    else if (playerSelection == "paper") {
      return "You won! Paper beats Rock"
    }
    else if (playerSelection == "scissors") {
      return "You lose! Rock beats Scissors"
    }
  }

  else if (computerSelection == "paper") {

    switch (playerSelection) {
      case "rock":
        return "You lose! Paper beats Rock";
      case "paper":
        return "Tie";
      case "scissors":
        return "You won! Scissors beats Paper";
    }
  }

  else if (computerSelection == "scissors") {

    switch (playerSelection) {
      case "rock":
        return "You won! Rock beats Scissors";
      case "paper":
        return "You lose! Scissors beats Paper";
      case "scissors":
        return "Tie";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let result = playRaund(playerSelection, computerSelection);
    console.log(result);
  }
}