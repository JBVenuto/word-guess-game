//Array with words to fit the scifi theme
var wordList = ["star", "space", "alien", "galaxy", "planet","nebula"]
var arrLength = wordList.length;

//Select a word from the available words
var i = Math.floor(Math.random() * arrLength);
var word = wordList[i];
var j = word.length;

//Way to track number of wins the user has and number of guesses they have left
var wins = 0;
var guessLeft = 12;

//Variable to deal with wrong letter guesses
var wrongChars = [];
var guessLeft = 10;

//Make an array that is the same length as the word and full of *
var arrStars = [];

for(k = 0; k < j; k++) {
    arrStars.push("*");
}

//Get the user's letter guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    var place = word.indexOf(userGuess);
    //Put the letter into a list of wrongly guessed letters
    if(place === -1) {
        wrongChars.push(userGuess);
    }
    //Put the letter into the word if it was a correct guess
    else {
        arrStars.splice(place, 1, userGuess);
    }

//Check to see if there are any letters left to guess


//Logs variables to the console
console.log(arrLength);
console.log(wordList);
console.log(word);
console.log(i);
console.log(j);
console.log(arrStars);
console.log(wrongChars);

//Variable to hold HTML that has live game information for the user to view
var html =
    "<p>Wins: " + wins + "</p>"
    "<p>" + arrStars + "</p>"
    "<p> Guesses remaining: " + guessLeft + "</p>"
    "<p>Letters incorrectly guessed: </p>"
    "<p>" + wrongChars + "</p>";


    document.querySelector("#game").innerHTML = html;
}