class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.width = 10;
    this.height = 10;
    this.weight = 1;
  }
  update() {
    let curve = Math.sin(angle) * 20;
    if (this.y > canvas.height - this.height * 4 + curve) {
      this.y = canvas.height - this.height * 4 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height * 4) {
      this.y = 0 + this.height * 4;
      this.vy = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    ctx.fill();
  }
  flap() {
    this.vy -= 2;
  }
}
const bird = new Bird();
