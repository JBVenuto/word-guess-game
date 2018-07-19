//Array with words to fit the scifi theme
var wordList = ["star", "space", "alien", "galaxy", "planet","nebula"]
var arrLength = wordList.length;

//Select a word from the available words
var i = Math.floor(Math.random() * arrLength);
var word = wordList[i];
var j = word.length;

var wrongChars = [];
//Make an array that is the same length as the word and full of *
var arrStars = []

for(k = 0; k < j; k++) {
    arrStars.push("*");
}

//Get the user's letter guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    var place = word.indexOf(userGuess);
    if(place === -1) {
        wrongChars.push(userGuess);
    }
    else {
        arrStars.splice(place, 1, userGuess);
    }
}


//Put the letter into the word if it was a correct guess


//Put the letter into a list of wrongly guessed letters


//Logs variables to the console
console.log(arrLength);
console.log(wordList);
console.log(word);
console.log(i);
console.log(j);
console.log(arrStars);

//Variable to hold HTML that has live game information for the use to view
var html =
    // "<p>Wins: " + wins + "</p>"
    "<p>" + arrStars + "</p>"
    // "<p> Guesses remaining: " + guessLeft + "</p>"
    "<p>Letters incorrectly guessed: </p>"
    "<p>" + wrongChars + "</p>";
