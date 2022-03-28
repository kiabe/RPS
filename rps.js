function computerPlay() {
    if (randomNum() == 0) {
        return "rock";
    } else if (randomNum() == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function randomNum() {
    return Math.floor(Math.random() * 3);
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());