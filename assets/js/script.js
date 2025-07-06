const images = {
  card1: document.getElementById("pic1"),
  card2: document.getElementById("pic2"),
  card3: document.getElementById("pic3"),
  card4: document.getElementById("pic4"),
  card5: document.getElementById("pic5"),
};

const cards = document.querySelectorAll(".card-back");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    Object.values(images).forEach((img) => {
      img.style.opacity = "0";
    });

    const id = card.id;
    images[id].style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    images[card.id].style.opacity = "0";
  });
});
