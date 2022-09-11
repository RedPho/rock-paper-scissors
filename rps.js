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
      return "Rakibin de tas secti. Berabere.";
    }
    else if (playerSelection == "paper") {
      playerScore++;
      return "Rakibin tas secti. Kazandin! Kagit tasi yener"
    }
    else if (playerSelection == "scissors") {
      computerScore++;
      return "Rakibin tas secti. Kaybettin :( Tas makasi yener."
    }
  }

  else if (computerSelection == "paper") {

    switch (playerSelection) {
      case "rock":
        computerScore++;
        return "Rakibin kagit secti. Kaybettin :( Kagit tasi yener";
      case "paper":
        return "Rakibin de kagit secti. Berabere";
      case "scissors":
        playerScore++;
        return "Rakibin kagit secti. Kazandin! makas kagidi yener";
    }
  }

  else if (computerSelection == "scissors") {

    switch (playerSelection) {
      case "rock":
        playerScore++;
        return "Rakibin makas secti. Kazandin! tas makasi yener";
      case "paper":
        computerScore++;
        return "Rakibin makas secti. Kaybettin :( makas tasi yener";
      case "scissors":
        return "Rakibin de makas secti. Berabere";
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
    winLose.innerText = "Bravo! Oyunu kazandin!";
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore == 5) {
    winLose.innerText = "Kaybettin, bir dahaki sefere :(";
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


