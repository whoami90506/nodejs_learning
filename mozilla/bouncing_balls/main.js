// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ball_num = 25;

var balls = [];
// function to generate random number
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Ball() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.velX = random(-7,7);
    this.velY = random(-7,7);
    this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
    this.size = random(10,20);
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    if((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    if(this.collisionDetect() ){
        this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
        this.velX = -(this.velX);
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
    for(j = 0; j < balls.length; j++) {
      if( (!(this.x === balls[j].x && this.y === balls[j].y && this.velX === balls[j].velX && this.velY === balls[j].velY)) ) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size)return true;
      }
    }

    return false;
}

function init() {
    for(i = 0; i < ball_num; ++i){
        var ball = new Ball();
        while(ball.collisionDetect())ball = new Ball();
        balls.push(ball);
    }
}

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);
  
    for(i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }
  
    requestAnimationFrame(loop);
}

init();
loop();