// Array with words to fit the scifi theme
var wordList = ["star", "space", "alien", "orbit", "planet","nebula"]
var arrLength = wordList.length;

// Select a word from the available words
var i = Math.floor(Math.random() * arrLength);
var word = wordList[i];
var j = word.length;


//Way to track number of wins the user has and number of guesses they have left
var wins = 0;

//Variable to deal with wrong letter guesses
var wrongChars = [];
var guessLeft = 12;

//Make an array that is the same length as the word and full of *
var arrStars = [];
for(k = 0; k < j; k++) {
    arrStars.push("*");
}


//Get the user's letter guess
document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var place = word.indexOf(userGuess);
    //Put the letter into a list of wrongly guessed letters
    if(place === -1) {
        wrongChars.push(userGuess);
        guessLeft--;
    }
    //Put the letter into the word if it was a correct guess
    else {
        arrStars.splice(place, 1, userGuess);
    }

    //Check to see if there are any letters left to guess
    var starLeft = arrStars.indexOf("*");
    
    if(starLeft == -1) {
        //add 1 to wins, pick a new word
        wins++;
        guessLeft = 12;
        arrStars = [];
        wrongChars = [];
      
    }

    //Check if the user still has guessing remaining
    if(guessLeft === 0) {
        alert("Try a new word");
        guessLeft = 12;
    }

    //Logs variables to the console
    console.log(arrLength);
    console.log(wordList);
    console.log(word);
    console.log(i);
    console.log(j);
    console.log(arrStars);
    console.log(wrongChars);

    //Variable to hold HTML that has live game information for the user to view
    var gamehtml = 
        " Wins: " + wins + " <hr> " + arrStars.join(" ") + " <hr>" + "Guesses remaining: " + guessLeft + "<hr> Letters incorrectly guessed: <hr>" + wrongChars + "<hr>";

    document.getElementById("game").innerHTML = gamehtml  
}
