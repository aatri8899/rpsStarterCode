// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function() {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var array = ["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var random = Math.floor(Math.random() * 3);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    var newValue = array[random];
    console.log(array[random]);
    console.log(random);
    // Task 1, Step 4: return this new value
    return newValue;
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function(userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    var winner;
    
    if (userChoice === computerChoice) {
        winner = "tie";
        console.log("Tie");
        
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        winner = "computer wins";
        console.log("Computer Wins");
    }
    else if (userChoice == "rock" && computerChoice == "scissors"){
        winner = "user wins";
        console.log("User Wins");
    }
    
    else if (userChoice == "scissors" && computerChoice == "rock"){
        winner = "computer wins";
        console.log("Computer Wins");
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        winner = "user wins";
        console.log("User Wins");
    }
    else if (userChoice == "paper" && computerChoice == "scissors"){
        winner = "computer wins";
        console.log("Computer Wins");
    }
        else if (userChoice == "paper" && computerChoice == "rock"){
        winner = "user wins";    
        console.log("User Wins");
    }
    
    
    
    
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
    console.log("Winner: " + winner);
    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    
        $("#computer-choice").html(computerChoice);
        
        $("#computer-choice").html('<img id="rock" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png" width="100px" />');
    // Task 5: Show the winner in HTML after the word "Winner:"
    
    $("#winner").html(winner);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {
    $("#scissors").click( function(){
	var userChoice = "scissors";
	var computerChoice = generateComputerChoice();
	pickWinner(userChoice, computerChoice);
});
    $("#rock").click( function(){
	var userChoice = "rock";
	var computerChoice = generateComputerChoice();
	pickWinner(userChoice, computerChoice);
});
    $("#paper").click( function(){
	var userChoice = "paper";
	var computerChoice = generateComputerChoice();
	pickWinner(userChoice, computerChoice);
});

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);

});
