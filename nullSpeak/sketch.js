let xoff = 0.02;

let img;

let words = [
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
  "hלֹאஃخഉ",
  "ㅇᠭğห",
  "γஃğh",
  "ᠭğ",
  "hלֹאஃ",
  "ㅇᠭ",
];

function preload() {
  img = loadImage("nullPost.jpg");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight * 5);
  cnv.parent = "sketchHolder";
  frameRate(60);
}

function draw() {
  background(0);

  xoff = xoff + 0.01;
  let n = noise(xoff) * 200;
  let j = noise(xoff) * windowWidth;

  textFont("Space Mono");

  fill(255);
  textSize(100);
  text("לخnğ ", windowWidth / 2, windowHeight + 500);
  textSize(70);
  text("ᠭğ ", windowWidth / 6, windowHeight + 300);
  textSize(110);
  text("hלֹאஃخഉ ", windowWidth / 4, windowHeight + 700);
  textSize(250);
  text("  ğ ", windowWidth / 5, windowHeight + 1000);
  textSize(50);

  push();

  fill(255);
  stroke(0);

  for (let i = 0; i < words.length; i++) {
    let a = noise((mouseX + i) * xoff, mouseX * xoff);

    textSize(n * 1.5);
    fill(255);
    text(words[i], j + i, n * i);
  }

  pop();

  push();
  stroke(255);
  fill(0);
  rect(windowWidth / 5, windowHeight * 3, 600, 300);
  fill(255);
  textSize(40);
  text("ஃ", windowWidth / 2, windowHeight * 3.3);
  textSize(100);
  text("ğ", windowWidth / 4, windowHeight * 3.2);

  pop();
}
