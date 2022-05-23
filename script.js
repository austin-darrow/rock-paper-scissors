//Prompt user to choose rock, paper, or scissors. Store choice in variable. Make sure it's case insensitive

let choose = prompt("Choose one: Rock, Paper, Scissors").toLowerCase();
choose;
let userPlay = choose;

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
} //note: use console.log(computerPlay()); to test

//Compare user vs. computer, console.log winner of that round

if () {
    userScore++;
} else {
    computerScore++;
}
console.log(score);

//Continue playing until either user or computer wins 3 rounds, then console.log overall winner

let round = 1;
let userScore;
let computerScore;
let score = "You've won " + userScore + " rounds. Computer has won " + computerScore + " rounds.";