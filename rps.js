function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let option = options[num];
    console.log(option);
    let computerChoice = option.toString();
    return computerChoice;
}

function getPlayerChoice(){
    let answer = prompt("Please select Rock, Paper, or Scissors");
    let playerSelection = answer.toString();
    return playerSelection;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        let res = "Tie! Please try again."
        return res;
    }
    else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection == "paper"){
            let res = "You Lose! Paper beats Rock";
            return res;
            console.log(res);
        }
        else{
            let res = "You Win! Rock beats Scissors";
            console.log(res);
            return res;
        }
    }

    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection == "rock"){
            let res = "You Win! Paper beats Rock";
            console.log(res);
            return res;
        }
        else{
            let res = "You Lose! Scissors beats Paper";
            console.log(res);
            return res;
        }
    }

    else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "rock"){
            let res = "You Lose! Rock beats Scissors";
            console.log(res);
            return res;
        }
        else{
            let res = "You Win! Scissors beats Paper";
            console.log(res);
            return res;
        }
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 10; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if(result.includes("Win")){
            playerCount++;
        }

        else if (result.includes("Lose")){
            computerCount++;
        }

        else if (result.includes("Tie")){
            continue;
        }

        if (playerCount == 3){
            let res = "Congratulations, you win!"
            console.log(res);
            return res;
        }

        if (computerCount == 3){
            let res = "You lose, try again!"
            console.log(res);
            return res;
        }
    }
}