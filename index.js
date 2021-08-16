const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");

let word = wordBank[Math.floor(Math.random() * wordBank.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;

while (remainingLetters > 0) {
  console.log(answerArray.join(" "));

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const guess = prompt.question("Please guess a letter: ");
if (guess === null) {
  break;
} else if (guess.length !== 1) {
  console.log("Please enter a single letter.");
} else {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
}
}
}
}

console.log(answerArray.join(" "));
console.log("Good job! The answer is " + word);