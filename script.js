const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playRound(computerSelection) {
    // make playerSelection lowercase
    let playerSelection = prompt().toLowerCase();
    
    // Check if it's a tie
    if (playerSelection === computerSelection) {
        console.log("It's a tie! Playing again");
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection == "scissors" || playerSelection === "scissors" && computerSelection === "paper") {
        // Check if player wins
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        // If not a tie and player doesn't beat computer, computer wins
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}

function game(numRounds) {
    let playerScore = 0;
    for (let i = 0; i<5; i+=1) {
        playerScore += playRound(getComputerChoice());
        console.log(`Your score is ${playerScore} after ${i + 1} rounds`);
    }
}

game();