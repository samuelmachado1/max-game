const canvas = document.querySelector('canvas');
const myContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 4.5;
class Player {
  constructor() {
    this.positions = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 1
    }
    this.width = 30;
    this.height = 30;
  }
  draw() {
    myContext.fillStyle = 'red';
    myContext.fillRect(this.positions.x, this.positions.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.positions.y += this.velocity.y;
    if (this.positions.y + this.height + this.velocity.y <= canvas.height) {
      this.positions.y += gravity;
    } else
      this.velocity.y = 0;
  }
}

const player = new Player();
player.update();

function animated() {
  requestAnimationFrame(animated);
  myContext.clearRect(0, 0, innerWidth, innerHeight);
  player.update();
}

animated();