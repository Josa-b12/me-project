const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

function fuir(e) {
  const zone = noBtn.parentElement.getBoundingClientRect();
  const bw = noBtn.offsetWidth;
  const bh = noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = (Math.random() * (zone.width - bw)) + "px";
  noBtn.style.top = (Math.random() * (zone.height - bh)) + "px";
}

// Fuit à la souris ET au toucher (mobile)
noBtn.addEventListener("mouseover", fuir);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // empêche le clic sur mobile
  fuir(e);
}, { passive: false });

// Sécurité supplémentaire : bloque tout clic
noBtn.addEventListener("click", (e) => e.preventDefault());

yesBtn.addEventListener("click", () => {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti-container";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);
  }

  // Message personnalisé à la place de l'alert
  const msg = document.createElement("p");
  msg.textContent = "Merci énormément mon amour, je savais que tu as un bon coeur ❤️😻😻";
  msg.style.cssText = "text-align:center; font-size:1.4rem; margin-top:1.5rem; color:#e63946;";
  document.querySelector(".container").appendChild(msg);

  setTimeout(() => confettiContainer.remove(), 5000);
});
