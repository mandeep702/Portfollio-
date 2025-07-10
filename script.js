// Dark mode toggle
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Live Clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// Interactive skill highlight
document.querySelectorAll("ul li").forEach((skill) => {
  skill.addEventListener("click", () => {
    document.querySelectorAll("ul li").forEach(s => s.classList.remove("active-skill"));
    skill.classList.add("active-skill");
  });
});

// Star Rating Interaction
const stars = document.querySelectorAll('#stars .star');
stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    stars.forEach((s, index) => {
      s.classList.toggle("empty", index > i);
      s.classList.add("clicked");
    });
  });
});
