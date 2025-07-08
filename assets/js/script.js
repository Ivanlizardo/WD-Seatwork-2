const images = {
  card1: document.getElementById("pic1"),
  card2: document.getElementById("pic2"),
  card3: document.getElementById("pic3"),
  card4: document.getElementById("pic4"),
  card5: document.getElementById("pic5"),
};

const bgWhite = document.querySelector(".bgWhite");
const cards = document.querySelectorAll(".card-back");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    Object.values(images).forEach((img) => {
      img.style.display = "none";
    });

    const id = card.id;
    images[id].style.display = "block";

    // Hide .bgWhite when a card is hovered
    bgWhite.style.display = "none";
  });

  card.addEventListener("mouseleave", () => {
    images[card.id].style.display = "none";

    // Show .bgWhite back when mouse leaves the card
    bgWhite.style.display = "block";
  });
});
