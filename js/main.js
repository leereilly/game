var GitHub = GitHub || {};

GitHub.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

GitHub.game.state.add('Boot', GitHub.Boot);
GitHub.game.state.start('Boot');
