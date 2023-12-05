document.addEventListener("DOMContentLoaded", () => {
  let timer;
  let minutes = 25;
  let seconds = 0;
  let isRunning = false;

  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");

  function updateDisplay() {
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  function startTimer() {
    if (!isRunning) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          isRunning = false;
        } else {
          if (seconds === 0) {
            minutes--;
            seconds = 59;
          } else {
            seconds--;
          }
          updateDisplay();
        }
      }, 1000);
      isRunning = true;
    }
  }

  function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    isRunning = false;
  }

  startBtn.addEventListener("click", startTimer);
  resetBtn.addEventListener("click", resetTimer);

  // Initial display
  updateDisplay();
});
