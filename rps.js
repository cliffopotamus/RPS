function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let option = options[num];
    console.log(option);
    return option;
}