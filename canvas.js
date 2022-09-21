const body = document.querySelector("body");
const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext("2d");
let isAnimate = false;

const width = canvas.width;
const height = canvas.height;
const FPS = 2;
const size = 50;

const drawGrid = () => {
  const r = Math.floor(width / size);
  const c = Math.floor(height / size);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "#222222";
      ctx.strokeRect(i * size, j * size, size, size);
    }
  }
};

const score = new Score();
const snake = new Snake(250, 250);
const food = new Food(5 * size, 2 * size);
const popup = new Popup();
const start = new Start(ctx);

const animate = () => {
  ctx.clearRect(0, 0, width, height);

  drawGrid();

  snake.update();
  snake.eat(food);
  food.draw(ctx);
  snake.draw(ctx);

  isAnimate && setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / FPS);

  
};

drawGrid();
score.draw();
score.setBestScore();

popup.draw("Start game!");

document.querySelector(".again").addEventListener("click", function () {
  isAnimate = true;
  animate()
});
