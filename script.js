let rock = 1;
let paper = 2;
let scissor = 3;
let pc;
function getCompterChoice() {
    let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if (a == 1) {
        let pc = "r";
    }else if(a == 2){
        let pc = "p";
    }else{
        let pc = "s";
    }
}

let computerSelection = pc;
let playerSelection;
let userInput = prompt("choose one", "rock paper scissors ");
let userIn = userInput.toLowerCase();
    console.log("you chose :",userIn);

    if (userIn == "rock") {
        playerSelection = "r";
    } else if (userIn == "paper"){
        playerSelection = "p";
    } else if(userIn == "scissors"){
        playerSelection = "s";
    } else{
        userInput = prompt("choose a right option","rock paper scissors ");
    }

    console.log(playerSelection)

function round(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "its a draw";
    }else if(playerSelection == "r" && computerSelection == "s"){
        return "You won! rock beats scissors";
    }else if(playerSelection == "s" && computerSelection == "r"){
        return "You Lose! rock beats scissors";
    }else if(playerSelection == "r" && computerSelection == "p"){
        return "You lose! paper beats rock";
    }else if(playerSelection == "p" && computerSelection == "r"){
        return "You won! paper beats rock";
    }else if(playerSelection == "p" && computerSelection == "s"){
        return "You Lose! scissors beats paper";
    }else if(playerSelection == "s" && computerSelection == "p"){
        return "You won! sicssors beats paper";
    }else{
        console.log("error")
    }
}