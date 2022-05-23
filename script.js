//Prompt user to choose rock, paper, or scissors. Store choice in variable. Make sure it's case insensitive

let userPlay = () => prompt("Choose one: Rock, Paper, Scissors").toLowerCase();

//Use random method for computer to choose rock, paper, or scissors. Store in separate variable

let computerPlay = function() {
    let rand = Math.floor((Math.random() * 3) + 1); //return number between 1 and 3
    if (rand == 1) {
        return "rock";
    } else if (rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Compare user vs. computer, console.log winner of that round

let userScore = 0;
let computerScore = 0;
let score = () => console.log(`You've won ${userScore} rounds. Computer has won ${computerScore} rounds.`);

let match = function(userPlay, computerPlay) {
    switch (true) {
        case userPlay == computerPlay:
            console.log(`you both played ${userPlay}! It's a tie!`);
            break;
        case (userPlay == "rock" && computerPlay == "scissors") || (userPlay == "paper" && computerPlay == "rock") || (userPlay == "scissors" && computerPlay == "paper"):
            console.log(`You played ${userPlay}. The computer played ${computerPlay}. You win this round!`);
            return userScore++;
        default:
            console.log(`You played ${userPlay}. The computer played ${computerPlay}. The computer wins this round!`);
            return computerScore++;
    }
}

function playGame() {
    while (userScore < 3 && computerScore < 3) {
        match(userPlay(),computerPlay());
        console.log(`User Score = ${userScore}`);
        console.log(`Computer Score = ${computerScore}`);
        score();
    }
    if (userScore == 3) {
        let repeat = confirm("You win the game! Congrats! Play again?");
        if (repeat) {
            userScore = 0;
            computerScore = 0;
            playGame();
        } else {
            console.log("Goodbye!")
        }
    } else {
        let repeat = confirm("You lose the game. Try again?");
        if (repeat) {
            userScore = 0;
            computerScore = 0;
            playGame();
        } else {
            console.log("Goodbye!")
        }
    }
}

playGame();

//Continue playing until either user or computer wins 3 rounds, then console.log overall winner