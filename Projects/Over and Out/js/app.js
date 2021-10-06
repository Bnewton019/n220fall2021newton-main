let x = "100px";
let dvSquare = document.getElementById("square");

dvSquare.style.height = x;
dvSquare.style.width = x;
dvSquare.onmouseover = function() {
    dvSquare.style.backgroundColor = 'black';
}
dvSquare.onmouseout = function() {
    dvSquare.style.backgroundColor = 'blue';
}