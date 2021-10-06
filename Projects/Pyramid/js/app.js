

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    fill('red');
    //for loop syntax
    for( var i = 0; i <= 3; i++) { //number of rows
        for( var x = 0; x <= i; x++) { //number of columns
        rect(x * 60, i * 60, 55, 55);
        }
    }
}