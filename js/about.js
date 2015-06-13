console.log("sketch.js loaded");

var waves = [];

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myP5Container');
}


function draw() {

    clear();
    //    noStroke();

    for (var i = 0; i < waves.length; i++) {
        waves[i].move();
        waves[i].recede();
        waves[i].display();

        if (waves[i].alpha <= 0.01) {
            waves.splice(i, 1);
        }

    }
}

function mouseClicked() {
    waves.push(new Wave());
};


function Wave() {
    this.magnitude = mouseY;
    this.fluctuate = 0.0;
    this.alpha = 0.5;

    this.move = function () {
        this.fluctuate += 0.01;
    }

    this.recede = function () {
        this.magnitude += 0.05;
        this.alpha -= 0.001;
    }

    this.display = function () {
        noStroke();
        fill("rgba(0, 0, 0," + this.alpha.toString()   + ")");
        beginShape();
        var xoff = 0;

        // Iterate over horizontal pixels to draw one wave
        for (var x = 0; x <= width + 10; x += 10) {
            var y = map(noise(xoff, this.fluctuate), 0, 1, this.magnitude, height);
            //draw each dot along the wave
            vertex(x, y);
            // Increment x dimension for noise
            xoff += 0.05;
        }
        //draw a point at the lower right corner of the screen
        vertex(width, height);
        //draw a point at the lower left corner of the screen
        vertex(0, height);
        //connect all dots along the wave, and the two points at the corner
        endShape();
    }
}