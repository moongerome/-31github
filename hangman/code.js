const words = [
  { question: "Capital of France", answer: "PARIS" },
  { question: "Programming language", answer: "JAVASCRIPT" },
  { question: "Popular web browser", answer: "CHROME" },
  // Add more questions and answers as needed
];

let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let question = selectedWordObj.question;
let selectedWord = selectedWordObj.answer;
let guessedWord = Array.from(selectedWord).fill("_");
let incorrectLetters = [];
let attempts = 6;

function displayQuestion() {
  document.getElementById(
    "question-display"
  ).innerText = `Question: ${question}`;
}

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
    6 - attempts
  }.png/1200px-Hangman-${6 - attempts}.png') center center no-repeat`;
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

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
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

  if (guessedWord.join("") === selectedWord) {
    alert("Congratulations! You guessed the word!");
    resetGame();
  }

  if (attempts === 0) {
    alert(
      `Sorry, you ran out of attempts. The correct word was "${selectedWord}".`
    );
    resetGame();
  }

  inputElement.value = "";
}

function resetGame() {
  selectedWordObj = words[Math.floor(Math.random() * words.length)];
  question = selectedWordObj.question;
  selectedWord = selectedWordObj.answer;
  guessedWord = Array.from(selectedWord).fill("_");
  incorrectLetters = [];
  attempts = 6;
  displayQuestion();
  displayWord();
  displayIncorrectLetters();
  displayAttempts();
  displayHangmanImage();
}

// Initial setup
displayQuestion();
displayWord();
displayIncorrectLetters();
displayAttempts();
displayHangmanImage();
