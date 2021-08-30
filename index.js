const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");


let win = 0;
let loss = 0;


//default variables to reset the game
const reset = () => {
  let answerArray = [];
  let guesses = 6;
  let guessedLetters = [];
  

  //main game function, selects a random word from the word bank and splits it into an array of letters
  const game = () => {
    const word = wordBank[Math.floor(Math.random() * wordBank.length)];
    const letters = word.split("");
    let remainingLetters = word.length;
  
    const findAnswerArray = () => {
      letters.forEach((_, index) => {
        answerArray[index] = "_"
      });
    };
    
    findAnswerArray();
    
    console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
    
    while (remainingLetters > 0 && guesses > 0) {
      console.log(answerArray.join(" "));
      let guess = prompt.question("\nPlease guess a letter: ").toLowerCase();


      //check the guess to make sure that it is a string and/ or part of the word      
      
      const checkGuess = () => {
        if (guess === "") {
          console.log("\nPlease enter a letter.")
        } else if (/[^a-zA-Z]/.test(guess[0])) {
          console.log("\nPlease enter a letter.")
        } else if (/[a-zA-Z]/.test(guess[0])) {
          letters.forEach((letter, index) => {
            if (guess[0] === letter) {
              if (answerArray[index] === "_") {
                answerArray[index] = guess[0];
                remainingLetters--;
              };
            };
          });
          if (!guessedLetters.includes(guess[0]) && !letters.includes(guess[0])) {
            guesses--
          };
          if (!guessedLetters.includes(guess[0])) {
            guessedLetters.push(guess[0]);
          };
        };
      };

      checkGuess();

      //draws stick figure in terminal, contigent to the amount of guesses left
      const drawHangman = () => {
        if (guesses === 6) {
          console.log(`\nYou have ${guesses} guesses left.`)
        } else if (guesses === 5) {
          console.log(`\n O \n\n\n`);
          console.log(`You have ${guesses} guesses left.`)
        } else if (guesses === 4) {
          console.log(`\n O \n | \n\n`)
          console.log(`You have ${guesses} guesses left.`)
        } else if (guesses === 3) {
          console.log(`\n O \n/| \n\n`)
          console.log(`You have ${guesses} guesses left.`)
        } else if (guesses === 2) {
          console.log(`\n O \n/|\\\n\n`)
          console.log(`You have ${guesses} guesses left.`)
        } else if (guesses === 1) {
          console.log(`\n O \n/|\\\n/\n`)
          console.log(`You have ${guesses} guesses left.`)
        } else if (guesses === 0) {
          console.log(`\n O \n/|\\\n/ \\\n`)
          console.log(`You have ${guesses} guesses left.`)
        };
        console.log(`You have guessed ${guessedLetters}.\n`);
      };

      drawHangman();
    
    };

    //result promts, joins the answer array letters to form a single string
    const showResults = () => {
      if (remainingLetters > 0) {
        console.log(answerArray.join(" "));
        console.log(`\n\nSorry, you are out of guesses.\nThe answer was ${word}.\n`)
        loss++;
      } else {
        console.log(answerArray.join(" "));
        console.log(`\n\nGood job!\nThe answer was ${word}.\n`)  
        win++;
      };
      console.log(`\nYou have won ${win} round(s) and have lost ${loss} round(s).\n`)
    };
    
    showResults();
  
  };
  
  game();

};

//resets the code to be able to play multiple rounds

while(true) {
  reset();
};