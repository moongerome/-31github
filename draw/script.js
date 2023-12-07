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

  function draw(e) {
    if (!isDrawing) return;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.arc(
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop,
      context.lineWidth / 2,
      0,
      Math.PI * 2
    );
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  // Event listeners
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
});
