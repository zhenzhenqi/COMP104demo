console.log("drawing tests");


function setup() {
    //create full width and full height p5 canvas
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('test');
}

function draw() {
  background(200);
  translate(200, 200);
  rect(0, 0, 50, 50);
  rotate(PI/3.0);
  rect(0, 0, 50, 50);
  rotate(PI/3.0);
  rect(0, 0, 50, 50);
  rotate(PI/3.0);
  rect(0, 0, 50, 50);
  rotate(PI/3.0);
  rect(0, 0, 50, 50);
  rotate(PI/3.0);
  rect(0, 0, 50, 50);
}

function mousePressed() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


