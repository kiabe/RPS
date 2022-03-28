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

let win = "Player wins!";
let lose = "Player loses!";
let draw = "It's a tie! Go again!";

// function to play one round of rps
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return win;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return lose;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return win;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return lose;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return lose;
    } else {
        return draw;
    }
}
console.log(playRound(playerSelection, computerSelection));

