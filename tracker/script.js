let exercises = [];
let timerInterval;
let timerSeconds = 0;
function addExercise() {
  const exerciseInput = document.getElementById("exercise");
  const durationInput = document.getElementById("duration");

  const exercise = exerciseInput.value.trim();
  const duration = parseInt(durationInput.value, 10);

  if (!exercise || isNaN(duration) || duration <= 0) {
    alert("Please enter a valid exercise and duration.");
    return;
  }

  const newExercise = {
    exercise,
    duration,
  };

  exercises.push(newExercise);
  updateExerciseList();
  updateSummary();

  // Clear input fields
  exerciseInput.value = "";
  durationInput.value = 1;
  resetTimerDisplay();
}

function updateExerciseList() {
  const exerciseListDiv = document.getElementById("exercise-list");
  exerciseListDiv.innerHTML = "<h2>Exercise List</h2>";

  if (exercises.length === 0) {
    exerciseListDiv.innerHTML += "<p>No exercises added yet.</p>";
    return;
  }

  exercises.forEach((exercise, index) => {
    exerciseListDiv.innerHTML += `
            <div class="exercise-item">
                <p>${index + 1}. ${exercise.exercise} - ${
      exercise.duration
    } minutes</p>
            </div>
        `;
  });
}

function updateSummary() {
  const totalDurationSpan = document.getElementById("total-duration");
  const totalExercisesSpan = document.getElementById("total-exercises");

  const totalDuration = exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );
  const totalExercises = exercises.length;

  totalDurationSpan.textContent = totalDuration;
  totalExercisesSpan.textContent = totalExercises;
}
function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  timerInterval = setInterval(() => {
    timerSeconds++;
    timerDisplay.textContent = formatTime(timerSeconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  resetTimerDisplay();
}
function resetTimerDisplay() {
  const timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = "00:00";
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${formattedMinutes}:${formattedSeconds}`;
}
