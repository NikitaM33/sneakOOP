class Food {
  constructor(x, y, size = 50) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  updatePos() {
    const { size } = this;
    this.x = Math.floor(Math.random() * Math.floor(width / size)) * size;
    this.y = Math.floor(Math.random() * Math.floor(height / size)) * size;
  }

  draw(ctx) {
    const { x, y, size } = this;

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, size, size);
  }
}
