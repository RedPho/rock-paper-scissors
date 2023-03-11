let computerSelection;
let playerSelection;

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

let playerScore = 0;
let computerScore = 0;

function playRaund() {
  computerSelection = getComputerChoice();

  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      return "Computer selected rock too, it's a tie.";
    }
    else if (playerSelection == "paper") {
      playerScore++;
      return "Computer selected rock, you won! Paper beats rock."
    }
    else if (playerSelection == "scissors") {
      computerScore++;
      return "Computer selected rock, you lose :( Tas makasi yener."
    }
  }

  else if (computerSelection == "paper") {
    switch (playerSelection) {
      case "rock":
        computerScore++;
        return "Computer selected paper, you lose :( Paper beats rock.";
      case "paper":
        return "Computer selected paper too, it's a tie.";
      case "scissors":
        playerScore++;
        return "Computer selected paper, you won! Scissors beats paper.";
    }
  }

  else if (computerSelection == "scissors") {
    switch (playerSelection) {
      case "rock":
        playerScore++;
        return "Computer selected scissors, you won! Rock beats scissors.";
      case "paper":
        computerScore++;
        return "Computer selected scissors, you lose:( Scissors beats paper";
      case "scissors":
        return "Computer selected scissors too, it's a tie.";
    }
  }
}


function getPlayerChoice(e) {
  playerSelection = e.target.id;
}

let winLose = document.querySelector("#win-lose");

function alertResult() {
  let result = playRaund();
  let restults = document.querySelector("#result");
  restults.innerText = result;

  pscore.innerText = playerScore;
  cscore.innerText = computerScore;

  if (playerScore == 5) {
    winLose.innerText = "Congratulations! You won!";
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore == 5) {
    winLose.innerText = "You lose :( Maybe next time.";
    playerScore = 0;
    computerScore = 0;
  }

  if (computerScore == 1 || playerScore == 1) {
    winLose.innerText = "";
  }

  
}

let buttons = document.querySelectorAll(".choice");
buttons.forEach(button => button.addEventListener("click", getPlayerChoice));
buttons.forEach(button => button.addEventListener("click", alertResult));