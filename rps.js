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
let playerSelection = prompt('Choose one of the following: rock, paper, or scissors').toLowerCase();

console.log(playerSelection);

// get computer choice for rps game
let computerSelection = computerPlay();

console.log(computerSelection);

// messages to print on player win/lose
let win = "Player wins!";
let lose = "Player loses!";
let draw = "It's a tie! Go again!";

// initial score count for both player and computer
let playerTally = 0;
let computerTally = 0;

// function to play one round of rps, player gets +1 point on wins, and computer gets +1 on player losses. +0 for draws.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerTally++;
        return win;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerTally++;
        return lose;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerTally++;
        return win;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerTally++;
        return lose;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerTally++;
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerTally++;
        return lose;
    } else {
        return draw;
    }
}
console.log(playRound(playerSelection, computerSelection));



function game() {
    for (let i = 0; i < 5; i++) {}
}

// function called for when either player or computer reaches 5 points
function gameOver() {
    if (playerTally == 5 || computerTally == 5) {
        return "Game Over!";
    }
}

