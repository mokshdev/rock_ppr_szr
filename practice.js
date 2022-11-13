// javascript for buttons


let rock_button = document.querySelector('.rock')
let paper_button = document.querySelector('.paper')
let scissor_button = document.querySelector('.scissor')


// taking input of user 

let buttonChoice;

// function for initializing values 
function rock_choice() {
  buttonChoice = "rock";
  return(buttonChoice);
}

function paper_choice() {
  buttonChoice = "paper";
  return(buttonChoice);
}

function scissor_choice() {
  buttonChoice = "scissors";
  return(buttonChoice);
}

// rock_button.addEventListener("click", rock_choice);
// paper_button.addEventListener("click", paper_choice);
// scissor_button.addEventListener("click", scissor_choice);


let userChoice;
function user() {
  rock_button.addEventListener("click", rock_choice);
  paper_button.addEventListener("click", paper_choice);
  scissor_button.addEventListener("click", scissor_choice);
}



// computer choices

let choices = {0:"rock",1:"paper",2:"scissors"}


function getComputerChoice(){
  let choose  =Math.floor(Math.random() * 3);
  let computerChoice = (choices[choose]);
}

// game logic

let userScore = 0;
let compScore = 0;

function round() {
    userChoice = user()
    let computerChoice = getComputerChoice()
  
    if ((userChoice == "rock" && computerChoice == "scissors")
    ||
    (userChoice == "paper" && computerChoice == "rock")
    ||
    (userChoice == "scissors" && computerChoice == "paper")) {
        console.log("You Won! " ,userChoice,"beats",computerChoice);
        userScore++; //throwing error
    } else if ((computerChoice == "rock" && userChoice == "scissors")
    ||
    (computerChoice == "paper" && userChoice == "rock")
    ||
    (computerChoice == "scissors" && userChoice == "paper")) {
        console.log("You Loose! " ,computerChoice,"beats",userChoice);
        compScore++; // throwing error
    }else{
        console.log("its a draw you chose ", userChoice ," and computer chose ", computerChoice);
    }
    console.log("computer score: ",compScore,"user score: ",userScore);
}




