var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'World_Hello', { create: create });

function preload() {
    
}

function create() {

    var text = "- I am snek, Hear me Hiss";
    var style = { font: "45px Arial", fill: "#008000", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
    
}

function update() {
    
}
