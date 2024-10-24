const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "YOU WON!";
const RESULT_COMPUTER_WINS = "YOU LOST!";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const add = (a, b) => a + b; //Shorter version

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => 
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
  /* if (cChoice === pChoice){
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    } */

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection){
    const winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${playerSelection || DEFAULT_CHOICE}, computer picked ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW) {
    message += "had a draw"
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won";
  } else {
    message += "lost";
  }
  console.log(message);
  gameIsRunning = false;
});

//not related to the game

const sumUp = (...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const subtractUp = function() { //don't use it
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 24, 88));
console.log(subtractUp(1, 5, 10, -3, 6, 10, 24, 88));