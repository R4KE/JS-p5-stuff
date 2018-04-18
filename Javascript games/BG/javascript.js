var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
var player;
var width = 200;
var height = 200;
var ysize = 10;
var score = 0;

pl = new Player();

function setup(){
  createCanvas(xSize, ySize);
  kleur1 = random(1, 255);
  kleur2 = random(1, 255);
  kleur3 = random(1, 255);
  kleur4 = random(1, 255);
  b1 = random(200, 255);
  b2 = random(200, 255);
  b3 = random(200, 255);
  background(b1, b2, b3);
}

function draw() {
  pl.display();
  console.log("test");
}

function Player() {
  this.playerHeight = 40;
  this.playerWidth = 10;
  this.radius = 20;
  this.xpos = 100;
  this.ypos = 100;
  this.speed = 20;
}
