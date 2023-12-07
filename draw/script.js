document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("drawingCanvas");
  const context = canvas.getContext("2d");
  let isDrawing = false;

  // Set canvas size
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;

  // Set initial drawing style
  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "#000";

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function stopDrawing() {
    isDrawing = false;
    context.beginPath(); // Start a new path for the next line
  }
});
