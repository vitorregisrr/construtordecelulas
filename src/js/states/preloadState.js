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

    //audio
    game.load.audio('attack', ['assets/audios/attack.ogg', 'assets/audios/attack.m4a']);
    game.load.audio('hurt', ['assets/audios/hurt.ogg', 'assets/audios/hurt.m4a']);
    game.load.audio('right', ['assets/audios/right.ogg', 'assets/audios/right.m4a']);
    game.load.audio('catch', ['assets/audios/catch.ogg', 'assets/audios/catch.m4a']);
    game.load.audio('ambiente', ['assets/audios/ambiente.ogg', 'assets/audios/ambiente.m4a']);
    game.load.audio('predatorDie', ['assets/audios/predatorDie.ogg', 'assets/audios/predatorDie.m4a']);
    game.load.audio('predatorVoice', ['assets/audios/predatorVoice.ogg', 'assets/audios/predatorVoice.m4a']);
    game.load.audio('predatorAttacked', ['assets/audios/predatorAttacked.ogg', 'assets/audios/predatorAttacked.m4a']);

    //audios locucao
    game.load.audio('procariontecapsula0', ['assets/audios/acessibilidade/procariontecapsula0.ogg', 'assets/audios/acessibilidade/procariontecapsula0.m4a']);
    game.load.audio('procariontecapsula1', ['assets/audios/acessibilidade/procariontecapsula1.ogg', 'assets/audios/acessibilidade/procariontecapsula1.m4a']);

    game.load.audio('procariontecitoplasma0', ['assets/audios/acessibilidade/procariontecitoplasma0.ogg', 'assets/audios/acessibilidade/procariontecitoplasma0.m4a']);
    game.load.audio('procariontecitoplasma1', ['assets/audios/acessibilidade/procariontecitoplasma1.ogg', 'assets/audios/acessibilidade/procariontecitoplasma1.m4a']);

    game.load.audio('procarionteflagelo0', ['assets/audios/acessibilidade/procarionteflagelo0.ogg', 'assets/audios/acessibilidade/procarionteflagelo0.m4a']);
    game.load.audio('procarionteflagelo1', ['assets/audios/acessibilidade/procarionteflagelo1.ogg', 'assets/audios/acessibilidade/procarionteflagelo1.m4a']);

    game.load.audio('procariontemembranaplasmatica0', ['assets/audios/acessibilidade/procariontemembranaplasmatica0.ogg', 'assets/audios/acessibilidade/procariontemembranaplasmatica0.m4a']);
    game.load.audio('procariontemembranaplasmatica1', ['assets/audios/acessibilidade/procariontemembranaplasmatica1.ogg', 'assets/audios/acessibilidade/procariontemembranaplasmatica1.m4a']);

    game.load.audio('procariontenucleoide0', ['assets/audios/acessibilidade/procariontenucleoide0.ogg', 'assets/audios/acessibilidade/procariontenucleoide0.m4a']);
    game.load.audio('procariontenucleoide1', ['assets/audios/acessibilidade/procariontenucleoide1.ogg', 'assets/audios/acessibilidade/procariontenucleoide1.m4a']);

    game.load.audio('procarionteparedecelular0', ['assets/audios/acessibilidade/procarionteparedecelular0.ogg', 'assets/audios/acessibilidade/procarionteparedecelular0.m4a']);
    game.load.audio('procarionteparedecelular1', ['assets/audios/acessibilidade/procarionteparedecelular1.ogg', 'assets/audios/acessibilidade/procarionteparedecelular1.m4a']);

    game.load.audio('procarionteribossomo0', ['assets/audios/acessibilidade/procarionteribossomo0.ogg', 'assets/audios/acessibilidade/procarionteribossomo0.m4a']);
    game.load.audio('procarionteribossomo1', ['assets/audios/acessibilidade/procarionteribossomo1.ogg', 'assets/audios/acessibilidade/procarionteribossomo1.m4a']);

    //posicoes
    game.load.audio('posicao1', ['assets/audios/acessibilidade/posicao1.ogg', 'assets/audios/acessibilidade/posicao1.m4a']);
    game.load.audio('posicao2', ['assets/audios/acessibilidade/posicao2.ogg', 'assets/audios/acessibilidade/posicao2.m4a']);
    game.load.audio('posicao3', ['assets/audios/acessibilidade/posicao3.ogg', 'assets/audios/acessibilidade/posicao3.m4a']);
    game.load.audio('posicao4', ['assets/audios/acessibilidade/posicao4.ogg', 'assets/audios/acessibilidade/posicao4.m4a']);
    game.load.audio('posicao5', ['assets/audios/acessibilidade/posicao5.ogg', 'assets/audios/acessibilidade/posicao5.m4a']);
    game.load.audio('posicao6', ['assets/audios/acessibilidade/posicao6.ogg', 'assets/audios/acessibilidade/posicao6.m4a']);
    game.load.audio('posicao7', ['assets/audios/acessibilidade/posicao7.ogg', 'assets/audios/acessibilidade/posicao7.m4a']);
    game.load.audio('posicao8', ['assets/audios/acessibilidade/posicao8.ogg', 'assets/audios/acessibilidade/posicao8.m4a']);
    game.load.audio('posicao9', ['assets/audios/acessibilidade/posicao9.ogg', 'assets/audios/acessibilidade/posicao9.m4a']);
    game.load.audio('posicao10', ['assets/audios/acessibilidade/posicao10.ogg', 'assets/audios/acessibilidade/posicao10.m4a']);
    game.load.audio('posicao11', ['assets/audios/acessibilidade/posicao11.ogg', 'assets/audios/acessibilidade/posicao11.m4a']);
    game.load.audio('vazio', ['assets/audios/acessibilidade/vazio.ogg', 'assets/audios/acessibilidade/vazio.m4a']);

    game.load.audio('certo', ['assets/audios/acessibilidade/certo.ogg', 'assets/audios/acessibilidade/certo.m4a']);
    game.load.audio('errado', ['assets/audios/acessibilidade/errado.ogg', 'assets/audios/acessibilidade/errado.m4a']);

    //audio nome organelas
    game.load.audio('capsula', ['assets/audios/acessibilidade/capsula.ogg', 'assets/audios/acessibilidade/capsula.m4a']);
    game.load.audio('membranaplasmatica', ['assets/audios/acessibilidade/membranaplasmatica.ogg', 'assets/audios/acessibilidade/membranaplasmatica.m4a']);
    game.load.audio('citoplasma', ['assets/audios/acessibilidade/citoplasma.ogg', 'assets/audios/acessibilidade/citoplasma.m4a']);
    game.load.audio('ribossomos', ['assets/audios/acessibilidade/ribossomos.ogg', 'assets/audios/acessibilidade/ribossomos.m4a']);
    game.load.audio('nucleoide', ['assets/audios/acessibilidade/nucleoide.ogg', 'assets/audios/acessibilidade/nucleoide.m4a']);
    game.load.audio('flagelo', ['assets/audios/acessibilidade/flagelo.ogg', 'assets/audios/acessibilidade/flagelo.m4a']);
    game.load.audio('citoesqueleto', ['assets/audios/acessibilidade/citoesqueleto.ogg', 'assets/audios/acessibilidade/citoesqueleto.m4a']);
    game.load.audio('nucleo', ['assets/audios/acessibilidade/nucleo.ogg', 'assets/audios/acessibilidade/nucleo.m4a']);
    game.load.audio('lisossomo', ['assets/audios/acessibilidade/lisossomo.ogg', 'assets/audios/acessibilidade/lisossomo.m4a']);
    game.load.audio('reticuloendoplasmatico', ['assets/audios/acessibilidade/reticuloendoplasmatico.ogg', 'assets/audios/acessibilidade/reticuloendoplasmatico.m4a']);
    game.load.audio('complexogolgiense', ['assets/audios/acessibilidade/complexogolgiense.ogg', 'assets/audios/acessibilidade/complexogolgiense.m4a']);
    game.load.audio('peroxissomo', ['assets/audios/acessibilidade/peroxissomo.ogg', 'assets/audios/acessibilidade/peroxissomo.m4a']);
    game.load.audio('centriolo', ['assets/audios/acessibilidade/centriolo.ogg', 'assets/audios/acessibilidade/centriolo.m4a']);
    game.load.audio('mitocondria', ['assets/audios/acessibilidade/mitocondria.ogg', 'assets/audios/acessibilidade/mitocondria.m4a']);
    game.load.audio('cloropasto', ['assets/audios/acessibilidade/cloropasto.ogg', 'assets/audios/acessibilidade/cloropasto.m4a']);
    game.load.audio('paredecelular', ['assets/audios/acessibilidade/paredecelular.ogg', 'assets/audios/acessibilidade/paredecelular.m4a']);
    game.load.audio('vacuolo', ['assets/audios/acessibilidade/vacuolo.ogg', 'assets/audios/acessibilidade/vacuolo.m4a']);
    game.load.audio('receptor', ['assets/audios/receptor.ogg', 'assets/audios/receptor.m4a']);
    game.load.audio('shock', ['assets/audios/shock.ogg', 'assets/audios/shock.m4a']);
    game.load.audio('reator', ['assets/audios/reator.ogg', 'assets/audios/reator.m4a']);

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