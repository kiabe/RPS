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

// player choice is unknown until playRound called
let playerSelection;

// preset messages to display on win/lose/draw results
let win = "You win the round!";
let lose = "You lose the round!";
let draw = "It is a tie! Go again!";

// initial scores for player and computer
let playerScore = 0;
let computerScore = 0;

// function to play one round of rps when playerSelection and computerSelection are passed into function
function playRound() {

    // gets reference to div with class result in html file
    const result = document.querySelector('.result')

    // create div for message for win/lose/draw results
    const message = document.querySelector('.message');
    result.appendChild(message);

    // get computer choice for rps game and assign to computerSelection
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        message.textContent = `${win}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        message.textContent = `${lose}`;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        message.textContent = `${draw}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        message.textContent = `${win}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        message.textContent = `${lose}`;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        message.textContent = `${draw}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        message.textContent = `${win}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        message.textContent = `${lose}`;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        message.textContent = `${draw}`;
    } else {
        message.textContent = "You're something else if you got this message";
    }
}

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




