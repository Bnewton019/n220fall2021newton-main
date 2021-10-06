var x = 25;
var y = 300;

function setup() {
    createCanvas(800, 600)
}

function draw () {
    background(35);
    fill(255);
    ellipse(350, y, x, x);
    ellipse(450, y, x, x);
    ellipse(550, y, x, x);
    ellipse(650, y, x, x);
    ellipse(750, y, x, x);
    fill(255, 204, 0);
    strokeWeight(1.5);
    stroke(255);
    arc(mouseX, 300, 200, 200, 0.47, 5.65);
    fill('blue');
     rect(0, 125, 800, 25);
     rect(0, 450, 800, 25);

    
   
}

