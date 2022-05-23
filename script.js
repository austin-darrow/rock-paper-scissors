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
let score = "You've won " + userScore + " rounds. Computer has won " + computerScore + " rounds.";

let match = function(userPlay, computerPlay) {
    switch (true) {
        case userPlay == computerPlay:
            console.log("you both played " + userPlay + "! It's a tie!");
            break;
        case userPlay == "rock" && computerPlay == "scissors":
            console.log("You played rock. The computer played scissors. You win this round!");
            return ++userScore;
        case userPlay == "paper" && computerPlay == "rock":
            console.log("You played paper. The computer rock. You win this round!");
            return ++userScore;
        case userPlay == "scissors" && computerPlay == "paper":
            console.log("You played scissors. The computer played paper. You win this round!");
            return ++userScore;
        case userPlay == "rock" && computerPlay == "paper":
            console.log("You played rock. The computer played paper. The computer wins this round!");
            return ++computerScore;
        case userPlay == "paper" && computerPlay == "scissors":
            console.log("You played paper. The computer played scissors. The computer wins this round!");
            return ++computerScore;
        case userPlay == "scissors" && computerPlay == "rock":
            console.log("You played scissors. The computer played rock. The computer wins this round!");
            return ++computerScore;
    }
    console.log(score);
}

//Continue playing until either user or computer wins 3 rounds, then console.log overall winner