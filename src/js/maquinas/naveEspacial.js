var naveEspacial = {
    gen: function () {
        this.body = game.add.sprite(100, 500, 'naveEspacial');
        this.fantasia = game.add.sprite(0, 0, 'naveEspacial');
        this.fantasia.animations.add('fly');
        this.fantasia.animations.play('fly', 8, true);
        this.body.addChild(this.fantasia);

        this.body.animations.add('fly');
        this.body.animations.play('fly', 8, true);
        game.physics.arcade.enable(this.body);
        this.body.scale.setTo(0.7, 0.7);
        this.body.body.enable = true;
        this.body.body.gravity.y = 20;
        this.body.body.collideWorldBounds = true;
        this.body.inputEnabled = true;
        this.body.events.onInputDown.add(naveEspacial.montar, this);

    },
    montar: function () {
        if (alien.canMove) {
            if (!alien.montado) {
                if (Math.abs((naveEspacial.body.x + 100) - alien.element.x) < 150 && Math.abs((naveEspacial.body.y + 100) - alien.element.y) < 150) {
                    this.body.addChild(alien.element);
                    alien.element.x = 120;
                    alien.element.y = 90;
                    alien.element.body.gravity.y = 0;
                    alien.element.body.velocity.x = 0;
                    alien.element.body.velocity.y = 0;
                    alien.montado = true;
                    naveEspacial.body.bringToTop();
                    naveEspacial.fantasia.bringToTop();
                    setTimeout(() => {
                        alien.element.body.velocity.x = 0;
                        alien.element.body.velocity.y = 0;
                    }, 100);
                    gameUiBringtoTop();
                }
            } else {
                game.add.existing(alien.element);
                alien.montado = false;
                alien.element.x = naveEspacial.body.x + 30;
                alien.element.y = naveEspacial.body.y + 50;
                alien.element.body.gravity.y = 400;
                gameUiBringtoTop();
                this.body.body.velocity.x = 0;
                this.body.body.velocity.y = 0;
            }
        }
    }
}

var naveEspacialPredator = {
    gen: function () {
        this.body = game.add.sprite(100, 20, 'naveEspacialPredator');
        this.fantasia = game.add.sprite(0, 0, 'naveEspacialPredator');
        this.fantasia.animations.add('fly');
        this.fantasia.animations.play('fly', 5, true);
        this.body.addChild(this.fantasia);

        this.body.animations.add('fly');
        this.body.animations.play('fly', 5, true);
        game.physics.arcade.enable(this.body);
        this.body.scale.setTo(0.7, 0.7);
        this.body.body.enable = true;
        this.body.body.gravity.y = 20;
        this.body.body.collideWorldBounds = true;

    },
    montar: function () {
        if (!predator.montado) {
            naveEspacialPredator.body.bringToTop();
            this.body.addChild(predator.body);
            predator.body.x = 240;
            predator.body.y = 90;
            predator.body.body.gravity.y = 0;
            predator.body.body.velocity.x = 0;
            predator.body.body.velocity.y = 0;
            predator.montado = true;
            naveEspacialPredator.body.bringToTop();
            naveEspacialPredator.fantasia.bringToTop();
        } else {
            game.add.existing(predator.body);
            predator.montado = false;
            predator.body.x = naveEspacialPredator.body.x + 30;
            predator.body.y = naveEspacialPredator.body.y + 210;
            predator.body.body.gravity.y = 400;
            this.body.body.velocity.x = -30;
            this.body.body.gravity.y = -100;
            alien.element.bringToTop();
            predator.body.bringToTop();
        }
    }
}