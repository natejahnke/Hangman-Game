var wins = 0;
var losses = 0;
var wordBank = ["scranton", "dwight", "michael", "jim", "creed", "pam", "dunder mifflin", "paper", "scuttlebutt"];
var guessesLeft = 10;
var guessedLetter;
var gussedLetterArray = new Array();
var winningWord;
var displayArray; // Array for currentWord display

// Function to clear an element box on the html page.
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

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
    document.getElementById("currentWord").innerHTML = " "; // Clears div on page

    for (i = 0; i < displayArray.length; i++) {
        document.getElementById("currentWord").innerHTML += displayArray[i] + " ";
    }
}

$(document).ready(function() {
    randomizeWord();
});



document.onkeyup = function(event) {
    // User Input
    guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guess").innerHTML += guessLetter + " ";

    // Check if letter exists in winningWord. Add letter to displayArray at index found.
    for (i = 0; i < winningWord.length; i++) {
        if (winningWord.charAt(i) == guessLetter) {
            displayArray[i] = guessLetter; // displayArray = ["n", "_", "_", "_", "_", "n"]
        }
    }
    displayCurrentWord();
    // guessesLeft -= 1;
    // document.getElementById("remainingGuess").innerHTML = guessesLeft;

    // var match = guessLetter.match(winningWord);




    if (guessesLeft === 0) {
        alert("You Lost! New word will be chosen.")
        losses += 1;
        document.getElementById("lossBox").innerHTML = losses;
        clearBox("remainingGuess");
        clearBox("guess");
        clearBox("currentWord");
        randomizeWord();
        guessesLeft = 10;

    } else if (displayArray.includes("_")) {
        guessesLeft -= 1;
        document.getElementById("remainingGuess").innerHTML = guessesLeft;

    } else {
        alert("You Win! New word will be chosen.")
        wins += 1;
        document.getElementById("winBox").innerHTML = wins;
        clearBox("remainingGuess");
        clearBox("guess");
        clearBox("currentWord");
        randomizeWord();
        guessesLeft = 10;
    }

}

























// if (displayArray.includes("_")) {
//     guessesLeft -= 1;
//     document.getElementById("remainingGuess").innerHTML = guessesLeft;
//     // losses += 1;
//     // document.getElementById("lossBox").innerHTML = losses;
// } else if (guessesLeft === 1) {
//     alert("You Lost! New word will be chosen.")
//     losses += 1;
//     document.getElementById("lossBox").innerHTML = losses;
//     clearBox("remainingGuess");
//     clearBox("guess");
//     clearBox("currentWord");
//     randomizeWord();
//     guessesLeft = 15;


// }