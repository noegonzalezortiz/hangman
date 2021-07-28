const promt = require("readline-sync");
const wordBank = require("./word-bank.json");

const userInput = promt.question(" Please guess a letter:")
console.log(userInput)
console.log(wordBank[0]);