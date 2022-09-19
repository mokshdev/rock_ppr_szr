// creatung the getComputerChoice function



function getComputerchoice() {
    let b = ["rock","paper","scissor"];
    
    let computerChoice = b[Math.floor(Math.random() * b.length)];
     console.log(computerChoice);
}

// user choice

function playerSelection(){
    let userInput = prompt("choose one", "rock paper scissors ");
    let userIn = userInput.toLowerCase();
    console.log(userIn);
}

let user = playerSelection();
let computer = getComputerchoice();


    console.log(computer)
