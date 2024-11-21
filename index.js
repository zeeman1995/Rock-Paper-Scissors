
//Firstly list all the possible options avaliable in the game.
const options = ["rock", "paper", "scissor"]
// write the function for the computer choice
function getComputerChoice(){
//Manke the computer to choice to be done random.   
 const choice = options[Math.floor(Math.random() * options.length)];
 //Create a return for the computerchoice to return any of the options.
    return choice;
}
// check who is winning bwtween the playerSelection and the ComputerSelection.
function checkWinners (playerSelection, ComputerSelection){
    //if the playerSelection is equal to the computerSelection return tie.
if (playerSelection == ComputerSelection){
    return"Tie";
}
//else if the playerSelection is not equal to the computerSelection return the each options.
  else if(
    (playerSelection == "rock" && ComputerSelection == "scissor") ||
    (playerSelection == "scissor" && ComputerSelection == "paper") ||
     (playerSelection == "paper" && ComputerSelection == "rock")
 ) {
    return "Player";
 }
 else{
    return "Computer"
 }
}
//let create a function called playRound to know who win
function playRound(playerSelection,computerSelection){
    const result = checkWinners(playerSelection,computerSelection); 
    if (result == "Tie"){
        return "It is a Tie"
    }
    else if (result == "Player"){
        return `You win! ${playerSelection} beat ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beat ${playerSelection}`
    }
}
function getPlayerChoice(){
    let validatedInput= false;
    while(validatedInput ==false){
        const choice = prompt("Rock Paper Scissor");
        if (choice==null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function game(){
     let playerScore=0;
     let computerScore=0;
    console.log("Welcome!");
    for (let i=0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("-------------");
        if (checkWinners(playerSelection,computerSelection) == "Player"){
            playerScore++
        }
        else if (checkWinners(playerSelection,computerSelection) =="computer"){
            computerScore++
        }
        
    }
    console.log("Game over.")
    if(playerScore>computerScore){
        console.log("Player is the winner")
    }
    else if(playerScore<computerScore){
        console.log("Computer is the winner")
    }
    else{
        console.log("We have a Tie")
    }
}
game();
