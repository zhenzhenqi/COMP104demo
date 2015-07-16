console.log("landing.js loaded");

var song, analyzer, vol;
var bugs = []; // array of Jitter objects
var myX;

function preload() {
    song = loadSound('WalkingWithHappiness.mp3');
}

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('bg-image');

    song.loop();

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);

    for (var i = 0; i < 70; i++) {
        bugs.push(new Jitter());
    }
}


function draw() {
    myX = mouseX;
    clear();
    vol = analyzer.getLevel();

    for (var i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
        if (bugs[i].y > height) {
            bugs[i].y -= height;
        }
    }
}


function mouseDragged() {
    for (var i = 0; i < bugs.length; i++) {
        bugs[i].x += (mouseX - myX) * random(0, 1);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Jitter class
function Jitter() {
    this.x = random(width - 50);
    this.y = random(height);
    this.r = random(0.05, 0.5);

    this.speed = random(0.5, 2);
    this.theta = random(0, 2 * PI) * this.r;
    this.alpha = random(0.03, 0.2);

    this.move = function () {
        this.x += sin(this.theta);
        this.y += this.speed;
        this.theta += 0.02;
    };

    this.display = function () {
        noStroke();
        fill("rgba(244, 35, 0," + this.alpha.toString() + ")");
        ellipse(this.x, this.y, this.r * vol * 200, this.r * vol * 200);
        this.alpha += 0.1;
        fill("rgba(244, 35, 0," + this.alpha.toString() + ")");
        ellipse(this.x, this.y, this.r * vol * 150, this.r * vol * 150);
        this.alpha += 0.1;
        fill("rgba(244, 35, 0," + this.alpha.toString() + ")");
        ellipse(this.x, this.y, this.r * vol * 100, this.r * vol * 100);
        this.alpha = random(0.03, 0.2);
    };
};