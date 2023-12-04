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

  function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
      this.classList.add("flipped");
      flippedCards.push(this);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.getAttribute("data-index");
    const index2 = card2.getAttribute("data-index");

    if (cards[index1] === cards[index2]) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards.push(card1, card2);

      if (matchedCards.length === cards.length) {
        alert("Congratulations! You matched all the cards.");
      }
    } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }

    flippedCards = [];
  }
});
