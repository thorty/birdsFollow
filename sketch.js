var irisOne = {
  x: 300,
  y: 180  
}

var irisTwo = {
  x: 500,
  y: 180  
}

function setup() {
  createCanvas(800, 800);
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
  circle(300, 180, 80);
  circle(500, 180, 80);
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
  var eyeBorder = 10;
  irisOne.x = mouseX - 0.5 ;
  irisTwo.x = mouseX - 0.5;
  irisOne.y = mouseY - 0.5;
  irisTwo.y = mouseY - 0.5;
  if (mouseX > 320-eyeBorder) {
     irisOne.x = 320-eyeBorder;
   } else if (mouseX < 280+eyeBorder) {
     irisOne.x = 280+eyeBorder;
   }
  if (mouseX > 520-eyeBorder) {
     irisTwo.x = 520-eyeBorder;
   } else if (mouseX < 480+eyeBorder) {
     irisTwo.x = 480+eyeBorder;
   }
  if (mouseY > 200-eyeBorder) {
     irisOne.y = 200-eyeBorder;
     irisTwo.y = 200-eyeBorder;
   } else if (mouseY < 160+eyeBorder) {
     irisOne.y = 160+eyeBorder;
     irisTwo.y = 160+eyeBorder;
   }
    
  fill(0);
  circle(irisOne.x, irisOne.y, 40);
  circle(irisTwo.x, irisTwo.y, 40);
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


