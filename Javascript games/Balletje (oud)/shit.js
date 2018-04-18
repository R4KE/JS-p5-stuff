var xSize = window.innerWidth - 20;
var ySize = window.innerHeight - 20;
var bal;

function setup(){
  createCanvas(xSize, ySize);

  bal = new ball(160, 150, 16, 13, 50, 90);
  //             xpos ypos xsp ysp r   k
}

function draw(){
  background(250);
  bal.render();
  bal.move();
}

function ball(x, y, xspd, yspd, r, k){
  this.xpos = x;
  this.ypos = y;
  this.xspeed = xspd;
  this.yspeed = yspd;
  this.radius = r;
  this.kleur = k;

  this.render = function(){
    fill(bal.kleur);
    noStroke();
    ellipse(bal.xpos, bal.ypos, bal.radius, bal.radius);
  }

  this.move = function(){
    bal.xpos += bal.xspeed;
    bal.ypos += bal.yspeed;

    if(bal.xpos > xSize - bal.radius || bal.xpos < bal.radius){
      bal.xspeed = -bal.xspeed;
    }
    else if(bal.ypos > ySize - bal.radius || bal.ypos < bal.radius){
      bal.yspeed = -bal.yspeed;
    }
  }
}
