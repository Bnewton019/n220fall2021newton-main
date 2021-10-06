let dvSquare = document.getElementById("square");
let x = "100px"


dvSquare.style.backgroundColor = "#1f7a37";
dvSquare.style.width =  x;
dvSquare.style.height = x;
dvSquare.style.cursor = 'pointer';
dvSquare.onclick = function() {
    
        x = x*0.1
    
}



function setup() {
    createCanvas(800, 600);
}




