function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("sketchHolder");
  noStroke();
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
}

function keyTyped() {
  textSize(random(50, 100));
  fill(255);

  if (key === "q") {
    text("خ", random(windowWidth), random(windowHeight));
  }
  if (key === "w") {
    text("n", random(windowWidth), random(windowHeight));
  }
  if (key === "e") {
    text("ğ", random(windowWidth), random(windowHeight));
  }
  if (key === "r") {
    text("א", random(windowWidth), random(windowHeight));
  }
  if (key === "t") {
    text("γ", random(windowWidth), random(windowHeight));
  }
  if (key === "t") {
    text("ஃ", random(windowWidth), random(windowHeight));
  }
  if (key === "y") {
    text("h", random(windowWidth), random(windowHeight));
  }
  if (key === "u") {
    text("0", random(windowWidth), random(windowHeight));
  }
  if (key === "i") {
    text("לֹֹֹֹֹֹֹֹ", random(windowWidth), random(windowHeight));
  }
  if (key === "o") {
    text("1", random(windowWidth), random(windowHeight));
  }
  if (key === "p") {
    text("ഉ", random(windowWidth), random(windowHeight));
  }
  if (key === "a") {
    text("ㅇ", random(windowWidth), random(windowHeight));
  }
  if (key === "s") {
    text("ᠭ", random(windowWidth), random(windowHeight));
  }
  if (key === "d") {
    text("ห", random(windowWidth), random(windowHeight));
  }
  if (key === "f") {
    text("ð", random(windowWidth), random(windowHeight));
  }
  if (key === "g") {
    text("இ", random(windowWidth), random(windowHeight));
  }
  if (key === "j") {
    text("ฐ", random(windowWidth), random(windowHeight));
  }
}
