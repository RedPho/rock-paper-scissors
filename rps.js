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



function playRaund() {

  computerSelection = getComputerChoice();

  if (computerSelection == "rock") {

    if (playerSelection == "rock") {
      return "Rakibin de tas secti. Berabere.";
    }
    else if (playerSelection == "paper") {
      return "Rakibin tas secti. Kazandin! Kagit tasi yener"
    }
    else if (playerSelection == "scissors") {
      return "Rakibin tas secti. Kaybettin :( Tas makasi yener."
    }
  }

  else if (computerSelection == "paper") {

    switch (playerSelection) {
      case "rock":
        return "Rakibin kagit secti. Kaybettin :( Kagit tasi yener";
      case "paper":
        return "Rakibin de kagit secti. Berabere";
      case "scissors":
        return "Rakibin kagit secti. Kazandin! makas kagidi yener";
    }
  }

  else if (computerSelection == "scissors") {

    switch (playerSelection) {
      case "rock":
        return "Rakibin makas secti. Kazandin! tas makasi yener";
      case "paper":
        return "Rakibin makas secti. Kaybettin :( makas tasi yener";
      case "scissors":
        return "Rakibin de makas secti. Berabere";
    }
  }
}


function getPlayerChoice(e) {
  playerSelection = e.target.id;
}

function alertResult() {
  let result = playRaund();
  let restults = document.querySelector("#result");
  let para = document.createElement("p")
  para.innerText = result;
  restults.appendChild(para);
}



let buttons = document.querySelectorAll(".choice");
buttons.forEach(button => button.addEventListener("click", getPlayerChoice));
buttons.forEach(button => button.addEventListener("click", alertResult));


