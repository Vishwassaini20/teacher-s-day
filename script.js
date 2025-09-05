// Poem lines
const poemLines = [
  "A teacher’s wisdom lights the way,",
  "Guiding us brighter day by day.",
  "With patience deep and knowledge true,",
  "They shape the dreams we dare to pursue.",
  "They plant the seeds of hope and cheer,",
  "And lift us up when doubt is near.",
  "A teacher’s gift can never fade,",
  "For futures strong are what they’ve made."
];

let lineIndex = 0;

// Balloon pop function
function popBalloon(balloon) {
  balloon.innerHTML = "💥";
  setTimeout(() => balloon.style.display = "none", 500);

  // Show next line
  const quoteBox = document.getElementById("quoteBox");
  if (lineIndex < poemLines.length) {
    quoteBox.innerText = poemLines[lineIndex];
    lineIndex++;
  }

  // Once all lines are shown, display full poem
  if (lineIndex === poemLines.length) {
    setTimeout(() => {
      quoteBox.style.display = "none";
      document.getElementById("poemBox").style.display = "block";
    }, 2000);
  }

  startConfetti();
}

// Confetti animation
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
  const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ffffff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: 10,
      h: 10,
      color: randomColor(),
      speed: Math.random() * 3 + 2
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((c, i) => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.w, c.h);
    c.y += c.speed;
    if (c.y > confettiCanvas.height) confetti.splice(i, 1);
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
