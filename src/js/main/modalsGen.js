var reg = {};

function createModals() {

    reg.modal.createModal({
        type: "sobreModal",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "sobreModal",
                offsetY: 0,
                contentScale: 1.2,
            },
            {
                type: "image",
                content: "btnClose",
                offsetY: -225,
                offsetX: 312,
                contentScale: 1.8,
                callback: function () {
                    reg.modal.hideModal("sobreModal");
                    sobreBg.alpha = 1;
                }
            }
        ]
    });
    
    reg.modal.createModal({
        type: "quadrinhosModal",
        includeBackground: true,
        modalCloseOnInput: false,
        fixedToCamera: true,
        itemsArr: [{
                type: "image",
                content: "quadrinho1",
                offsetY: 0,
            },
            {
                type: "image",
                content: "prosseguirBtn",
                offsetY: 265,
                offsetX: 292,
                contentScale: 0.8,
                callback: function () {
                    reg.modal.hideModal("quadrinhosModal");
                    game.paused = false;
                }
            }
        ]
    });

    reg.modal.createModal({
        type: "comoJogarModal",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "comoJogarModal",
                offsetY: 0,
                contentScale: 1.2,
            },
            {
                type: "sprite",
                content: "btnClose",
                offsetY: -230,
                offsetX: 380,
                contentScale: 2,
                callback: function () {
                    reg.modal.hideModal("comoJogarModal");
                }
            },
            {
                type: "sprite",
                content: "btnControles",
                offsetY: -152,
                offsetX: -210,
                contentScale: 0.8,
                callback: function () {
                    reg.modal.updateModalValue(0, 'comoJogarModal', 7);
                    reg.modal.updateModalValue(1, 'comoJogarModal', 4);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 5);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 6);
                }
            },
            {
                type: "sprite",
                content: "btnEtapa1",
                offsetY: -152,
                offsetX: 0,
                contentScale: 0.8,
                callback: function () {
                    reg.modal.updateModalValue(1, 'comoJogarModal', 7);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 4);
                    reg.modal.updateModalValue(1, 'comoJogarModal', 5);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 6);
                }
            },
            {
                type: "sprite",
                content: "btnEtapa2",
                offsetY: -152,
                offsetX: 210,
                contentScale: 0.8,
                callback: function () {
                    reg.modal.updateModalValue(2, 'comoJogarModal', 7);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 4);
                    reg.modal.updateModalValue(0, 'comoJogarModal', 5);
                    reg.modal.updateModalValue(1, 'comoJogarModal', 6);
                }
            },
            {
                type: "sprite",
                content: "instrucoesModalConteudos",
                frame: 0,
                offsetY: 65,
                offsetX: 0,
                contentScale: 1.2,
                callback: function () {
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "levelSuccess",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "text",
                content: "0",
                fontSize: 40,
                fontFamily: "Rajdhani",
                color: "0xd9d9d9",
                offsetY: -87,
                offsetX: 100,
            },
            {
                type: "text",
                content: "0",
                fontSize: 40,
                fontFamily: "Rajdhani",
                color: "0xd9d9d9",
                offsetY: -7,
                offsetX: 100,
            },
            {
                type: "image",
                content: "btnRestart",
                offsetY: 160,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + (levelNumber));
                }
            },
            {
                type: "image",
                content: "btnLeft",
                offsetY: 145,
                offsetX: -80,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
            {
                type: "sprite",
                content: "starsSpritesheet",
                frame: 2,
                offsetY: 65,
                offsetX: 0,
            },
            {
                type: "image",
                content: "btnRight",
                offsetY: 145,
                offsetX: 80,
                callback: function () {
                    game.paused = false;
                    if (levelNumber != 3) {
                        game.state.start("gameState" + (levelNumber + 1));
                    } else {
                        game.state.start("levelState");
                    }
                }
            },
            {
                type: "text",
                content: "0:0:0",
                fontSize: 27,
                fontFamily: "Rajdhani",
                color: "0x7ed2f6",
                stroke: "7ed2f6",
                strokeThickness: 1,
                offsetY: -142,
                offsetX: 53,
            },
        ]
    });

    reg.modal.createModal({
        type: "pausedModal",
        includeBackground: false,
        modalCloseOnInput: true,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "pausedModal",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "text",
                content: "INSTRUÇÕES",
                fontSize: 22,
                fontFamily: "Rajdhani",
                color: "0x7ed2f6",
                stroke: "0x7ed2f6",
                strokeThickness: 3,
                offsetY: -90,
                offsetX: 0,
                callback: function () {
                   showComoJogarModal();
                }
            },
            {
                type: "text",
                content: "REINICIAR",
                fontSize: 22,
                fontFamily: "Rajdhani",
                color: "0x7ed2f6",
                stroke: "0x7ed2f6",
                strokeThickness: 3,
                offsetY: -2,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + levelNumber);
                }
            },
            {
                type: "text",
                content: "VOLTAR PARA NIVÉIS",
                fontSize: 22,
                fontFamily: "Rajdhani",
                color: "0x7ed2f6",
                stroke: "0x7ed2f6",
                strokeThickness: 3,
                offsetX: 5,
                offsetY: 85,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
            {
                type: "image",
                content: "btnClose",
                offsetY: -155,
                offsetX: 152,
                contentScale: 1.3,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("pausedModal");
                }
            }
        ]
    });


    reg.modal.createModal({
        type: "configModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "configModal",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "image",
                content: "enviarscifiBtn",
                offsetY: 200,
                offsetX: 0,
                callback: function () {
                    reg.modal.hideModal("configModal");
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: -120,
                offsetX: 102,
                frame: 0,
                callback: function (e) {
                    if (config.libras) {
                        e.frame = 0;
                        config.libras = false;
                    } else {
                        e.frame = 1;
                        config.libras = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: -38,
                offsetX: 102,
                callback: function (e) {
                    if (config.locucao) {
                        e.frame = 0;
                        config.locucao = false;
                    } else {
                        e.frame = 1;
                        config.locucao = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: 42,
                offsetX: 102,
                callback: function (e) {
                    if (config.sounds) {
                        e.frame = 0;
                        config.sounds = false;
                    } else {
                        e.frame = 1;
                        config.sounds = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: 125,
                offsetX: 102,
                callback: function (e) {
                    if (config.musica) {
                        e.frame = 0;
                        config.musica = false;
                    } else {
                        e.frame = 1;
                        config.musica = true;
                    }
                }
            },

        ]
    });

    reg.modal.createModal({
        type: "gameOverModal",
        includeBackground: false,
        modalCloseOnInput: false,
        itemsArr: [{
                type: "image",
                content: "levelFailed",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "text",
                content: "0",
                fontSize: 40,
                fontFamily: "Rajdhani",
                color: "0xd9d9d9",
                offsetY: -87,
                offsetX: 100,
            },
            {
                type: "text",
                content: "0",
                fontSize: 40,
                fontFamily: "Rajdhani",
                color: "0xd9d9d9",
                offsetY: -7,
                offsetX: 100,
            },
            {
                type: "image",
                content: "btnRestart",
                offsetY: 100,
                contentScale: 1.3,
                offsetX: 60,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + (levelNumber));
                }
            },
            {
                type: "image",
                content: "btnLeft",
                offsetY: 95,
                contentScale: 1.3,
                offsetX: -30,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
        ]
    });


}


function showGameOverModal() {
    reg.modal.showModal("gameOverModal");
}


function showGameSucessModal() {
    reg.modal.showModal("gameSucessModal");
}


function showConfigModal() {
    reg.modal.showModal("configModal");

    //setando o valor dos switchs

    //libras
    var f;
    if (config.libras) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 2);

    //locucao
    if (config.locucao) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 3);

    //efeitos sonoros
    if (config.sounds) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 4);

    //efeitos musica
    if (config.musica) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 5);
}

