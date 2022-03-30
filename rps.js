// randomly generates one of 'rock', 'paper', or 'scissors' for CPU based on random number result
function computerPlay() {
    if (randomNum() == 0) {
        return "rock";
    } else if (randomNum() == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// randomly generates a number 0-2, which determines what the computer chooses
function randomNum() {
    return Math.floor(Math.random() * 3);
}

// test to check computerPlay is randomly generating each choice
console.log(computerPlay());

// player choice is unknown until playRound called
let playerSelection;

// function to play one round of rps when playerSelection and computerSelection are passed into function
function playRound() {
    // preset messages to display on win/lose/draw results
    let win = "You win the round!";
    let lose = "You lose the round!";
    let draw = "It is a tie! Go again!";

    // prompt player to make choice
    let playerSelection = prompt("Choose one of the following: rock, paper, or scissors.").toLowerCase();
    console.log(playerSelection);

    // get computer choice for rps game and assign to computerSelection
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return win;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return lose;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return draw;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return win;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return lose;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return draw;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return win;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return lose;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return draw;
    } else {
        return "Not a valid choice";
    }
}

// test playRound function
console.log(playRound());

// function that repeats playRound 5 times
function game() {
// loops playRound 5 times
    for (i = 0; i < 5; i++) {
        console.log(playRound());
    }

}
console.log(game());
