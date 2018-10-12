var gameState1 = {
    create: criarState1,
    update: atualizarState1,
    render: render,
};

var rna, dna, chao;
var numeroOrganelas, celulaAtual;
function criarState1() {
    createModals();
    createQuizzModal();
    locucao.gen();
    sounds.gen();
    celulaAtual = celulaProcarionte;

    levelNumber = 1;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    game.time.events.resume(updateTime);
    timeArrayProvisorio = [
        [00],
        [00],
        [00]
    ];
    
    //gerando o bg
    var bg = game.add.sprite(0, 0, 'background1');
    var labbg = game.add.sprite(0, 870, 'labbackground');

    //plataformas
    plataformas.presets();
    plataformas.gen();

    //cria a dna polimerase
    alien.gen(290, 740);

    //nave espacial
    naveEspacial.gen();

    //cria o gerador
    gerador.gen();

    //organelas
    organelas.presets();

    //camera
    game.world.setBounds(0, 0, 1430, 1300);

    //celula
    celulaProcarionte.gen();
    celulaProcarionte.placeholdersGen();
    numeroOrganelas = celulaProcarionte.numeroOrganelas;

    //portal
    portal.gen(1260, 620);
    
    //ui
    gameUI();
    topStatistics.bringToTop();
    
    //animacao do zoom 
    startAnim();
}

function atualizarState1() {
    plataformas.collide();
    alien.move();
}

function render() {
}