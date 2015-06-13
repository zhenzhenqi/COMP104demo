var myVideo;
var videoX;
var videoY;

function setup() {
    //create full width and full height p5 canvas
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('test');

    myVideo = createVideo('wheatfield.mp4');
    
    myVideo.loop(); // set the video to loop and start playing
    myVideo.hide(); // by default video shows up in separate dom 
    // element. hide it and draw it   
    capture = createCapture(VIDEO);
    capture.size(window.innerWidth / 4, window.innerHeight / 2);
    
    rectMode(CENTER);
}

function draw() {  
   clear();
    
   if(dist(mouseX, mouseY, window.innerWidth/4*3, window.innerHeight/2)<100){
       videoX=random(-5, 5);
       videoY=random(-5, 5);
   }else{
       videoX = 0;
       videoY = 0;
   }
   
   image(myVideo, videoX-10, videoY-10, window.innerWidth+20, window.innerHeight+20);
//    image(capture, 0, 0, window.innerWidth / 4, window.innerHeight / 2);
    
    fill("rgba(0, 0, 0, 0.2)");
  
    if(dist(mouseX, mouseY, window.innerWidth/4, window.innerHeight/2)<100){
        rect(window.innerWidth/4, window.innerHeight/2, 200, 400);
        filter('GRAY'); 
    }else if(dist(mouseX, mouseY, window.innerWidth/2, window.innerHeight/2)<100){
        rect(window.innerWidth/2, window.innerHeight/2, 200, 400);
        myVideo.pause(); 
    }else if(dist(mouseX, mouseY, window.innerWidth/4*3, window.innerHeight/2)<100){
        rect(window.innerWidth/4*3, window.innerHeight/2, 200, 400);  
        filter(POSTERIZE,8);
    }else{
        myVideo.loop();
    };
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

