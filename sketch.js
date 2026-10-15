function setup() {
let myCanvas = createCanvas(600, 400);
myCanvas.parent('myContainer');
}
let beat;
// Load sound file before canvas loads so it is ready
function preload() {
beat = loadSound('beat.mp3');
}
function mousePressed() {
if (beat.isPlaying()) {
beat.stop();
} else {
beat.loop();
}
}
Let beat, analyzer;
function setup() {
let myCanvas = createCanvas(600, 400);
myCanvas.parent('myContainer');
analyzer = new p5.Amplitude();
analyzer.setInput(beat);
}
