var predator = {
    bodys: new Array(),

    presets: function () {

    },

    gen: function (x, y, maxHp, dano) {

        this.group = game.add.group();

        //body attrs
        this.body = game.add.sprite(x, y, 'predator');
        this.group.add(this.body);
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.dano = dano;
        this.canAttack = true;
        this.dead = false;

        //body physics
        game.physics.arcade.enable(this.body);
        this.body.body.enable = true;
        this.body.body.gravity.y = 400;
        this.body.anchor.setTo(0.5, 0.5);
        this.body.body.setSize(58, 115, 80, 45);
        this.body.body.collideWorldBounds = true;

        // Cria a Barra de HP e torna um filhos
        this.HpBarbg = game.add.sprite(-65, -70, 'hpBarSMbg');
        this.body.addChild(this.HpBarbg);
        this.HpBar = game.add.sprite(-65, -55, 'hpBarSM');
        this.body.addChild(this.HpBar);
        this.HpBar.anchor.setTo(0, 1);
        this.HpBar.scale.setTo(1, 1);

        //Loop do ataque'
        var e = this.body
        this.attackLoop = game.time.events.loop(1500, predator.attack, this, e);

        //bulets
        this.body.bulletsGroup = game.add.group();
        this.body.bulletsGroup.enableBody = true;
        this.body.bulletsGroup.createMultiple(10, 'alienBullet');
        this.body.bulletsGroup.setAll('checkWorldBounds', true);
        this.body.bulletsGroup.setAll('outOfBoundsKill', true);
        game.physics.enable(this.body.bulletsGroup, Phaser.Physics.ARCADE);

        //animacoes
        this.body.animations.add('walk', [7, 8, 9, 10, 11, 12, 13]);
        this.body.animations.add('stoped', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 00, 0, 0, 1, 2]);
        this.body.animations.add('jump', [34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36]);
        this.body.animations.add('die', [50, 51, 52, 53, 54]);
        this.body.animations.add('grabing', [61, 62, 63, 63, 63, 63, 64, 65, 65, 64, 65, 65, 64, 64, 65, 65, 65, 64, 65, 66, 67, 68]);
        this.body.animations.add('hited', [40, 41, 42, 43]);
        this.body.animations.add('attack', [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]);

    },

    attack: function (e) {
        if (!predator.montado && !predator.dead) {
            if (Math.abs(alien.element.x - e.x) < 550 && e.body.velocity.x == 0) {

                e.bullet = e.bulletsGroup.getFirstDead();
                e.bullet.rotation = Math.atan2(alien.element.y - e.bullet.y, alien.element.x + -e.bullet.x);
                e.bullet.body.setSize(20, 20, 3, 3);

                var i = e.scale.x == -1 ? e.x + -20 : e.x + 20;
                e.bullet.reset(i, e.y + 5, 'alienBullet');
                game.physics.arcade.moveToObject(e.bullet, alien.element, (game.rnd.integerInRange(150, 250)));
                e.animations.play('attack', 9, false);

                game.time.events.add(800, function () {
                    if (!predator.dead) {
                        e.animations.play('stoped', 10, true);
                    }
                }, this);
            }
        }
    },

    hited: function (demage) {
        var e = predator;
        if (e.hp > 0 && !e.dead) {
            e.body.animations.play('hited');
            e.hp -= demage;
            console.log(e.hp);
            game.add.tween(e.HpBar.scale).to({
                x: e.hp / e.maxHp,
                y: 1
            }, 600, Phaser.Easing.Linear.None, true);
            e.HpBar.x += 0.4;
            sounds.play('predatorAttacked');
        }

        if (e.hp == 0 && !e.dead) {
            game.time.events.remove(e.attackLoop);
            e.body.animations.play('die', 8, false);
            e.dead = true;
            game.time.events.remove(predatorVoiceLoop);
            sounds.play('predatorDie');
            game.time.events.add(300, function () {
                predator.body.body.velocity.x = 0;
            }, this);

            game.time.events.add(2000, function () {
                levelSuccess();
            });
        }
    },

    collide: function () {
        alien.element.bulletsGroup.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, predator.body, function () {
                console.log('colisao');
                bullet.kill();
                predator.hited(2);
            }, null, this);

        });

        predator.body.bulletsGroup.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, alien.element, function () {
                bullet.kill();
                alien.hited(2);
            }, null, this);

        });

        alien.element.bulletsGroup.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, predator.body, function () {
                bullet.kill();
                predator.hited(2, predator.body);
            }, null, this);
        });

    },
    followPlayer: function () {
        if (!predator.montado && !predator.dead) {
            var e = predator.body;
            e.speed = 90; //speed fix
            // Se a distância entre o inimigo e algum player estiver entre 380 e 200
            if (Math.abs(alien.element.x - e.x) > 450) {
                var diffXD = Math.sign(alien.element.x - e.x);
                e.animations.play('walk', 10, true);
                // Reflete para a direção do player encontrado
                // Reflete para a direção do player encontrado
                if (diffXD == -1) {
                    e.body.velocity.x = e.speed * -1;
                    e.scale.x *= 1;
                    if (e.scale.x != -1) {
                        e.scale.x *= -1;
                    }
                } else if (diffXD == 1) {
                    e.body.velocity.x = e.speed;
                    if (e.scale.x != 1) {
                        e.scale.x *= -1;
                    }
                }
            } else { // Se sair do range de perseguição, ele para de perseguir.
                e.body.velocity.x = 0;
                e.body.velocity.y = 0;
            }
        }
    }
}