
let dvgridItem = document.getElementById("gridItem");

dvgridItem.style.height = "400px";
dvgridItem.style.width = "650px";
dvgridItem.style.backgroundColor = '#141414';
dvgridItem.style.margin = "2px";

dvgridItem.onclick = function() {
    dvgridItem.innerHTML = "Happy Halloween!"
    
}






dvgridItem.onmouseover = function() {
    dvgridItem.style.backgroundColor = '#e3700b';
}
dvgridItem.onmouseout = function() {
    dvgridItem.style.backgroundColor = '#141414';
}