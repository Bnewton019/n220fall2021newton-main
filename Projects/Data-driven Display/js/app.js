let graphic = { 
    width: "600",
    height: "400",
    color: "#8b0be0",
    positionX: "0",
    positionY: "0",




}

function setup() {
    createCanvas(800, 600); 
    
}

function draw() {
   
    fill(graphic.color),
   
    rect(graphic.positionX, graphic.positionY, graphic.width, graphic.height);
}