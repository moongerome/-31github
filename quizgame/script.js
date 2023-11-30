let score = 0;

function checkAnswer(questionNumber, selectedAnswer) {
  const correctAnswers = {
    1: "Paris",
    2: "Mars",
    3: "Blue Whale",
  };

  const correctAnswer = correctAnswers[questionNumber];

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  const nextQuestionNumber = questionNumber + 1;
  const nextQuestionElement = document.getElementById(
    `question${nextQuestionNumber}`
  );

  if (nextQuestionElement) {
    // Hide current question and show the next one
    document.getElementById(`question${questionNumber}`).style.display = "none";
    nextQuestionElement.style.display = "block";
  } else {
    // Display the final score
    document.getElementById(
      "result"
    ).innerHTML = `Your Score: ${score} out of 3`;
  }
}
