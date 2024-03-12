//function for computer choices.

function getComputerChoice() {
   let choices = ['rock', 'paper', 'scissors'];
   let random = Math.floor(Math.random ()* choices);
   return choices[random];
}

//functionn to play single round.

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
return 'Li pa bon! Svp chwazi rock, paper or scissors.';
}

if (playerSelection === computerSelection) {
   return 'Egalite egalite';
} else if (
         (playerSelection === 'rock' && computerSelection === 'scissors')||
         (playerSelection === 'scissors' && computerSelection === 'paper')||
         (playerSelection === 'paper' && computerSelection === 'rock')
) {
   return `Ou genyen🥳️! ${playerSelection} beats ${computerSelection}`;
} else {
   return `Ou pedi😟️! ${computerSelection} beats ${playerSelection}`;
}

}

//function to play five round game.

function playGame() {
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
const playerSelection = prompt('Fe chwa w\'😊️ (rock, paper, scissors);');
const computerSelection = getComputerChoice();
const result =  playRound(playerSelection, computerSelection);
console.log(result);

if (result.includes('Win')) {
   playerScore++;
} else if (result.includes('Lose')) {
   computerScore++;
}
}

if (playerScore > computerScore) {
   console.log("You Win the game!🥳️");
} else if (playerScore < computerScore) {
   console.log("You Lose the game!😟️");
} else {
   console.log("It's a Tie!😅️");
}
}

playGame();
