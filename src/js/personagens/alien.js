var fireRate = 650,
    nextFire = 0;
var alien = {
    gen: function (x, y) {
    
        this.element = game.add.sprite(x, y, 'alien');
        this.element.scale.setTo(0.85, 0.85);
        game.physics.arcade.enable(this.element);
        this.element.body.enable = true;
        this.element.body.gravity.y = 400;
        this.element.anchor.setTo(0.5, 0.5);
        this.element.body.setSize(58, 115, 80, 45);
        this.element.hp = 15;
        this.element.body.collideWorldBounds = true;

        //controles
        this.canAttack = true;
        this.canMove = true;
        this.montado = false;
        this.animating = false;

        //criando as bullets
        this.element.bulletsGroup = game.add.group();
        this.element.bulletsGroup.enableBody = true;
        this.element.bulletsGroup.createMultiple(10, 'alienBullet');
        this.element.bulletsGroup.setAll('checkWorldBounds', true);
        this.element.bulletsGroup.setAll('outOfBoundsKill', true);
        game.physics.enable(this.element.bulletsGroup, Phaser.Physics.ARCADE);


        this.element.animations.add('walk', [8, 9, 10, 11, 12, 13, 14, 15, 16]);
        this.element.animations.add('stoped', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 00, 0, 0, 1, 2, 3, 4]);
        this.element.animations.add('jump', [34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36]);
        this.element.animations.add('die', [50, 51, 52, 53, 54]);
        this.element.animations.add('grabing', [61, 62, 63, 63, 63, 63, 64, 65, 65, 64, 65, 65, 64, 64, 65, 65, 65, 64, 65, 66, 67, 68]);
        this.element.animations.add('hited', [46, 47, 48, 49, 50]);
        this.element.animations.add('attack', [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]);
    },

    attack: function (e) {
        if (this.element.hp > 0 && alien.canAttack && !alien.grabing && !alien.animating && checkEnergiaOverlap() && checkOrganelaOverlap() && checkNaveEspacialOverlap() && checkGerarBtnOverlap() && checkReatorBtnOverlap() && checkPortalOverlap()) {
            if (game.time.now > nextFire && this.element.bulletsGroup.countDead() > 0) {
                sounds.play('attack');
                alien.animating = true;
                this.element.animations.play('attack', 10);
                game.time.events.add(450, function () {
                    alien.animating = false;
                });
                nextFire = game.time.now + fireRate;
                this.element.bullet = this.element.bulletsGroup.getFirstDead();
                this.element.bullet.reset(this.element.x + 10, this.element.y - 2);

                if (alien.element.scale.x > 0) {
                    this.element.bullet.body.velocity.x = 400;
                } else {
                    this.element.bullet.body.velocity.x = -400;
                }

                attackBtn.frame = 1;
                setTimeout(() => {
                    attackBtn.frame = 0;
                }, 400);
            }
        }
    },

    hited: function (demage) {

        sounds.play('hurt');
        if (this.element.hp > 0) {
            this.animating = true;
            this.element.animations.play('hited', 10);
            setTimeout(function () {
                alien.animating = false;
            }, 400);

            if ((this.element.hp - demage) < 0) {

                this.element.hp = 0;
            } else {
                this.element.hp -= demage;
            }
            textHp.setText(alien.element.hp);
        }

        if (this.element.hp <= 0 && !this.element.dead) {
            this.element.dead = true;
            this.element.animations.play('die', 10, false);
            alien.canAttack = false;
            alien.canMove = false;
            alien.element.immovable = true;
            game.time.events.add(2000, function () {
                gameOver();
            });
        }
    },

    move: function () {
        if (game.input.activePointer.isDown && !moveLeftBtn.isDown && !attackBtn.isDown && !moveUpBtn.isDown && !moveDownBtn.isDown && !moveRightBtn.isDown) {
            if (alien.grabing == 'energia') {
                energia.drop();
            } else if (alien.grabing == 'organela') {
                organelas.drop();
            } else {
                if (!alien.montado && !mobileAndTabletcheck()) {
                    alien.attack();
                } else {
                    //naveEspacial.attack();
                }
            }
        }

        if(!alien.montado){
            game.camera.x = alien.element.x - 400;
            game.camera.y = alien.element.y - 420;
        }else{
            game.camera.x = naveEspacial.body.x - 360;
            game.camera.y = naveEspacial.body.y - 300;
        }
        if (alien.canMove) {
            if (!alien.montado) {
                this.element.body.velocity.x = 0;
                if (cursors.left.isDown || leftButton.isDown || moveLeftBtn.isDown) {
                    this.element.body.velocity.x = -250;
                    moveLeftBtn.frame = 1;
                    if (alien.element.scale.x > 0) {
                        alien.element.scale.x *= -1;
                    }

                    if (!alien.animating) {
                        this.element.animations.play('walk');
                    }

                    if (alien.grabing && organelas.grabing) {
                        organelas.grabing.scale.x = -1;
                    }

                } else if (cursors.right.isDown || rightButton.isDown || moveRightBtn.isDown) {
                    moveRightBtn.frame = 1;
                    this.element.body.velocity.x = 250;
                    if (alien.element.scale.x < 0) {
                        alien.element.scale.x *= -1;
                    }
                    if (!alien.animating) {
                        this.element.animations.play('walk', 8, false);
                    }

                    if (alien.grabing && organelas.grabing) {
                        organelas.grabing.scale.x = 1;
                    }


                } else {
                    if (!alien.animating) {
                        this.element.animations.play('stoped', 12, false);
                    }
                    moveRightBtn.frame = 0;
                    moveLeftBtn.frame = 0;
                }

                if ((cursors.up.isDown || upButton.isDown || moveUpBtn.isDown) && alien.element.body.touching.down ) {
                    this.element.animations.play('jump', 12, false);
                    this.animating = true;
                    setTimeout(function () {
                        alien.animating = false;
                    }, 900)
                    this.element.body.velocity.y = -350;
                    moveUpBtn.frame = 1;
                    setTimeout(() => {
                        moveUpBtn.frame = 0;
                    }, 500);
                } else if (cursors.down.isDown || downButton.isDown || moveDownBtn.isDown) {
                    moveDownBtn.frame = 1;
                    this.element.body.velocity.y = 450;
                }else{
                    moveDownBtn.frame = 0;
                }

            } else {
                if (!alien.animating) {
                    this.element.animations.play('stoped', 12, false);
                }
                this.element.body.velocity.x = 0;
                if (cursors.left.isDown || leftButton.isDown || moveLeftBtn.isDown ) {
                    naveEspacial.body.body.velocity.x = -250;
                    moveLeftBtn.frame = 1;
                } else if (cursors.right.isDown || rightButton.isDown || moveRightBtn.isDown ) {
                    naveEspacial.body.body.velocity.x = 250;
                    moveRightBtn.frame = 1;
                } else {
                    naveEspacial.body.body.velocity.x = 0;
                    moveLeftBtn.frame = 0;
                    moveRightBtn.frame = 0;
                }

                if (cursors.up.isDown || upButton.isDown ||  moveUpBtn.isDown ) {
                    naveEspacial.body.body.velocity.y = -310;
                    moveUpBtn.frame = 1;

                } else if (cursors.down.isDown || downButton.isDown || moveDownBtn.isDown ) {
                    naveEspacial.body.body.velocity.y = 450;
                    moveDownBtn.frame = 1;
                } else {
                    naveEspacial.body.body.velocity.y = 20;
                    moveUpBtn.frame = 0;
                    moveDownBtn.frame = 0;
                }
            }
        }
    }
}