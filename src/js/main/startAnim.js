var startAnim = function(){
    topStatistics.alpha = 0;
    naveEspacial.montar();
    alien.canMove = false;
    game.add.tween(game.camera.scale).to({
        x: 0.9,
        y: 0.9,
    }, 1200, Phaser.Easing.Linear.None, true);

    setTimeout(() => {
        game.add.tween(game.camera.scale).to({
            x: 1,
            y: 1,
        }, 2000, Phaser.Easing.Linear.None, true);

        setTimeout(() => {
            game.add.tween(alien.element).to({
                alpha: 1,
            }, 1500, Phaser.Easing.Linear.None, true);

            game.add.tween(topStatistics).to({
                alpha: 1,
            }, 2000, Phaser.Easing.Linear.None, true);

            alien.canAttack = true;
            alien.canMove = true;
        }, 1500);
    }, 4000);

}