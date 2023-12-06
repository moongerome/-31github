document.addEventListener("DOMContentLoaded", () => {
  const cards = ["A", "B", "C", "D", "A", "B", "C", "D"];
  let flippedCards = [];
  let matchedCards = [];

  const memoryGame = document.querySelector(".memory-game");

  // Shuffle the cards
  cards.sort(() => Math.random() - 0.5);

  // Create cards dynamically
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-index", index);
    cardElement.textContent = card;
    cardElement.addEventListener("click", flipCard);
    memoryGame.appendChild(cardElement);
  });
});
