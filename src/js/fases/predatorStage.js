var predatorState = {
    create: criarPredatorState,
    update: atualizarPredatorState,
    render: render,
};

var rna, dna, chao;
var predatorVoice;

function criarPredatorState() {
    createModals();
    createQuizzModal();
    locucao.gen();
    sounds.gen();
    showQuadrinho(2);
    setTimeout(() => {
        showQuadrinho(2);
    }, 20);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //gerando o bg
    var bg = game.add.sprite(0, 0, 'background1');

    //chao
    chao = game.add.sprite(0, 665, 'chao1');
    game.physics.arcade.enable(chao);
    chao.enableBody = true;
    chao.body.immovable = true;
    chao.body.setSize(1450, 30, 0, 159);

    //incubadora
    incubadora.gen();

    //cria os personagens
    alien.gen(1230, 730);
    alien.element.scale.x *= -1;
    alien.element.body.gravity.y = -0;

    //cria o portal
    portal.gen(1180, 620);
    portal.effect.animations.play('gen', 14, false);
    sounds.play("shock");

    predator.gen(100, 710, 20, 1);

    //cria as naves
    naveEspacialPredator.gen();

    sounds.play('predatorVoice');
    predatorVoiceLoop = game.time.events.loop(8000, function () {
        sounds.play('predatorVoice');
    }, this);

    //camera
    game.world.setBounds(0, 0, 1400, 900);
    game.camera.follow(alien.element);

    //ui
    gameUI();
    predatorCutscene1();
}

function atualizarPredatorState() {
    game.physics.arcade.collide(alien.element, chao);
    game.physics.arcade.collide(predator.body, chao);
    game.physics.arcade.collide(naveEspacial.body, chao);
    game.physics.arcade.collide(naveEspacialPredator.body, chao);

    alien.move();
    predator.followPlayer();
    predator.collide();
}

function render() {
    //game.debug.body(naveEspacial.body);
}