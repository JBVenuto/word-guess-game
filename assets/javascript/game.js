//Array with words to fit the scifi theme
var wordList = ["stars", "space", "alien", "galaxy", "planet","nebula"]
var arrLength = wordList.length;

//Select a word from the available words
var i = Math.floor(Math.random() * arrLength);
var word = wordList[i];
var j = word.length;

//Make an array that is the same length as the word and full of *

//Get the user's letter guess
document.onkeyup = function(event) {}


//Put the letter into the word if it was a correct guess


//Put the letter into a list of wrongly guessed letters


//Logs variables to the console
console.log(arrLength);
console.log(wordList);
console.log(word);
console.log(i);