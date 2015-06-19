console.log("drawing noise");

// A wind direction vector
var wind;
// Circle position
var position;


// Perlin noise offset 
var yoff = 0;
// Random seed to control randomness while drawing the tree
var seed = 5;

function setup() {
    //create full width and full height p5 canvas
    var myCanvas = createCanvas(window.innerWidth, 400);
    myCanvas.parent('wind');
    
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial', gotWeather);
  // Circle starts in the middle
    position = createVector(width/2, height/2);
  // wind starts as (0,0)
    wind = createVector();
}

function draw() {
  background(200);
    
  // This section draws an arrow pointing in the direction of wind
  push();
  translate(width-32, height-32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
 // Move in the wind's direction
  position.add(wind); 
  stroke(255);
  noFill();
  ellipse(position.x, position.y, 6, 6);
    
  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

//draw tree
 	//text("Click mouse to generate a new tree", 10, height-20);
    stroke(255);
	// Start the tree from the bottom of the screen
	translate(windowWidth/2, 400);
	// Move alogn through noise
	yoff += 0.005;
	randomSeed(seed);
	// Start the recursive branching!
	branch(70, 0);   
}

function mousePressed() {
  // New tree starts with new noise offset and new random seed
  yoff = random(1000);
  seed = millis();
}



function branch(h, xoff) {
  // thickness of the branch is mapped to its length
  var sw = map(h, 2, 100, 1, 2);
  strokeWeight(sw);
  // Draw the branch
  line(0, 0, 0, -h);
  // Move along to end
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.72;
  
  // Move along through noise space
  xoff += 0.1;

  if (h > 4) {
    // Random number of branches
    var n = random(0, 3);
    for (var i = 0; i < n; i++) {

      // Here the angle is controlled by perlin noise
      var theta = map(noise(xoff+i, yoff), 0, 1, -PI/3, PI/3);
      
      push();      // Save the current state of transformation (i.e. where are we now)
      rotate(theta);     // Rotate by theta
      branch(h, xoff);   // Ok, now call myself to branch again
      pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}



function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);
  
  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
      temperatureDiv.parent('caption');
  var windDiv = createDiv("wind: " + windmag + " <small>MPH</small>");
      windDiv.parent('caption');
    
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}
