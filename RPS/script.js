function getComputerChoice() {
  num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "Rock";
  } else if (num == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getUserChoice() {
  userInput = parseInt(
    prompt("Enter a choice: Rock(0), Paper (1), Scissors (2). ")
  );
  if (userInput == 0) {
    return "Rock";
  } else if (userInput == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  function playRound() {
    const humanChoice = getUserChoice().toLocaleLowerCase();
    const computerChoice = getComputerChoice().toLocaleLowerCase();
    console.log("Your score:" + humanScore);
    console.log("The computer's sccore: " + computerScore);
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (computerChoice === humanChoice) {
      console.log("It's a draw!");
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

console.log(playGame());
