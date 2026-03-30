const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

function fuir(e) {
  if (e.type === "touchstart") e.preventDefault();
  const zone = noBtn.parentElement.getBoundingClientRect();
  noBtn.style.position = "absolute";
  noBtn.style.left = (Math.random() * (zone.width - noBtn.offsetWidth)) + "px";
  noBtn.style.top  = (Math.random() * (zone.height - noBtn.offsetHeight)) + "px";
}

noBtn.addEventListener("mouseover", fuir);
noBtn.addEventListener("touchstart", fuir, { passive: false });
noBtn.addEventListener("click", e => e.preventDefault());

yesBtn.addEventListener("click", () => {

  // Cache le texte de question et les boutons
  document.querySelector(".container").innerHTML = `
    <div style="text-align:center; padding: 2rem; animation: fadeIn 0.8s ease forwards;">
      <p style="font-size: 3rem; animation: pulse 1.2s infinite;">❤️</p>
      <p style="font-size: 1.3rem; font-weight: 500; line-height: 1.9; color: #c0392b; max-width: 480px; margin: 1rem auto;">
        Merci ma futur femme de namour, je serai l'homme le plus chanceux du monde grâce à toi.<br><br>
        Je promets de prendre soin de toi.
      </p>
      <p style="margin-top: 1.5rem; font-style: italic; color: #888;">— Pour toi, pour toujours 🫶🏾</p>
    </div>
  `;

  // Confettis
  const cc = document.createElement("div");
  cc.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:999;";
  document.body.appendChild(cc);

  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.style.cssText = `
      position: absolute;
      top: -10px;
      width: 10px; height: 14px;
      left: ${Math.random() * 100}vw;
      background: hsl(${Math.floor(Math.random() * 360)}, 100%, 55%);
      animation: fall ${(Math.random() * 2 + 3).toFixed(1)}s ${(Math.random() * 2).toFixed(1)}s linear forwards;
    `;
    cc.appendChild(c);
  }

  setTimeout(() => cc.remove(), 7000);
});
