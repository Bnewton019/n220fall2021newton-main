

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(100);

    noFill();

    //For loop syntax
    for( var i = 0; i < 60; i++) {
        circle(300, 300, i * 10);
    }
    console.log("Afterwards: " + i);
}