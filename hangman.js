let numberOfGuesses = 0;
let targetWord = '';
let secretTargetWord = '';
let lettersGuessed = [];
let wordBank = [
  'hello',
  'world'
]

function startGame(){
  targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

function inputLetterGuess(letter){
  lettersGuessed.push(letter.toLowerCase());
  numberOfGuesses++;
}

function updateSecret(){
  secretTargetWord = targetWord.split('').map(char => (lettersGuessed.includes(char)) ? char : '_').join(' ')
}

function isGameOver(){
  if (numberOfIncorrectGuesses() > 6) return 'Lose';
  if (!secretTargetWord.includes('_')) return 'Win';
}

function numberOfIncorrectGuesses(){
  return lettersGuessed.filter((char) => !targetWord.includes(char)).length
}

function lossProgress(){
  return Math.min(numberOfIncorrectGuesses() / 6, 1);
}

function display(){
  console.log(secretTargetWord)
}

function gameLoop(){
  startGame();
  updateSecret();
  while (!isGameOver()){
    // Print game
    display();
    // Get input from user
    const prompt = require('prompt-sync')();
    let playerMove = prompt('What letter would you like to guess?');
    if (playerMove === 'break') break;

    inputLetterGuess(playerMove);
    updateSecret();
  }
  display();
  console.log(isGameOver());
}

gameLoop();

function playGame(letter){
  inputLetterGuess(letter);
  updateSecret();
}

// Only count each letter once
// Visual for progress bar
// Display incorrect word bank
// Restart button
// title
// instructions