function showPausedModal() {
    game.paused = true;
    reg.modal.showModal("pausedModal");
}

function showSobreModal() {
    reg.modal.showModal("sobreModal");
    sobreBg.alpha = 0;
}

function showQuadrinho(id) {
    game.paused = true;
    reg.modal.showModal("quadrinhosModal");
}

function showComoJogarModal() {
    reg.modal.showModal("comoJogarModal");
    reg.modal.updateModalValue(0, 'comoJogarModal', 7);
    reg.modal.updateModalValue(1, 'comoJogarModal', 4);
    reg.modal.updateModalValue(0, 'comoJogarModal', 5);
    reg.modal.updateModalValue(0, 'comoJogarModal', 6);
}

function countDown(fn, endFn) {
    var endFn = endFn || function () {};

    var _timer = game.time.create(false);
    _timer.start();
    _timer.onComplete.add(endFn);
    _timer.repeat(Phaser.Timer.SECOND, 5, fn, this);
    window.console.log("adding timer", game);
}

function updateCountdown() {
    var item = reg.modal.getModalItem("modal6", 3);
    var index = Number(item.text);

    window.console.log("index: ", index, item);

    item.setText(String(index - 1));
    item.update();
    item.x = game.width / 2 - (item.width / 2);
    item.y = game.height / 2 - (item.height / 2);
}