var ratio = 80;
var eyeSpeed = 4;
var borderLine = 20;

var irisOne = {
  x: 300,
  y: 180  
}

var irisTwo = {
  x: 500,
  y: 180  
}

function setup() {
  createCanvas(800, 400);
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
  circle(300, 180, 80+ratio);
  circle(500, 180, 80+ratio);
  drawSnable();
}

function drawInnerEyes(){
  strokeWeight(0);
  fill(0);
  circle(300, 180, 40);
  circle(500, 180, 40);
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
  if (mouseY <= 180-borderLine){
    if (irisOne.y >= 180-borderLine){
      movementY -= eyeSpeed;
    }
  }
  if (mouseY >= 180+borderLine){
    if (irisOne.y <= 180+borderLine){
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

  vertex(380, 250);
  vertex(400, 280);
  vertex(420, 250);
  
  endShape();

}


