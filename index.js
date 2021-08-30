const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");


const reset = () => {
  let answerArray = [];
  let guessNum = 6;
  let lettersGuessed = [];

  const game = () => {
    const word = wordBank[Math.floor(Math.random() * wordBank.length)];
    const letters = word.split("");
    let remainingLetters = word.length;

    const findAnswerArr = () => {
      letters.forEach((_, index) => {
        answerArray[index] = "_";
      });
    };
  
    findAnswerArr();

    console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
      
    
    while (remainingLetters > 0 && guessNum > 0) {
      console.log(answerArray.join(" "));
      let guess = prompt.question("Please guess a letter: ").toLowerCase;
                        
      const checkGuess = () => {
        if (guess === "") {
          console.log("\nPlease enter a letter.")
        } else if (/[^a-zA-Z]/.test(guess[0])) {
          console.log("\nPlease enter a letter.")
        } else if (/[a-zA-Z]/.test(guess[0])) {
          letters.forEach((letter, i) => {
            if (guess[0] === letter) {
              if (answerArray[i] === "_") {
                answerArray[i] = guess[0];
                remainingLetters--;
              };
            };
          });
          if (!lettersGuessed.includes(guess[0]) && !letters.includes(guess[0])) {
            guessNum-- 
          };
          if (!lettersGuessed.includes(guess[0])) {
            lettersGuessed.push(guess[0]);};
            };
          };
        };

    checkGuess();
     
    const drawHangman = () => {
      if (guessNum === 6) {
        console.log(`\nYou have ${guessNum} guesses left.`)
      } else if (guessNum === 5) {
        console.log(`\n O \n\n\n`);
        console.log(`You have ${guessNum} guesses left.`)
      } else if (guessNum === 4) {
        console.log(`\n O \n | \n\n`)
        console.log(`You have ${guessNum} guesses left.`)
      } else if (guessNum === 3) {
        console.log(`\n O \n/| \n\n`)
        console.log(`You have ${guessNum} guesses left.`)
      } else if (guessNum === 2) {
        console.log(`\n O \n/|\\\n\n`)
        console.log(`You have ${guessNum} guesses left.`)
      } else if (guessNum === 1) {
        console.log(`\n O \n/|\\\n/\n`)
        console.log(`You have ${guessNum} guesses left.`)
      } else if (guessNum === 0) {
        console.log(`\n O \n/|\\\n/ \\\n`)
        console.log(`You have ${guessNum} guesses left.`)
      };
      console.log(`You have guessed ${lettersGuessed}.\n`);
    };

    drawHangman();

    };

      const showResults = () => {
      if (remainingLetters > 0) {
        console.log(answerArray.join(" "));
        console.log(`\n\nSorry, you are out of guesses.\nThe answer was ${word}.\n`)
        losses++;
      } else {
        console.log(answerArray.join(" "));
        console.log(`\n\nGood job!\nThe answer was ${word}.\n`)  
        wins++;
      };
      console.log(`\nYou won ${wins} rounds and have lost ${losses} rounds.\n`)
    };

    showResults();

  };
 game();




while(true) {
    reset();
};