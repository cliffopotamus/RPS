function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let option = options[num];
    console.log(option);
    return option;
}

function getPlayerChoice(){
    let playerSelection = prompt("Please select Rock, Paper, or Scissors");
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
        }
    }

    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection == "rock"){
            let res = "You Win! Paper beats Rock";
            console.log(res);
        }
        else{
            let res = "You Lose! Scissors beats Paper";
            console.log(res);
        }
    }

    else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "rock"){
            let res = "You Lose! Rock beats Scissors";
            console.log(res);
        }
        else{
            let res = "You Win! Scissors beats Paper";
            console.log(res);
        }
    }
}