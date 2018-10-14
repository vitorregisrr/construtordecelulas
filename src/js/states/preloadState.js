var preloadState = {
    create: criarPreload,
    preload: precarregarPreload
}
var slider;

function precarregarPreload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    /*var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;*/

    var preloadBarBg = game.add.sprite(centerX, game.world.centerY + 15, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;

    preloadBar = game.add.sprite(centerX - 250, game.world.centerY, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);

    slider = new phaseSlider(game);

    //move btns
    game.load.spritesheet('moveLeft', 'assets/ui/moveLeft.png', 65, 59);
    game.load.spritesheet('btnAttack', 'assets/ui/btnAttack.png', 65, 59);
    game.load.spritesheet('moveRight', 'assets/ui/moveRight.png', 65, 59);
    game.load.spritesheet('moveUp', 'assets/ui/moveUp.png', 65, 59);
    game.load.spritesheet('moveDown', 'assets/ui/moveDown.png', 65, 59);

    //UI elements
    game.load.spritesheet('btnPlay', 'assets/ui/btnPlay.png', 200, 199, 2);
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('hearBtn', 'assets/ui/hearBtn.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('levelFailed', 'assets/ui/levelFailed.png');
    game.load.image('levelSuccess', 'assets/ui/levelSuccess.png');
    game.load.image('btnRestart', 'assets/ui/btnRestart.png');
    game.load.image('btnLeft', 'assets/ui/btnLeft.png');
    game.load.image('btnRight', 'assets/ui/btnRight.png');
    game.load.image('btnPause', 'assets/ui/btnPause.png');
    game.load.image('btnClose', 'assets/ui/btnClose.png');
    game.load.image('topStatistics', 'assets/ui/topStatistics.png');
    game.load.image('stateProgressBar', 'assets/ui/stateProgressBar.png');
    game.load.spritesheet("levels", "assets/ui/levels.png", 100, 70);
    game.load.spritesheet("starsSpritesheet", "assets/ui/starsSpritesheet.png", 183, 77);
    game.load.image("pausedModal", "assets/ui/pausedModal.png");
    game.load.image("configModal", "assets/ui/configModal.png");
    game.load.image("modalQuizz", "assets/ui/modalQuizz.png");
    game.load.image("btnOk", "assets/ui/btnOk.png");
    game.load.image("comoJogarModal", "assets/ui/comoJogarModal.png");
    game.load.image("startModal", "assets/ui/startModal.png");
    game.load.spritesheet("sobreBtn", "assets/ui/sobreBtn.png", 122, 41, 2);
    game.load.spritesheet("sobreModal", "assets/ui/sobreModal.png");
    game.load.spritesheet("btnEtapa1", "assets/ui/btnEtapa1.png", 240, 79, 2);
    game.load.spritesheet("btnComoJogar", "assets/ui/btnComoJogar.png", 240, 79, 2);
    game.load.spritesheet("btnControles", "assets/ui/btnControles.png", 240, 79, 2);
    game.load.spritesheet("btnEtapa2", "assets/ui/btnEtapa2.png", 240, 79, 2);
    game.load.spritesheet("prosseguirBtn", "assets/ui/prosseguirBtn.png", 240, 79, 2);
    game.load.spritesheet("instrucoesModalConteudos", "assets/ui/instrucoesModalConteudos.png", 615, 293, 3);

    game.load.spritesheet("onoffscifi", "assets/ui/onoffscifi.png", 40, 33);
    game.load.image("enviarscifiBtn", "assets/ui/enviarscifiBtn.png");

    game.load.image("iBtn", "assets/ui/iBtn.png");

    game.load.spritesheet("switch", "assets/ui/switch.png", 75, 34, 2);

    //plataformas
    game.load.image('chao1', 'assets/plataformas/chao1.png');
    game.load.image('labStairs', 'assets/plataformas/labStairs.png');

    //hpBars
    game.load.image('hpBarSM', 'assets/HpBars/hpBarSM.png');
    game.load.image('hpBarSMbg', 'assets/HpBars/hpBarSMbg.png');
    game.load.image('hpBarLG', 'assets/HpBars/hpBarLG.png');
    game.load.image('hpBarLGbg', 'assets/HpBars/hpBarLGbg.png');
    game.load.image('hpBarLONG', 'assets/HpBars/hpBarLONG.png');
    game.load.image('hpBarLONGbg', 'assets/HpBars/hpBarLONGbg.png');

    //caracteres   
    game.load.spritesheet('alien', 'assets/caracteres/alien.png', 240, 169);
    game.load.spritesheet('predator', 'assets/caracteres/predator.png', 240, 169);

    //backgrounds
    game.load.image('background1', 'assets/backgrounds/background1.png');
    game.load.image('labbackground', 'assets/backgrounds/labbackground.png');

    //background niveis
    game.load.spritesheet('level1bg', 'assets/backgrounds/level1bg.png', 265, 462, 2);
    game.load.spritesheet('level2bg', 'assets/backgrounds/level2bg.png', 265, 462, 2);
    game.load.spritesheet('level3bg', 'assets/backgrounds/level3bg.png', 265, 462, 2);

    //bullets
    game.load.spritesheet('mutante1Bullet', 'assets/bullets/mutante1Bullet.png', 60, 45, 8);
    game.load.spritesheet('alienBullet', 'assets/bullets/alienBullet.png');

    //audiom4a
    game.load.audiosprite('sfx', ['assets/audios/sfx/spriteJson/sprite.ogg', 'assets/audios/sfx/spriteJson/sprite.m4a'], null, sfxJson);
    game.load.audiosprite('locucao', ['assets/audios/locucao/spriteJson/sprite.ogg', 'assets/audios/locucao/spriteJson/sprite.m4a'], null, locucaoJson);

    //efeitos
    game.load.spritesheet('explosion', 'assets/efeitos/explosion.png', 160, 160, 9);
    game.load.spritesheet('efeitoraio', 'assets/efeitos/efeitoraio.png', 300, 187, 13);
    game.load.spritesheet('organelaCapturada', 'assets/efeitos/blocoCapturado.png', 116, 65, 6);
    game.load.spritesheet("energiaCapturada", "assets/efeitos/energiaCapturada.png", 80, 73, 11);

    //gerador
    game.load.image('gerador', 'assets/gerador/gerador.png');
    game.load.image('gerador-leftarrow', 'assets/gerador/leftarrow.png');
    game.load.image('gerador-rightarrow', 'assets/gerador/rightarrow.png');
    game.load.image('placareator', 'assets/gerador/placareator.png');
    game.load.image('placagerador', 'assets/gerador/placagerador.png');

    game.load.image('gerarBtn', 'assets/gerador/gerarBtn.png');
    game.load.spritesheet('receptorEnergia', 'assets/gerador/receptorEnergia.png', 101, 130, 5);
    game.load.spritesheet("energia", "assets/gerador/energia.png", 80, 73, 11);
    game.load.spritesheet("reator", "assets/gerador/reator.png", 266, 260, 8);
    game.load.spritesheet("reatorPainel", "assets/gerador/reatorPainel.png", 43, 41, 3);

    //portal
    game.load.image("portalStation", "assets/portal/portalStation.png");
    game.load.spritesheet("portalSinalizador", "assets/portal/portalSinalizador.png", 85, 82, 2);
    game.load.image("canoAlavanca", "assets/portal/canoAlavanca.png");

    //incubadora
    game.load.image('incubadora', 'assets/incubadora/incubadora.png');
    game.load.spritesheet('bacteriaIncubadora', 'assets/incubadora/bacteriaIncubadora.png', 60, 56, 6);
    game.load.spritesheet('plantaIncubadora', 'assets/incubadora/plantaIncubadora.png', 80, 80, 25);
    game.load.spritesheet('ovoIncubadora', 'assets/incubadora/ovoIncubadora.png', 80, 79, 30);

    //nave espacial
    game.load.spritesheet("naveEspacial", "assets/plataformas/naveEspacial.png", 210, 272, 6);
    game.load.spritesheet("naveEspacialPredator", "assets/plataformas/naveEspacialPredator.png", 466, 415, 3);

    //celulas
    game.load.image('celulaProcarionte', 'assets/celulas/celulaProcarionte.png');
    game.load.image('celulaAnimal', 'assets/celulas/celulaAnimal.png');
    game.load.image('celulaVegetal', 'assets/celulas/celulaVegetal.png');
    game.load.image('placeholder', 'assets/celulas/placeholder.png');

    //dialogs
    game.load.image('dialog1', 'assets/dialog/dialog1.png');
    game.load.image('dialogoCapture', 'assets/dialog/dialogoCapture.png');
    game.load.image('dialogoEncaixe', 'assets/dialog/dialogoEncaixe.png');
    game.load.image('dialogoEscolha', 'assets/dialog/dialogoEscolha.png');
    game.load.image('dialogoGere', 'assets/dialog/dialogoGere.png');
    game.load.image('dialogoNave', 'assets/dialog/dialogoNave.png');
    game.load.image('dialogoPortal', 'assets/dialog/dialogoPortal.png');
    game.load.image('dialogoReceptor', 'assets/dialog/dialogoReceptor.png');
    game.load.image('dialogoOrganela', 'assets/dialog/dialogoOrganela.png');

    //organelas
    game.load.image('organelaprocarionte0', 'assets/gerador/organelaprocarionte0.png');
    game.load.image('organelaprocarionte1', 'assets/gerador/organelaprocarionte1.png');
    game.load.image('organelaprocarionte2', 'assets/gerador/organelaprocarionte2.png');
    game.load.image('organelaprocarionte3', 'assets/gerador/organelaprocarionte3.png');
    game.load.image('organelaprocarionte4', 'assets/gerador/organelaprocarionte4.png');
    game.load.image('organelaprocarionte5', 'assets/gerador/organelaprocarionte5.png');
    game.load.image('organelaprocarionte6', 'assets/gerador/organelaprocarionte6.png');

    game.load.image('organelaanimal0', 'assets/gerador/organelaanimal0.png');
    game.load.image('organelaanimal1', 'assets/gerador/organelaanimal1.png');
    game.load.image('organelaanimal2', 'assets/gerador/organelaanimal2.png');
    game.load.image('organelaanimal3', 'assets/gerador/organelaanimal3.png');
    game.load.image('organelaanimal4', 'assets/gerador/organelaanimal4.png');
    game.load.image('organelaanimal5', 'assets/gerador/organelaanimal5.png');
    game.load.image('organelaanimal6', 'assets/gerador/organelaanimal6.png');
    game.load.image('organelaanimal7', 'assets/gerador/organelaanimal7.png');
    game.load.image('organelaanimal8', 'assets/gerador/organelaanimal8.png');
    game.load.image('organelaanimal9', 'assets/gerador/organelaanimal9.png');
    game.load.image('organelaanimal10', 'assets/gerador/organelaanimal10.png');

    game.load.image('organelavegetal0', 'assets/gerador/organelavegetal0.png');
    game.load.image('organelavegetal1', 'assets/gerador/organelavegetal1.png');
    game.load.image('organelavegetal2', 'assets/gerador/organelavegetal2.png');
    game.load.image('organelavegetal3', 'assets/gerador/organelavegetal3.png');
    game.load.image('organelavegetal4', 'assets/gerador/organelavegetal4.png');
    game.load.image('organelavegetal5', 'assets/gerador/organelavegetal5.png');
    game.load.image('organelavegetal6', 'assets/gerador/organelavegetal6.png');
    game.load.image('organelavegetal7', 'assets/gerador/organelavegetal7.png');
    game.load.image('organelavegetal8', 'assets/gerador/organelavegetal8.png');
    game.load.image('organelavegetal9', 'assets/gerador/organelavegetal9.png');

    //quadrinhos
    game.load.image('quadrinho1', 'assets/quadrinhos/quadrinho1.png');

    //blocos
    game.load.spritesheet('blocoorganelaprocarionte0', 'assets/gerador/blocoorganelaprocarionte0.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte1', 'assets/gerador/blocoorganelaprocarionte1.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte2', 'assets/gerador/blocoorganelaprocarionte2.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte3', 'assets/gerador/blocoorganelaprocarionte3.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte4', 'assets/gerador/blocoorganelaprocarionte4.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte5', 'assets/gerador/blocoorganelaprocarionte5.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaprocarionte6', 'assets/gerador/blocoorganelaprocarionte6.png', 91, 30, 3);

    game.load.spritesheet('blocoorganelaanimal0', 'assets/gerador/blocoorganelaanimal0.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal1', 'assets/gerador/blocoorganelaanimal1.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal2', 'assets/gerador/blocoorganelaanimal2.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal3', 'assets/gerador/blocoorganelaanimal3.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal4', 'assets/gerador/blocoorganelaanimal4.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal5', 'assets/gerador/blocoorganelaanimal5.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal6', 'assets/gerador/blocoorganelaanimal6.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal7', 'assets/gerador/blocoorganelaanimal7.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal8', 'assets/gerador/blocoorganelaanimal8.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal9', 'assets/gerador/blocoorganelaanimal9.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelaanimal10', 'assets/gerador/blocoorganelaanimal10.png', 91, 30, 3);

    game.load.spritesheet('blocoorganelavegetal0', 'assets/gerador/blocoorganelavegetal0.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal1', 'assets/gerador/blocoorganelavegetal1.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal2', 'assets/gerador/blocoorganelavegetal2.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal3', 'assets/gerador/blocoorganelavegetal3.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal4', 'assets/gerador/blocoorganelavegetal4.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal5', 'assets/gerador/blocoorganelavegetal5.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal6', 'assets/gerador/blocoorganelavegetal6.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal7', 'assets/gerador/blocoorganelavegetal7.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal8', 'assets/gerador/blocoorganelavegetal8.png', 91, 30, 3);
    game.load.spritesheet('blocoorganelavegetal9', 'assets/gerador/blocoorganelavegetal9.png', 91, 30, 3);
}


function criarPreload() {
    game.state.start('startState');
}