let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let play = document.querySelector('#play');
let scoreboard = document.querySelector('#score');

let userPlay = (play) => {
    return play;
};

rock.addEventListener('click', () => {match(userPlay('rock'), computerPlay())});
paper.addEventListener('click', () => {match(userPlay('paper'), computerPlay())});
scissors.addEventListener('click', () => {match(userPlay('scissors'), computerPlay())});

let computerPlay = function() {
    let rand = Math.floor((Math.random() * 3) + 1); //return number between 1 and 3
    if (rand == 1) {
        return "rock";
    } else if (rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.querySelector('#userScoreDisplay');
let computerScoreDisplay = document.querySelector('#computerScoreDisplay');


let match = (userPlay, computerPlay) => {
    if (userScore == 5) {
        play.textContent = `You win the game! Refresh to play again.`;
    } else if (computerScore == 5) {
        play.textContent = `The computer wins the game. Refresh to play again.`;
    } else {
    switch (true) {
        case userPlay == computerPlay:
            play.textContent = `you both played ${userPlay}! It's a tie!`;
            break;
        case (userPlay == "rock" && computerPlay == "scissors") || (userPlay == "paper" && computerPlay == "rock") || (userPlay == "scissors" && computerPlay == "paper"):
            play.textContent = `You played ${userPlay}. The computer played ${computerPlay}. You win this round!`;
            userScore++;
            userScoreDisplay.textContent = `Your Score: ${userScore}`;
            return userScore;
        default:
            play.textContent = `You played ${userPlay}. The computer played ${computerPlay}. The computer wins this round!`;
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            return computerScore;
    }};
};