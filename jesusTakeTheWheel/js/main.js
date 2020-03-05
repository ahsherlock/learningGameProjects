var GameState = {
  preload: function() {
    //load new image
    this.load.image('background', 'assets/images/background.jpg');
    this.load.image('char', 'assets/images/theDude.png');
    this.load.image('zombie', 'assets/images/deadDude.png');
  },
  create: function() {
    // create sprite and display starting from the top left of the screen
    this.background = this.game.add.sprite(0, 0, 'background');

    //add dude to screen, coordinates strt at top left of image
    this.dude = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      'char'
    );

    this.zombie = this.game.add.sprite(
      120,
      10,
      'zombie'
    );
    //change anchor point of image to the center
    this.dude.anchor.setTo(0.5, 0.5);

    //Scaling
    this.dude.scale.setTo(2);// scaled 2x on X and Y axis.
    //this.dude.scale.setTo(2,1); scale = normal on Y axis, and 2x on X axis

    this.zombie.anchor.setTo(0.5,0.5);
    this.zombie.scale.setTo(0.5,0.5);
    
  },
  update: function() {}
};
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'area');
game.state.add('GameState', GameState);
game.state.start('GameState');
