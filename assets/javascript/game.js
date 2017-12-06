var wins = 0;
var losses = 0;
var wordBank = ["scranton", "dwight", "michael", "jim", "creed"];
var guessesLeft = 15;
var guessedLetter;
var gussedLetterArray = new Array();
var winningWord;
var displayArray;  // Array for currentWord display


// Function that chooses random letter from array named letter defined above.
function randomizeWord() {
    winningWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    displayArray = new Array(winningWord.length); // Array with 6 slots 

    // Fill displayArray with "_" values.
    displayArray.fill("_");

    // Display array contents to page.
    displayCurrentWord();
}

// Function to display current correct letter guesses on page
function displayCurrentWord() {
    document.getElementById("currentWord").innerHTML = " ";  // Clears div on page

    for (i = 0; i < displayArray.length; i++) {
        document.getElementById("currentWord").innerHTML += displayArray[i] + " ";
    }
}

$(document).ready(function () {
    randomizeWord();
});


document.onkeyup = function (event) {
    // User Input
    guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guess").innerHTML += guessLetter + " ";

    // Check if letter exists in winningWord. Add letter to displayArray at index found.
    for (i = 0; i < winningWord.length; i++) {
        if (winningWord.charAt(i) == guessLetter) {
            displayArray[i] = guessLetter;  // displayArray = ["n", "_", "_", "_", "_", "n"]
        }
    }
    displayCurrentWord();

    guessesLeft -= 1;
    document.getElementById("remainingGuess").innerHTML = guessesLeft;

    var match = guessLetter.match(winningWord);
}