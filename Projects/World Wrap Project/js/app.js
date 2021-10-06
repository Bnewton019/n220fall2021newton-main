let xPos = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(252, 187, 27)
    fill(0)
    xPos = xPos + 5;
    circle(xPos, 350, 100);
    if (xPos > 799) {
        xPos = 1
    }
    
}