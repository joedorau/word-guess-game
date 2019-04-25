var lettersGuessed = [];//what letter guess
var guessesLeft = 5;//how many guesses left
var wins = 0;//start wins at zero
var loss = 0;

//'Math.random' gives a random number and you multiply it by 26 (number of letters). Then 'Math.floor it to get a whole number.Add 97 because of the Ascii table(The ascii code for a to z is 97 to 122.) the numbers are associated with the letter. string.fromCharCode converts it to a letter

// ": "a",     "98": "b",     "99": "c",     "100": "d",    
// "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
// "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
// "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
// "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
// "121": "y",    "122": "z",)

//gives random letter. How do you know to add 97????
var computerGuess =
    String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
    );
        console.log(computerGuess);//test if working

//function user keyboard input. got from Rock/paper game
document.onkeydown = function(event) {
    var keyboardPress = (String.fromCharCode(event.keyCode))

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyboardPress);//cheated here. what is this??

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter (usersKeypress) {

    // The some() method checks if any of the elements in an array pass a test (provided as a function).

    // The some() method executes the function once for each element present in the array:
    
    // If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
    // Otherwise it returns false
    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(usersKeypress + "Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);//test

        //show user's input in browser
        showLettersGuessed();
        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}

//function to show letters guessed in browser
function showLettersGuessed() {
    var str = lettersGuessed.join(", ");
    document.getElementById("userGuess").innerHTML = str;
}

function guessMatch (character) {

  

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();
    }else if (character !== computerGuess){
        alert("You lose");
        loss = loss +1;
        showLoss();
       
       

    } else if (guessesLeft === 0) {
        alert("Game over.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

//function to show wins
function showWins() {
    document.getElementById("wins").innerHTML = wins;
}
function showLoss(){
    document.getElementById("loss").innerHTML = loss;
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLoss();
}



startGame();

