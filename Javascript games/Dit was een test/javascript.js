var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
var width = 200;
var height = 200;
var ysize = 10;


pl = new Player();

function setup(){
  createCanvas(xSize, ySize);
  b1 = random(1, 255);
  b2 = random(1, 255);
  b3 = random(1, 255);
  background(b1, b2, b3);
}

function draw() {
  noStroke();
  kleur1 = random(1, 255);
  kleur2 = random(1, 255);
  kleur3 = random(1, 255);
  kleur4 = random(1, 255);
  pl.display();
  pl.move();
}

function Player() {
  this.playerHeight = 40;
  this.playerWidth = 10;
  this.radius = 20;
  this.xpos = 100;
  this.ypos = 100;
  this.speed = 20;

  this.display = function() {
    fill(kleur1, kleur2, kleur3, kleur4);
    rect(this.xpos, this.ypos, 2*this.radius, 2*this.radius);
  }

  this.move = function() {
      if (keyIsDown(87)){
        this.ypos -= this.speed;
      }
      else if (keyIsDown(83)){
        this.ypos += this.speed;
      }
      else if (keyIsDown(65)){
        this.xpos -= this.speed;
      }
      else if (keyIsDown(68)){
        this.xpos += this.speed;
      }
      if (this.xpos > xSize){
        this.xpos = xSize
      }
      else if (this.ypos > ySize){
        this.ypos = ySize
      }

  }
}
