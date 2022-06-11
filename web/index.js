const canvas = document.querySelector('canvas');
const myContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 5;
class Player {
  constructor() {
    this.positions = {
      x: 100,
      y: 150
    }
    this.velocity = {
      x: 0,
      y: 0
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
    this.positions.x += this.velocity.x;
    this.positions.y += this.velocity.y;

    if (this.positions.y + this.height + this.velocity.y <= canvas.height) {
      this.positions.y += gravity;
    } else
      this.velocity.y = 0;
  }
}

const player = new Player();
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
}

function animate() {
  requestAnimationFrame(animate);
  myContext.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.right.pressed) {
    player.velocity.x = 3;
  } else if (keys.left.pressed) {
    player.velocity.x = -3;
  } else player.velocity.x = 0;
}

animate();

addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'ArrowLeft':
      console.log('left');
      keys.left.pressed = true;
      break;
    case 'ArrowRight':
      console.log('Right');
      keys.right.pressed = true;
      break;
    case 'ArrowUp':
      player.positions.y -= 200;
      player.positions.y += gravity;
      break;

  }
})
addEventListener('keyup', ({ key }) => {

  switch (key) {
    case 'ArrowLeft':
      console.log('left');
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      console.log('Right');
      keys.right.pressed = false;
      break;
    case 'ArrowUp':
      // player.positions.y -= 120;
      // player.positions.y += gravity;
      break;

  }
})

