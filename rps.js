// randomly generates one of 'rock', 'paper', or 'scissors' for CPU
function computerPlay() {
    if (randomNum() == 0) {
        return "rock";
    } else if (randomNum() == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// randomly generates a number 0-2
function randomNum() {
    return Math.floor(Math.random() * 3);
}

// test to check computerPlay is randomly generating each choice
console.log(computerPlay());

// get player choice for rps game
let playerSelection = prompt('Choose one of the following: rock, paper, or scissors');

console.log(playerSelection);

// get computer choice for rps game
let computerSelection = computerPlay();

console.log(computerSelection);

// // function to play one round of rps
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
//         return "Player wins!";
//     }
// }