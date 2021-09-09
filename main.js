function setup(){
    canvas=createCanvas(640,480);
    canvas.position(400,190);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 100, 90, 400, 300);

    //Top Left Circle
    fill(255, 8, 90);
    stroke(255, 8, 90);
    circle(50,50,80);

    //Top Middle Circle
    fill(237, 170, 83);
    stroke(237, 170, 83);
    circle(304,50,80);

    //Top Right Circle
    fill(252, 244, 121);
    stroke(252, 244, 121);
    circle(550,50,80);

    //Right Middle Circle
    fill(65, 224, 47);
    stroke(65, 224, 47);
    circle(550,250,80);

    //Right Bottom Circle
    fill(0, 255, 229);
    stroke(0, 255, 229);
    circle(550,420,80);

    //Bottom Middle Circle
    fill(0, 4, 255);
    stroke(0, 4, 255);
    circle(304,440,80);

    //Left Middle Circle
    fill(255, 0, 217);
    stroke(255, 0, 217);
    circle(50,250,80);

    //Bottom Left Circle
    fill(144, 0, 255);
    stroke(144, 0, 255);
    circle(50,420,80);

    //Bottom Rectangle
    fill(95, 169, 212);
    stroke(95, 169, 212);
    rect(90, 420, 450,20);

    //Left Rectangle
    fill(127, 227, 195);
    stroke(127, 227, 195);
    rect(40,80,20,360);

    //Top Rectangle
    fill(127, 227, 154)
    stroke(127, 227, 154)
    rect(60,40,500,15);

    //Right Rectangle
    fill(210, 166, 245);
    stroke(210, 166, 245);
    rect(540,80,20,360);

}
function take_snapshot(){
    save("Vaishnavi.jpg");
}