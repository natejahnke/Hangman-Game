var wins = 0;
var losses = 0;
var wordBank = ["Scranton", "Dwight", "Michael", "Jim"];
var guessesLeft = 15;
var guessLetter;
var winningWord;

// Function that chooses random letter from array named letter defined above.
function randWord() {
    var letter = wordBank[Math.floor(Math.random() * wordBank.length)];
    return letter;
}


$(document).ready(function() {
    winningWord = randWord();
});


document.onkeyup = function(event) {

    guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guess").innerHTML += guessLetter + ", ";
    guessesLeft -= 1;
    document.getElementById("remainingGuess").innerHTML = guessesLeft;

    if (guessLetter.includes(winningWord)) {
        document.getElementById("currentWord").innerHTML = guessLetter;
    }
}