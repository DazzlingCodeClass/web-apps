var xpos;
var ypos;
var speed;

function setup() {
  createCanvas(displayWidth, displayHeight);
  xpos = (displayWidth/2);
  ypos = (displayHeight/2);
  speed = 2;
}

function draw() {
  background(0);
  fill(255);
  ellipse(xpos, ypos, 20, 20);
  xpos-=speed;
  ypos-=speed;
}