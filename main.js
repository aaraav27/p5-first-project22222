function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
video  = createCapture(VIDEO);
video.hide();

}

function draw(){
    image(video , 139 , 170, 250, 250);

fill(255, 0, 0);

stroke(255, 0 ,0);

circle(35, 80, 50);
circle(470, 80, 50);
circle(35,460 , 50);
circle(470,460 , 50);

fill(0, 155, 0);

stroke(255, 0 ,0);
rect(61.9, 80, 380, 20);
rect(61.9, 450, 380, 20);
rect(60.9, 80, 20, 370);
rect(440.9, 80, 20, 370);
}

function take_snapshot(){
 save('myphoto.png');   

}