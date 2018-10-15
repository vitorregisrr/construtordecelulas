var startAnim = function () {
    naveEspacial.montar();
    alien.canMove = false;
    topStatistics.alpha = 0;
    joystick.alpha = 0;
    game.time.events.add(300, function () {
        
        game.add.tween(game.camera.scale).to({
            x: 0.9,
            y: 0.9,
        }, 1200, Phaser.Easing.Linear.None, true);

        game.time.events.add(4000, function () {
            game.add.tween(game.camera.scale).to({
                x: 1,
                y: 1,
            }, 2000, Phaser.Easing.Linear.None, true);

            game.time.events.add(1500, function () {
                game.add.tween(alien.element).to({
                    alpha: 1,
                }, 1500, Phaser.Easing.Linear.None, true);

                game.add.tween(topStatistics).to({
                    alpha: 1,
                }, 2000, Phaser.Easing.Linear.None, true);

                game.add.tween(joystick).to({
                    alpha: 0.6,
                }, 2000, Phaser.Easing.Linear.None, true);

                alien.canAttack = true;
                alien.canMove = true;

                //dialogo
                game.add.tween(naveEspacial.dialogoSair).to({
                    alpha: 0.7
                }, 300, Phaser.Easing.Linear.None, true);
            }, this).autoDestroy = true;
        }, this).autoDestroy = true;
    }, this).autoDestroy = true;
}