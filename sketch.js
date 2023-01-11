let segments = 8;

function setup() {
  createCanvas(380, 250, WEBGL);

}

function draw() {
  background(255);
  frameRate(144);
  translate(0, 25, 0);
  push();
  rotateY(frameCount * 0.005);
  fill(150, 150, 150);
  translate(0, 0, 0);
  cone(90, 175, segments); //r, h, segments
  translate(0, -115);
  cone(90, -55, segments);
  pop();
}
