/* 
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

let choices = {0:"rock",1:"paper",2:"scissors"}
let compu;
function getComputerChoice(){
  let choose = Math.floor(Math.random() * 3);
  compu = (choices[choose]);
}
getComputerChoice()
//  console.log(compu)
/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"


Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/
let userChoice;

function user(){
    let user = prompt("choose any one of the following :", "rock :: paper :: scissors");
    userChoice = user.toLocaleLowerCase()
    
}

user();



while((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors") ){
  user();
}
while((userChoice == "rock") || (userChoice == "paper") || (userChoice == "scissors")){
  console.log(userChoice)
  break
}


function round() {
    
}