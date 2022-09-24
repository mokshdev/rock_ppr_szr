/* 
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

let choices = {0:"rock",1:"paper",2:"scissors"}

let computerChoice
function getComputerChoice(){
  let choose = Math.floor(Math.random() * 3);
  computerChoice = (choices[choose]);
  console.log("computer chose:",computerChoice)
}
// getComputerChoice()

 
/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"


Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/
let userChoice;

function user(){
    let user = prompt("choose any one of the following :", "rock :: paper :: scissors");
    userChoice = user.toLocaleLowerCase()
    
}




function looping(){
  user();
while((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors") ){
  user();
}
while((userChoice == "rock") || (userChoice == "paper") || (userChoice == "scissors")){
  console.log("user chose: ",userChoice)
  break
}
}

// looping();


let userScore = 0;
let compScore = 0;

function round() {
  
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




/*
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
*/

// round();
// console.log("computer score: ",compScore,"user score: ",userScore);

let result;

function game() {
  
  for (let result = 1;result < 6;result++) {
    getComputerChoice();
    looping();
    round();
    
    // console.log("computer score: ",compScore,"user score: ",userScore);
}  

if (userScore < compScore) {
  console.log("you have lost to a dumb machine")
} else if(compScore > userScore) {
  
}
}

game();