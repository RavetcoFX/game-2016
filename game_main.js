var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'hello_world', { create: create });

function preload() {
    
}

function create() {

    var text = "- Suck A Dick Dumb Shittttt";
    var style = { font: "45px Arial", fill: "#008000", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
    
}

function update() {
    
}
