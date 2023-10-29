function preload(){

}

function setup(){
    canvas = createCanvas(900, 600);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();
}

function draw(){
   image(video, 300, 180, 300, 250);
   fill("pink");
   stroke("pink");
   circle(100, 100, 90);
   fill("lightblue");
   stroke("lightblue");
   rect(80, 140, 35, 300);
   fill("pink");
   stroke("pink");
   circle(100, 480, 90);
   fill("lightblue");
   stroke("lightblue");
   rect(140, 470, 650, 35);
   fill("pink");
   stroke("pink");
   circle(800, 480, 90);
   fill("lightblue");
   stroke("lightblue");
   rect(780, 140, 35, 300);
   fill("pink");
   stroke("pink");
   circle(800, 100, 90);
   fill("lightblue");
   stroke("lightblue");
   rect(140, 80, 620, 35);
}