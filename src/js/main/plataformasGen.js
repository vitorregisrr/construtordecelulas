var plataformas = new Object();

plataformas.presets = function () {
    this.group = game.add.group();
}

var acido, chao2;
plataformas.gen = function () {

    //chao lab
    var chao1 = game.add.sprite(0, 1210, 'placeholder');
    game.physics.arcade.enable(chao1);
    chao1.width = 380;
    chao1.body.immovable = true;
    chao1.alpha = 0;
    plataformas.group.add(chao1);

    chao2 = game.add.sprite(475, 1210, 'labStairs');
    game.physics.arcade.enable(chao2);
    chao2.width = 230;
    chao2.body.immovable = true;
    plataformas.group.add(chao2);

    var chao3 = game.add.sprite(800, 1210, 'placeholder');
    game.physics.arcade.enable(chao3);
    chao3.width = 830;
    chao3.body.immovable = true;
    chao3.alpha = 0
    plataformas.group.add(chao3);

    acido = game.add.sprite(330, 1230, 'placeholder');
    game.physics.arcade.enable(acido);
    acido.width = 500;
    acido.body.immovable = true;
    acido.alpha = 0;

    //chao planeta
    var chao4 = game.add.sprite(0, 665, 'chao1');
    game.physics.arcade.enable(chao4);
    chao4.body.immovable = true;
    chao4.width = 475;
    chao4.body.setSize(1460, 30, 0, 159);
    plataformas.group.add(chao4);

    var chao5 = game.add.sprite(710, 665, 'chao1');
    game.physics.arcade.enable(chao5);
    chao5.body.immovable = true;
    chao5.width = 1000;
    chao5.body.setSize(1460, 30, 0, 159);
    plataformas.group.add(chao5);

}



plataformas.collide = function () {
    if(!alien.montado){
        game.physics.arcade.collide(alien.element, plataformas.group, function () {});
    }

    game.physics.arcade.collide(naveEspacial.body, plataformas.group, function () {});

    if (chao2.y >= 1210) {
        chao2.body.velocity.y = -100;
    }

    if (chao2.y <= 785) {
        chao2.body.velocity.y = 100;
    }

    game.physics.arcade.collide(alien.element, acido, function () {
        if(!alien.montado){
            alien.element.y = 700;
            alien.element.x = 200;
            alien.hited(2);
        }
    });

    game.physics.arcade.collide(acido, naveEspacial.body, function(){});
}