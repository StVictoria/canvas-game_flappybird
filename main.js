const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 65);
gradient.addColorStop("0.2", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.9", "#fff");

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleObstacles();
  bird.update();
  bird.draw();
  ctx.fillStyle = gradient;
  ctx.font = "60px Georgia";
  ctx.fillText(score, 10, 50);
  handleParticles();
  if (handleCollision()) return;
  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  frame++;
}
animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacePressed = false;
});

const bang = new Image();
bang.src = "/image/bang.png";
function handleCollision() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      bird.x + bird.width > obstaclesArray[i].x &&
      ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstaclesArray[i].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      ctx.drawImage(bang, bird.x - 40, bird.y - 35, 100, 70);
      ctx.font = "25px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        "Game over, your score is " + score,
        160,
        canvas.height / 2 - 12
      );
      return true;
    }
  }
}
