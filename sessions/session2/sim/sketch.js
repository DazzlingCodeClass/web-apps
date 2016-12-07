var xpos;
var ypos;
var xspeed;
var yspeed;

function setup() {
  createCanvas(displayWidth, displayHeight);
  xpos = (displayWidth/2);
  ypos = (displayHeight/2);
  xspeed = 2;
  yspeed = 2;
}

function draw() {
  background(0);
  fill(255);
  
  if(xpos >= displayWidth){
  	xspeed*=1;
  }else if(xpos < 0){
  	xspeed*=1;
  }
  
  if(ypos >= displayHeight){
  	yspeed*=1;
  }else if(ypos < 0){
  	yspeed*=1;
  }
  
  ellipse(xpos, ypos, 20, 20);
  xpos+=xspeed;
  ypos+=yspeed;
  
  
}
