var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
var player;
var bulletpos;
var bulletspeed = 33;
var health = 100;
var damage = new Audio('assets/oof.mp3');

function setup(){
  createCanvas(xSize, ySize);

  randomY = random(0, ySize)

  player = new Player(160, ySize/2, 13, 50);
  //                  xpos ypos     s   r

  enemy = new Enemy(xSize, randomY, 23, 55);
}

function draw(){
  background(255);

  textSize(40);
  textAlign(CENTER, CENTER);
  text("Health: " + health, xSize/2, ySize/6);

  player.render();
  player.move();
  //if (keyIsDown(32)){
    player.shoot();
  //}
  enemy.render();
  enemy.move();
  enemy.colide();
}

function Enemy(x, y, spd, r){
  this.xpos = x;
  this.ypos = y;
  this.speed = spd;
  this.radius = r;
  this.randomkleurR = random(0, 255);
  this.randomkleurG = random(0, 255);
  this.randomkleurB = random(0, 255);

  this.move = function(){
    this.xpos -= this.speed;
    this.ypos = player.ypos;
  }

  this.colide = function(){
    var dx = this.xpos - player.xpos;
    var dy = this.ypos - player.ypos;
    if (sqrt(dx * dx + dy * dy) <= this.radius + player.radius) {
      this.randomkleurR = random(0, 255);
      this.randomkleurG = random(0, 255);
      this.randomkleurB = random(0, 255);
      this.xpos = xSize;
      this.ypos = random(0, ySize);
      console.log("Enemy respawn");
      damage.play();
      console.log("COLIDE");
      health -= 1;
    }
  }

  this.render = function(){
    noStroke();
    fill(this.randomkleurR, this.randomkleurG, this.randomkleurB);
    ellipse(this.xpos, this.ypos, this.radius, this.radius)
    if (this.xpos < 0) {
      this.randomkleurR = random(0, 255);
      this.randomkleurG = random(0, 255);
      this.randomkleurB = random(0, 255);
      this.xpos = xSize;
      this.ypos = random(0, ySize);
      console.log("Enemy respawn");
    }
  }
}

function Player(x, y, spd, r){
  this.xpos = x;
  this.ypos = y;
  this.speed = spd;
  this.radius = r;
  this.bulletpos = this.xpos;

  this.render = function(){
    noStroke();
    ellipse(this.bulletpos, player.ypos, 10, 10);
    fill(128, 135, 128);
    rect(player.xpos + 10, player.ypos - 3, 50, 10);
    fill(153, 175, 154);
    ellipse(player.xpos, player.ypos, player.radius, player.radius);
    fill(0);
    ellipse(player.xpos+10, player.ypos+10, 5, 10);
    ellipse(player.xpos+10, player.ypos-10, 5, 10);
  }

  this.shoot = function(){
    this.bulletpos += bulletspeed;
    noStroke();
    fill(100);
    //console.log("bullet " + this.bulletpos);
    if (this.bulletpos > xSize){
      //console.log("Bullet respawn");
      this.bulletpos = player.xpos;
    }
  }

  this.move = function(){
    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
        player.ypos -= this.speed;
      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
        player.ypos += this.speed;
      }
  }

  function Bullet(){

  }
}
