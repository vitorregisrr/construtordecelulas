predatorCutscene1 = function () {

    topStatistics.alpha = 0;
    game.camera.y += 300;
    joystick.alpha = 0;
    predator.montado = false;
    alien.canMove = false;
    alien.canAttack = false;
    naveEspacialPredator.montar();

    var dialog1 = game.add.sprite(-50, -200, "dialog1");
    dialog1.scale.setTo(1.2, 1, 2);
    predator.body.addChild(dialog1);
    dialog1.alpha = 0;

    game.camera.follow(alien.element);

    game.time.events.add(Phaser.Timer.SECOND * 2, function () {
        game.camera.follow(predator.body);
    });

    game.time.events.add(Phaser.Timer.SECOND * 4, function () {
        game.add.tween(dialog1).to({
            alpha: 1
        }, 2000, Phaser.Easing.Linear.None, true);
    });

    game.add.tween(game.camera.scale).to({
        x: 1,
        y: 1,
    }, 2000, Phaser.Easing.Linear.None, true);

    game.time.events.add(Phaser.Timer.SECOND * 8, function () {
        game.add.tween(dialog1).to({
            alpha: 0
        }, 1000, Phaser.Easing.Linear.None, true);
    });

    game.time.events.add(Phaser.Timer.SECOND * 9, function () {

        game.add.tween(game.camera.scale).to({
            x: 1,
            y: 1,
        }, 2000, Phaser.Easing.Linear.None, true);

        game.time.events.add(1500, function () {

            alien.canMove = true;
            alien.element.body.gravity.y = 400;
            alien.canAttack = true;
            game.camera.follow(alien.element);

            game.add.tween(alien.element).to({
                alpha: 1,
            }, 1500, Phaser.Easing.Linear.None, true);

            game.add.tween(topStatistics).to({
                alpha: 1,
            }, 2000, Phaser.Easing.Linear.None, true);

            
            game.add.tween(joystick).to({
                alpha: 0.6,
            }, 2000, Phaser.Easing.Linear.None, true);
            
            game.time.events.add(1500, function () {
                naveEspacialPredator.montar();
                predator.body.bringToTop();
                alien.element.bringToTop();
                gameUiBringtoTop();
            }, this);

        }, this);
    }, this);
}