var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
pl = new Player;
muren = [];

function setup(){
  background(255);
  createCanvas(xSize, ySize);
  for (var i = 0; i < 20; i++) {
    wallkleur = random(0, 45)
    xpos = random(0, xSize)
    ypos = random(0, ySize)
    wallWidth = random(30, 110)
    wallHeight = random(40, 120)
    wall = new Wall(xpos, ypos, wallHeight, wallWidth);
    muren.push(wall);
  }
}

function posit(n) {
  return(sqrt(n*n));
}

function isposit(n) {
  return(n >= 0);
}

function draw() {
  background(255);

  for (var i = 0; i < 20; i++) {
    wall1 = muren[i];
    wall1.teken();
    wall1.colide();
  }

  pl.display();
  pl.move();
}

function Wall(xpos, ypos, wallWidth, WallHeigt) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.wallWidth = wallWidth;
  this.wallHeight = wallHeight;

  this.teken = function() {
    fill(wallkleur);
    noStroke();
    //rectMode(CENTER);
    rect(xpos, ypos, wallHeight, wallWidth);
  }

  this.colide = function() {
    var px = pl.xpos;
    var py = pl.ypos;
    var dx = this.xpos - pl.xpos;
    var dy = this.ypos - pl.xpos;
    /*if ((px > this.xpos + this.wallWidth && this.xpos > px +  this.wallWidth && py > this.ypos + this.wallHeight && this.ypos > py + this.wallHeight)){
      console.log("dipp");
    }*/
    if (px < this.xpos + this.wallWidth &&
      px + pl.radius > this.xpos &&
      py < this.ypos + this.wallHeight &&
      pl.radius + py > this.ypos)
    {
      console.log("dipp");
      //pl.xpos = 300;
      if (posit(dx) > posit(dy)) {
        if (!(isposit(dx))) {
          pl.xpos = this.xpos + this.wallWidth + (pl.radius / 2);
        } else {
          pl.xpos = this.xpos - this.wallWidth - (pl.radius / 2);
        }
      } else {
        if (!(isposit(dy))) {
          pl.ypos = this.ypos + this.wallHeight + (pl.radius / 2);
        } else {
          pl.ypos = this.ypos - this.wallHeight - (pl.radius / 2);
        }
      }
    }
  }
}

function Player() {
  this.radius = 15;
  this.xpos = xSize/2;
  this.ypos = ySize/2;
  this.speed = 5;

  this.display = function() {
    fill(255, 0, 0);
    rect(this.xpos, this.ypos, this.radius, this.radius);
  }

  this.move = function() {
      if (keyIsDown(32)){
        console.log("test");
      }
      else if (keyIsDown(87)){
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
  }
}
