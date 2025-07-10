// Dark mode toggle with smooth fade
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.add("mode-transition");
  document.body.classList.toggle("dark-mode");
  setTimeout(() => {
    document.body.classList.remove("mode-transition");
  }, 500); // match CSS transition time
});

// Live Clock in 12-hour format with AM/PM
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  const h = String(hours).padStart(2, '0');
  clock.textContent = `${h}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// Hero Typing Animation
const typedText = "Mandeep Mannu";
let typedIndex = 0;
function typeWriter() {
  const element = document.getElementById("typed");
  if (typedIndex < typedText.length) {
    element.textContent += typedText.charAt(typedIndex);
    typedIndex++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();

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
