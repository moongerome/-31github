function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can perform additional validation here if needed

  const responseMessage = document.getElementById("responseMessage");

  // Simulating a simple response
  responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been received.</p>`;
  responseMessage.style.color = "#4caf50";
}
