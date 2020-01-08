let x = 200;
let y= 200;
let extracanvas;
function setup() {
  createCanvas(400, 400);
  extracanvas=createGraphics(400,400);
  extracanvas.clear();
  background(0);
}

function draw() {
  
  
  background(0);
  x+=random(-5,5);
  y+=random(-5,5);
  
  
  //if(mouseIsPressed){
    extracanvas.fill(255,150);
    extracanvas.noStroke();
    let starX=random(width);
    let starY=random(height);
    extracanvas.ellipse(starX,starY,10,10);
  //extracanvas.ellipse(mouseX,mouseY,60,60);
   //}
   image(extracanvas,0,0);
  fill(255,0,0);
  stroke(255);
  rectMode(CENTER);
  rect(x,y,20,20);
}

