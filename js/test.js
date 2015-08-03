var r;

// Angle and angular velocity, accleration
var theta;
var theta_vel;
var theta_acc;

function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('bg-canvas');


    // Initialize all values
    r = height * 0.45;
    theta = 0;
    theta_vel = 0;
    theta_acc = 0.0001;
}

function draw() {
    stroke(0);
    for (i = 0; i < 400; i++) {
        point(i, 200);
    }

}