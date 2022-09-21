class Snake {
  constructor(x, y, size = 50) {
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.size = size;
    this.length = 2;
    this.counter = 0;
    this.body = [];
    this.input();
  }

  gameOver() {
    this.x = 250;
    this.y = 250;
    this.body.splice(2);
    isAnimate = false;
  }

  collisionDetection() {
    const { x, y, size, body } = this;

    // hit the wall
    if (x + size < 0) this.x = width - size;
    if (y + size < 0) this.y = height - size;

    if (x - size >= width) this.x = 0;
    if (y - size >= height) this.y = 0;

    // hit the body
    const head = body[body.length - 1];

    for (let i = 0; i < body.length - 1; i++) {
      const b = body[i];

      if (b.x === head.x && b.y === head.y) {
        const isBest = localStorage.getItem("score");
        const scoreElem = document.querySelector(".score");

        if (isBest < score.scoreCount)
          localStorage.setItem("score", score.scoreCount);

        // scoreElem.innerHTML = 0;

        popup.draw("Game over!", "Again!");
        this.gameOver();
      }
    }
  }

  update() {
    const { x, y, vx, vy, size, counter, length } = this;

    this.x += vx * size;
    this.y += vy * size;

    this.collisionDetection();

    this.body.push({ x, y });

    if (counter >= length) {
      this.body.shift();
    } else {
      this.counter++;
    }
  }

  draw(ctx) {
    const { size, body } = this;

    body.forEach(({ x, y }, index) => {
      ctx.beginPath();
      if (index === body.length - 1) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "green";
      }
      ctx.fillRect(x, y, size, size);
    });
  }

  eat(food) {
    const { x, y } = this;

    if (food.x === x && food.y === y) {
      this.length++;
      food.updatePos();
      score.increment();
    }
  }

  input() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        this.vx = 0;
        this.vy = -1;
      }

      if (e.key === "ArrowRight" || e.key === "d") {
        this.vx = 1;
        this.vy = 0;
      }

      if (e.key === "ArrowDown" || e.key === "s") {
        this.vx = 0;
        this.vy = 1;
      }

      if (e.key === "ArrowLeft" || e.key === "a") {
        this.vx = -1;
        this.vy = 0;
      }
    });
  }
}
