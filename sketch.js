var ratio = 80;
var eyeSpeed = 4;
var borderLine = 20;

var irisOne = {
  x: 300,
  y: 300  
}

var irisTwo = {
  x: 500,
  y: 300  
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 204, 0);
  drawOuterEyes();
  follow();
}

function drawOuterEyes() {
  stroke(0);
  strokeWeight(8);
  fill(255);
  circle(300, 300, 80+ratio);
  circle(500, 300, 80+ratio);
  drawSnable();
}

function drawInnerEyes(){
  strokeWeight(0);
  fill(0);
  circle(300, 300, 40);
  circle(500, 300, 40);
}

function follow(){
  strokeWeight(0);
  fill(2);
  let movementX = 0;
  let movementY = 0;
  if (mouseX <= 300-borderLine){
    if (irisOne.x >= 300-borderLine){
      movementX -= eyeSpeed;
    }
  }
  if (mouseX >= 300+borderLine){
    if (irisOne.x <= 300+borderLine){
     movementX += eyeSpeed;
    }
  }
  if (mouseY <= 300-borderLine){
    if (irisOne.y >= 300-borderLine){
      movementY -= eyeSpeed;
    }
  }
  if (mouseY >= 300+borderLine){
    if (irisOne.y <= 300+borderLine){
      movementY += eyeSpeed;
    }
  }
  

  irisOne.x += movementX;
  irisTwo.x += movementX;
  irisOne.y += movementY;
  irisTwo.y += movementY;
    
  fill(0);
  circle(irisOne.x, irisOne.y, 40+(ratio/2));
  circle(irisTwo.x, irisTwo.y, 40+(ratio/2));
}

function drawSnable(){
  noFill();
  strokeWeight(10.0);
  strokeJoin(ROUND);
  beginShape();

  vertex(380, 400);
  vertex(400, 430);
  vertex(420, 400);
  
  endShape();

}


