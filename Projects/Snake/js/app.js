let xPositions = [ 0,0,0,0,0,0,0,0,0,0];
let yPositions = [ 0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas(600,300);
    fill(255, 12, 129);
}

function draw() {
    console.log(xPositions);
    background(0);
    if(xPositions.length > 9) {
        xPositions.shift();
    }
    if(yPositions.length > 9) {
        yPositions.shift();
    }
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    
    for(var i = 0; i < xPositions.length; i++) {
        for(var t = 0; t < yPositions.length; t++) {
            circle(xPositions[i], yPositions[t], i*5);

        }
        
    }
}