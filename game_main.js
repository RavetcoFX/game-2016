var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'World_Hello', { create: create });

function preload() {
    
}

function create() {

    var text = "I am snek, Hear me Hiss";
    var style = { font: "40px Times New Roman", fill: "#800000", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
    
}

function update() {
    
}
