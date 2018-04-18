var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
var massa = 352660;
pl = new Player;
planets = [];
var rot = 0;

function setup(){
  background(255);
  createCanvas(xSize, ySize);
  for (var i = 0; i < 6; i++) {
    randomp = random(5, 8);
    xpos = random(0, xSize)
    ypos = random(0, ySize)
    radius = random(10, 200)
    radius = random(10, 200)
    pcolor1 = random(50, 100)
    pcolor2 = random(0, 100)
    pcolor3 = random(0, 100)
    smx = random(-0.1, 0.1);
    smy = random(-0.1, 0.1);
    wall = new planet(xpos, ypos, radius, radius);
    planets.push(wall);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < 100; i++) {
    xpos = random(0, xSize)
    ypos = random(0, ySize)
    radius = random(1, 3)
    radius = random(1, 3)
    fill(255);
    noStroke();
    ellipse(xpos, ypos, radius, radius);
  }
  for (var i = 0; i < 6; i++) {
    pla = planets[i];
    pla.render();
    pla.colide();
  }
  pl.display();
  pl.move();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text("Gebruik de WASD toetsen om te bewegen.", xSize/2, ySize-110);
  textSize(18);
  text("Houd spatie ingedrukt om groter te worden.", xSize/2, ySize-70);
  textSize(50);
  text("massa: " + massa + "kg", xSize/2, ySize/14);
}

function planet(xpos, ypos, radius, radius) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.radius = radius;
  this.pcolor1 = pcolor1;
  this.pcolor2 = pcolor2;
  this.pcolor3 = pcolor3;
  this.smx = smx;
  this.smy = smy;
  this.rot

  this.colide = function() {
    var dx = pl.xpos - this.xpos;
    var dy = pl.ypos - this.ypos;
    if (sqrt(dx*dx + dy*dy) <=this.radius + pl.radius){
      console.log("test");
      massa = massa*2;
      pl.radius += 2;
      this.xpos = 0;
      this.ypos = 0;
      this.radius = 0;

      /*this.xpos = pl.xpos + (pl.xpos + this.xpos)+1
      this.ypos = pl.ypos + (pl.ypos + this.ypos)+1

      xdist = this.xpos - pl.xpos;
      this.xpos = pl.xpos + xdist+2;

      ydist = this.ypos - pl.ypos;
      this.ypos = pl.ypos + ydist+2;


      //xdist = planetpos - playerpos
      //planetpos = playerpos + xdist-2

      /*if (this.radius = pl.radius) {
        this.radius = pl.radius;
      }
      else {
        this.radius -= 1;
        pl.radius += 1;
      }
      this.xpos = pl.xpos;
      this.ypos = pl.ypos;*/

      //this.radius -= 1;
      //pl.radius += 1;
      //this.rot += 0.001;
      //this.radius -= 1;
      //this.smx -= 0.1;
      //this.smy += 0.01;
    }
  }

  this.render = function() {
    rotate(this.rot);
    this.xpos += this.smx;
    this.ypos += this.smy;
    noStroke();
    fill(0);
    fill(this.pcolor1, this.pcolor2, this.pcolor3);
    ellipse(this.xpos, this.ypos, this.radius*2, this.radius/7);
    fill(0);
    ellipse(this.xpos, this.ypos, this.radius*1.3, this.radius/9);
    fill(this.pcolor1, this.pcolor2, this.pcolor3);
    ellipse(this.xpos, this.ypos, this.radius, this.radius);
  }
}

function Player() {
  this.radius = 15;
  this.xpos = xSize/2;
  this.ypos = ySize/2;
  this.speed = 5;

  this.display = function() {
    fill(0);
    ellipse(this.xpos, this.ypos, this.radius, this.radius);
  }

  this.move = function() {
      if (keyIsDown(32)){
        massa = massa*1.2;
        this.radius += 1;
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
