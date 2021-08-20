let img;
function preload() {
  img = loadImage("Tom.png");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height

  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);

  background("#910d01");
  translate(width / 2, height / 2);

  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  strokeWeight(8);

  stroke("#c51902");
  fill("#c51902");
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke("#db2a00");
  fill("#db2a00");
  let mnAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, mnAngle);

  stroke("#e27e31");
  fill("#e27e31");
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hrAngle);
  push();
  stroke("white");
  rotate(hrAngle);
  line(0, 0, 100, 0);
  pop();
  push();
  stroke("white");
  push();
  stroke("white");
  rotate(mnAngle);
  line(0, 0, 125, 0);
  pop();
  rotate(scAngle);
  line(0, 0, 150, 0);
  pop();
  push();
  rotate(90);
  strokeWeight(2);
  fill("white");
  stroke("#dcc425");
  textSize(20);
  text("12", -10, -160);
  pop();

  push();
  rotate(90);
  strokeWeight(2);
  fill("white");
  stroke("#dcc425");
  textSize(20);
  text("3", 160, 0);
  pop();

  push();
  rotate(90);
  strokeWeight(2);
  fill("white");
  stroke("#dcc425");
  textSize(20);
  text("9", -170, 0);
  pop();

  push();
  rotate(90);
  strokeWeight(2);
  fill("white");
  stroke("#dcc425");
  textSize(20);
  text("6", -0, 175);
  pop();

  push();
  rotate(90);
  image(img, -25, -25, 50, 50);
  pop();
}
