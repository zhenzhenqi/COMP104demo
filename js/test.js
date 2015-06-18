console.log("drawing tests");


function setup() {
    //create full width and full height p5 canvas
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('test');
}

function draw() {
background(200);
ellipse(100, 50, 33, 33);  // Left circle

push();  // Start a new drawing state
strokeWeight(10);
fill(204, 153, 0);
translate(150, 0);
ellipse(0, 50, 33, 33);  // Middle circle
pop();  // Restore original state

ellipse(200, 50, 33, 33);  // Right circle
}

function mousePressed() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


