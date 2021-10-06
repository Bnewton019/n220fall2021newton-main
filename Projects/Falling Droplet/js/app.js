let yPositions = [0, 50 , 100, 150]
let dObj = { x: 400, y:0, velocityY: 2}
let gravity =.2;
let fr = 10;

function setup() {
    createCanvas(800, 600);
    

 
}

function draw() {
    background(0);
    if(yPositions.length > 1) {
        yPositions.shift();
    }

    

    for( var i = 0; i < yPositions.length; i++) {
        if(frameCount > 2); {
        circle(dObj.x, dObj.y, 20);
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity; 
        }
    }

   
}