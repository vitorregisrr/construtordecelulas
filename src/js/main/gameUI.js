var textHp, textCerto, textErrado, stateProgressBar, scoreMutacoes, topStatistics, pauseBtn, hearBtn, soundLoop;
var timeArrayProvisorio = [
    [00],
    [00],
    [00]
];
var timeLoop, joystick, moveLeft, moveUp, moveDown, moveRight, attackBtn;

function gameUI() {
    topStatistics = game.add.sprite(centerX, 0, 'topStatistics');
    topStatistics.anchor.x = 0.5;
    topStatistics.fixedToCamera = true;
    topStatistics.scale.setTo(1.1, 1.1);

    textTime = game.add.text(15, 76, '00:00:00');
    textTime.anchor.set(0.5);
    textTime.align = 'center';
    textTime.font = 'Rajdhani';
    textTime.fontSize = 17;
    textTime.stroke = '#7ed2f6';
    textTime.strokeThickness = 1;
    textTime.fill = '#7ed2f6';
    topStatistics.addChild(textTime);

    timeLoop = game.time.events.loop(Phaser.Timer.SECOND * 1, updateTime, this);

    stateProgressBar = game.add.sprite(-54, 65, 'stateProgressBar');
    stateProgressBar.anchor.setTo(0, 1);
    stateProgressBar.scale.setTo(0, 1);
    stateProgressBar.alpha = 0;
    topStatistics.addChild(stateProgressBar);

    pauseBtn = game.add.button(-185, 16, 'btnPause');
    pauseBtn.inputEnabled = true;
    pauseBtn.events.onInputDown.add(showPausedModal, this);
    topStatistics.addChild(pauseBtn);

    hearBtn = game.add.button(137, 16, 'hearBtn', function () {
        organelas.locucao();
    });
    hearBtn.inputEnabled = true;
    topStatistics.addChild(hearBtn);


    textHp = game.add.text(-70, 33, alien.element.hp, {
        font: "22px Rajdhani",
        fill: "#663300",
        align: "center"
    });
    textHp.anchor.set(0.5);
    textHp.align = 'center';
    textHp.font = 'Rajdhani';
    textHp.fontSize = 19;
    textHp.stroke = '#7ed2f6';
    textHp.strokeThickness = 1;
    textHp.fill = '#7ed2f6';
    topStatistics.addChild(textHp);

    textCerto = game.add.text(15, 33, organelas.acertos, {
        font: "22px Rajdhani",
        fill: "#663300",
        align: "center"
    });
    textCerto.anchor.set(0.5);
    textCerto.align = 'center';
    textCerto.font = 'Rajdhani';
    textCerto.fontSize = 19;
    textCerto.stroke = '#7ed2f6';
    textCerto.strokeThickness = 1;
    textCerto.fill = '#7ed2f6';
    topStatistics.addChild(textCerto);

    textErrado = game.add.text(100, 33, organelas.erros, {
        font: "22px Rajdhani",
        fill: "#663300",
        align: "center"
    });
    textErrado.anchor.set(0.5);
    textErrado.align = 'center';
    textErrado.font = 'Rajdhani';
    textErrado.fontSize = 19;
    textErrado.stroke = '#7ed2f6';
    textErrado.strokeThickness = 1;
    textErrado.fill = '#7ed2f6';
    topStatistics.addChild(textErrado);
    
    joystick = game.add.sprite(screenWidth - 260, 575, '');
    joystick.fixedToCamera = true;
    joystick.visible = false;
    joystick.scale.setTo(1.6,1.6);
    joystick.alpha = 0.7;

    moveLeftBtn = game.add.button(-70, 0, 'moveLeft');
    moveLeftBtn.onInputDown.add(function() { moveLeftBtn.isDown = true;}, this);
    moveLeftBtn.onInputUp.add(function() { moveLeftBtn.isDown = false;}, this);
    joystick.addChild(moveLeftBtn);

    moveRightBtn = game.add.button(70, 0, 'moveRight');
    moveRightBtn.onInputDown.add(function() { moveRightBtn.isDown = true;}, this);
    moveRightBtn.onInputUp.add(function() { moveRightBtn.isDown = false;}, this);
    joystick.addChild(moveRightBtn);

    moveUpBtn = game.add.button(0, -70, 'moveUp');
    moveUpBtn.onInputDown.add(function() { moveUpBtn.isDown = true;}, this);
    moveUpBtn.onInputUp.add(function() { moveUpBtn.isDown = false;}, this);
    joystick.addChild(moveUpBtn);

    moveDownBtn = game.add.button(0, 0, 'moveDown');
    moveDownBtn.onInputDown.add(function() { moveDownBtn.isDown = true;}, this);
    moveDownBtn.onInputUp.add(function() { moveDownBtn.isDown = false;}, this);
    joystick.addChild(moveDownBtn);

    attackBtn = game.add.button(-centerX + 30, -40, 'btnAttack', function(){ alien.attack();}, this);
    attackBtn.onInputDown.add(function() { attackBtn.isDown = true;}, this);
    attackBtn.onInputUp.add(function() { attackBtn.isDown = false;}, this);
    attackBtn.scale.setTo(1.3,1.3);
    joystick.addChild(attackBtn);
    
    sounds.play('ambiente');
    soundLoop = setInterval(function () {
        sounds.play('ambiente');
    }, 40000);

    if (mobileAndTabletcheck()) {
        joystick.visible = true;
    }

    joystick.bringToTop();
}

function updateGameUi(){
    
}

function gameUiBringtoTop() {
    topStatistics.bringToTop();
    textHp.bringToTop();
    textErrado.bringToTop();
    textCerto.bringToTop();
    stateProgressBar.bringToTop();
    pauseBtn.bringToTop();
    hearBtn.bringToTop();
    joystick.bringToTop();
}

function updateTime() {
    timeArrayProvisorio[2] = parseInt(timeArrayProvisorio[2]) + 1;
    if (timeArrayProvisorio[2] == 60) {
        timeArrayProvisorio[2] = 0;
        timeArrayProvisorio[1] = parseInt(timeArrayProvisorio[1]) + 1;
    }
    if (timeArrayProvisorio[1] == 60) {
        timeArrayProvisorio[1] = 0;
        timeArrayProvisorio[0] = parseInt(timeArrayProvisorio[0]) + 1;
    }
    textTime.setText(timeArrayProvisorio[0] + ':' + timeArrayProvisorio[1] + ':' + timeArrayProvisorio[2]);
}