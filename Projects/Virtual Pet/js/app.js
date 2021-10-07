

function Pet(type) {
    this.name = type;
    this.energy = 50;
    this.happiness = 50;
    this.age = 1;
    this.feed = function() {
let food = this.energy +5;
console.log(this.name, this.energy, this.happiness, this. age);
console.log('Harold energy increased by 5.'); 
    }
    this.play = function() {
        let playTime = this.happiness+5;
        console.log('Harold happiness increased by 5.');
    }
} 



function updateEnergy() {

}


let Harold = new Pet("Harold");





