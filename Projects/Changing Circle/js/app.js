var diameter = 1

function setup() {
    createCanvas(800,600);
    
}

function draw() {
    background(134, 142, 144)
    fill(20, 205, 238)
    circle(400, 300, diameter)
    diameter = diameter + 1;
    if(diameter > 200) {
        diameter = 1;
    }
    
}

