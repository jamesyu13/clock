let segmentMap = [
  [1, 1, 1, 1, 1, 1, 0], // 0
  [0, 1, 1, 0, 0, 0, 0], // 1
  [1, 1, 0, 1, 1, 0, 1], // 2
  [1, 1, 1, 1, 0, 0, 1], // 3
  [0, 1, 1, 0, 0, 1, 1], // 4
  [1, 0, 1, 1, 0, 1, 1], // 5
  [1, 0, 1, 1, 1, 1, 1], // 6
  [1, 1, 1, 0, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 1, 0, 1, 1]  // 9
];

let digitWidth = 50;
let digitHeight = 100;

function setup() {
  createCanvas(800, 200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(50);
  let h = hour();
  let m = minute();
  let s = second();
  
  // Display current time as HH:MM:SS
  drawDigit(floor(h / 10), 50, 50); //Hour first digit
  drawDigit(h % 10, 130, 50); //Hour second digit
  drawColon(210, 50);
  drawDigit(floor(m / 10), 250, 50);
  drawDigit(m % 10, 330, 50);
  drawColon(410, 50);
  drawDigit(floor(s / 10), 450, 50);
  drawDigit(s % 10, 530, 50);
  
  if (frameCount % 60 == 0) { //Console logging
    console.log("Minute: " + m);
  }
}

function drawDigit(num, x, y) {
  let segments = segmentMap[num];
  // Define the segments coordinates (A-G) as [x1, y1, x2, y2]
  let segmentCoords = [
    [x, y, x + digitWidth, y],  // A
    [x + digitWidth, y, x + digitWidth, y + digitHeight / 2], // B
    [x + digitWidth, y + digitHeight / 2, x + digitWidth, y + digitHeight], // C
    [x, y + digitHeight, x + digitWidth, y + digitHeight],   // D
    [x, y + digitHeight / 2, x, y + digitHeight], // E
    [x, y, x, y + digitHeight / 2],  // F
    [x, y + digitHeight / 2, x + digitWidth, y + digitHeight / 2] // G
  ];
  
  strokeWeight(8);
  for (let i = 0; i < segments.length; i++) {
    if (segments[i] === 1) {
      stroke(255); //Active segments are white
    } else {
      stroke(100); //Inactive segments are gray
    }
    line(...segmentCoords[i]); // Show the lines
  }
}

function drawColon(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y + digitHeight / 4, 10, 10);
  ellipse(x, y + 3 * digitHeight / 4, 10, 10);
}
