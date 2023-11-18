const startTimerBtn = document.getElementById("startTimer");
const pauseTimerBtn = document.getElementById("pauseTimer");
const resetTimerBtn = document.getElementById("resetTimer");
const clockTimerBtn = document.getElementById("clockTimer");
const timerRef = document.querySelector(".timerDisplay");
let int = null;
let clockInt = null;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  clearInterval(clockInt);
  int = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  clearInterval(clockInt);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});

document.getElementById("clockTimer").addEventListener("click", () => {
  clearInterval(int);
  clearInterval(clockInt);
  clockInt = setInterval(clockTimer, 1000);
});

function clockTimer() {
  var currentDate = new Date();
  var hour = currentDate.getHours();
  var mins = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  timerRef.innerHTML = ` ${hour} : ${mins} : ${second}`;
}

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function displayDate() {
  let currentDate = new Date();
  let date = currentDate.toLocaleDateString();
  document.getElementById("currentDate").textContent = `${date}`;
}

setInterval(displayDate, 1000);
