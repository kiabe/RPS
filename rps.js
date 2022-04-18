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

// gets reference to container div tag in html file
const container = document.querySelector('#container');

// gets reference to div with class result in html file
const result = document.querySelector('.result')

// create div for message for win/lose/draw results
const message = document.querySelector('.message');
result.appendChild(message);

// DOM methods for scorekeeping
const player = document.createElement('div');
player.classList.add('playerScore');
player.textContent = `Player score is ${playerScore}`;
result.appendChild(player);

const computer = document.createElement('div');
computer.classList.add('computerScore');
computer.textContent = `Computer score is ${computerScore}`;
result.appendChild(computer);

// creates a variable 'end' for display message when either side gets 5 points first
const end = document.createElement('div');
end.classList.add('end');
result.appendChild(end);

// creates reset button
const reset = document.createElement('button');
const restartSpace = document.createElement('div');
reset.classList.add('reset');
restartSpace.classList.add('restartSpace');
reset.textContent = 'Reset';
container.appendChild(restartSpace);
restartSpace.appendChild(reset);

// function to play one round of rps when playerSelection and computerSelection are passed into function
// also keeps score and updates with each round
function playRound() {

    // get computer choice for rps game and assign to computerSelection
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        message.textContent = `${win}`;
        playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        message.textContent = `${lose}`;
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        message.textContent = `${draw}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        message.textContent = `${win}`;
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        message.textContent = `${lose}`;
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        message.textContent = `${draw}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        message.textContent = `${win}`;
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        message.textContent = `${lose}`;
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        message.textContent = `${draw}`;
    } else {
        message.textContent = "";
    }
    player.textContent = `Player score is ${playerScore}`;
    computer.textContent = `Computer score is ${computerScore}`;
    scoreCheck();
}

// checks who has higher score and declares a winner
function scoreCheck() {

    if (playerScore === 5) {
        end.textContent = `Player has reached ${playerScore} points. Player wins!`;
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    } else if (computerScore === 5) {
        end.textContent = `Computer has reached ${computerScore} points. Computer wins!`;
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    } else {
        end.textContent = 'Game ongoing';
    }
}

// at game end, allow player to reset game
function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        end.textContent = "";
        player.textContent = `Player score is ${playerScore * 0}`;
        computer.textContent = `Computer score is ${computerScore * 0}`;
        document.querySelector('#rock').disabled = false;
        document.querySelector('#paper').disabled = false;
        document.querySelector('#scissors').disabled = false;
    } else {
        return "I don't know how you got here, but return to the depths from whence you came.";
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
        playRound();
        console.log(message.textContent);
    });
});

// enables reset button to perform reset function
reset.addEventListener('click', resetGame);
