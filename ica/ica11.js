const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 200; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(250,150,150,0.35)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(75),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}



btn.addEventListener("click", draw);