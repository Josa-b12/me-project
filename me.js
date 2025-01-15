// script.js
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

// Effet pour le bouton "Non" qui fuit
noBtn.addEventListener("mouseover", () => {
  const container = noBtn.parentElement.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  
  const offsetX = Math.random() * (container.width - btnRect.width);
  const offsetY = Math.random() * (container.height - btnRect.height);
  
  noBtn.style.position = "absolute";
  noBtn.style.left = `${offsetX}px`;
  noBtn.style.top = `${offsetY}px`;
});

// Effet quand on clique sur "Oui"
yesBtn.addEventListener("click", () => {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti-container";
  document.body.appendChild(confettiContainer);

  // Créer des confettis
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Couleur aléatoire
    confettiContainer.appendChild(confetti);
  }

  // Message de remerciement
  setTimeout(() => {
    alert("Merci ! Tu as rendu ma journée parfaite ❤️");
    confettiContainer.remove(); // Nettoie les confettis
  }, 3000);
});
