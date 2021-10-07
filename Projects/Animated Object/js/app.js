let animateCircle = {
    positionX: "400",
    positionY: "300",
    size: "250",
    color: "#2fd46b",
}

function setup() {
    createCanvas(800, 600);
    background(255);
}

function draw() {
    
    fill(animateCircle.color),
   
    
    circle(animateCircle.positionX, animateCircle.positionY, animateCircle.size++);
    if(animateCircle.size > 600) {
        animateCircle.size = 250;
    }
}