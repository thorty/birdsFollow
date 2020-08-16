var ratio = 80;

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
  var eyeBorderx = 0;
  var eyeBordery = 0;
  var irisborderOne = 0;
  var irisborderTwo = 0;
  irisOne.x = mouseX;
  irisTwo.x = mouseX;
  irisOne.y = mouseY;
  irisTwo.y = mouseY;
  if (mouseX > 325-eyeBorderx) {
     irisOne.x = 325-eyeBorderx;
   } else if (mouseX < 275+eyeBorderx) {
     irisOne.x = 275+eyeBorderx;
   }
  if (mouseX > 525-eyeBordery) {
     irisTwo.x = 525-eyeBordery;
   } else if (mouseX < 475+eyeBordery) {
     irisTwo.x = 475+eyeBordery;
   }

   
   if (irisTwo.x === 180){
    irisborderTwo = 40;
    }
    if (irisOne.x === 180){
      irisborderOne = 40;
     }

  if (mouseY > 205-eyeBordery) {
     irisOne.y = 205-eyeBordery -irisborderOne;
     irisTwo.y = 205-eyeBordery -irisborderTwo;
   } else if (mouseY < 155+eyeBorderx) {
     irisOne.y = 155+eyeBorderx +irisborderOne;
     irisTwo.y = 155+eyeBorderx +irisborderTwo;
   }
   
    
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


