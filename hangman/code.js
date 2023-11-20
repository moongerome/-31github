const words = (words = [
  { question: "Capital of France", answer: "PARIS" },
  { question: "Programming language", answer: "JAVASCRIPT" },
  { question: "Popular web browser", answer: "CHROME" },
  // Add more questions and answers as needed
]);

// Select a random word from the array
let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array.from(selectedWordObj).fill("_");
let incorrectLetters = [];
let attempts = 10;
// Access the question and answer using selectedWordObj
let question = selectedWordObj.question;
let selectedWord = selectedWordObj.answer;

function displayWord() {
  document.getElementById("word-display").innerText = guessedWord.join(" ");
}

function displayIncorrectLetters() {
  document.getElementById(
    "incorrect-letters"
  ).innerText = `Incorrect letters: ${incorrectLetters.join(", ")}`;
}

function displayAttempts() {
  document.getElementById("attempts").innerText = attempts;
}

function displayHangmanImage() {
  const hangmanImage = document.getElementById("hangman-image");
  hangmanImage.style.background = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hangman-${
    10 - attempts
  }.png/1200px-Hangman-${10 - attempts}.png') center center no-repeat`;
  hangmanImage.style.backgroundSize = "cover";
}

function validateInput() {
  const inputElement = document.getElementById("letter-input");
  inputElement.value = inputElement.value.toUpperCase();
}

function guessLetter() {
  const inputElement = document.getElementById("letter-input");
  const letter = inputElement.value.toUpperCase();

  if (!letter || !/^[A-Z]$/.test(letter)) {
    alert("Please enter a valid letter.");
    return;
  }

  if (guessedWord.includes(letter) || incorrectLetters.includes(letter)) {
    alert("You already guessed that letter.");
    return;
  }

  if (selectedWordObj.includes(letter)) {
    for (let i = 0; i < selectedWordObj.length; i++) {
      if (selectedWordObj[i] === letter) {
        guessedWordObj[i] = letter;
      }
    }
    displayWord();
  } else {
    incorrectLetters.push(letter);
    displayIncorrectLetters();
    attempts--;
    displayAttempts();
    displayHangmanImage();
  }

  if (guessedWord.join("") === selectedWordObj) {
    alert("Congratulations! You guessed the word!");
    resetGame();
  }

  if (attempts === 0) {
    alert(
      `Sorry, you ran out of attempts. The correct word was "${selectedWordObj}".`
    );
    resetGame();
  }

  inputElement.value = "";
}

function resetGame() {
  selectedWordObj = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array.from(selectedWordObj).fill("_");
  incorrectLetters = [];
  attempts = 6;
  displayWord();
  displayIncorrectLetters();
  displayAttempts();
  displayHangmanImage();
}
