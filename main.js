 function preload() {

 }
 function setup(){
  canvas = createCanvas(640 , 480);
  canvas.position(110 , 250);
  video = createCapture(VIDEO);
  video.hide();
 }
 function draw(){
    image(video , 200 ,100, 200, 200);
    fill("orange");
    stroke("orange")
    circle(50, 40, 70 );
    circle(580, 40, 70 );
    circle(580, 420, 70 );
    circle(50, 420, 70 );
    fill("blue");
    stroke("blue");
    rect(80 , 20 , 475 , 40);
    rect(80 , 400 , 475 , 40);
    rect(560 , 75 , 40 , 320);
    rect(30 , 75 , 40 , 320);
 }
function take_snapshot(){
   save('hello_world.png');
 }                                