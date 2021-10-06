let colors = [ "#f571df", "#ffebfc", "#52321d"]

function setup() {
    createCanvas(600, 300)

    for( var i = 0; i < colors.length; i++) {
        fill( colors[i] );
        rect(0, 100 * i, 600, 100);
    }
}