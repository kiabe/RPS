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

// preset messages to display on win/lose/draw results
let win = "You win the round!";
let lose = "You lose the round!";
let draw = "It is a tie! Go again!";

// blank x variable to store result of playRound in
let x;

// initial scores for player and computer
let playerScore = 0;
let computerScore = 0;

// function to play one round of rps when playerSelection and computerSelection are passed into function
function playRound() {

    // prompt player to make choice
    // let playerSelection = prompt("Choose one of the following: rock, paper, or scissors.").toLowerCase();
    // console.log(playerSelection);

    // get computer choice for rps game and assign to computerSelection
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return x = win;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return x = lose;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return x = draw;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return x = win;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return x = lose;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return x = draw;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return x = win;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return x = lose;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return x = draw;
    } else {
        return x = "Not a valid choice";
    }
}

// test playRound function
// console.log(playRound());

// checks what the result of playRound is and stores it in 'x'
console.log(x);

// checks if x is equal to win/lose/draw variables declared earlier
// should have 1 true scenario and 2 false scenarios
console.log(x == win);
console.log(x == lose);
console.log(x == draw);


// keeps track of score
function scoreKeeper() {
    
    switch(x) {
        case win:
            playerScore++;
            console.log(playerScore);
            console.log(computerScore);
            break;
        case lose:
            computerScore++;
            console.log(playerScore);
            console.log(computerScore);
            break;
        case draw:
            console.log(playerScore);
            console.log(computerScore);
            break;
        default:
            console.log('Not a valid round');
            console.log(playerScore);
            console.log(computerScore);
    }
}

// checks who has higher score and declares a winner
function scoreCheck() {
    if (playerScore > computerScore) {
        return "Game over! Player has won!";
    } else if (playerScore < computerScore) {
        return "Game over! Player has lost! Better luck next time!";
    } else {
        return "Game over! It is a draw!";
    }
}

// display text for scorekeeping
const playerTally = document.querySelector('.playerScore');
playerTally.textContent = 'Player Score = ';
const computerTally = document.querySelector('.computerScore');
computerTally.textContent = 'Computer Score = ';

// selects all buttons and creates a nodelist of the matches and stores it in variable buttons
const buttons = document.querySelectorAll('button');

// iterates through each button and adds an event click listener to each one
// clicking one of rock, paper, or scissors button will set playerSelection variable to the id associated with the pushed button
// will also call playRound and display result in console
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        playerSelection = button.id;
        console.log(playerSelection);
        console.log(playRound());
    });
});


