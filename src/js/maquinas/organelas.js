var organelas = {

    presets: function () {
        this.encaixados = new Array();
        this.numeroEncaixados = 0;
        this.gerados = null;
        this.last = null;
        this.gerados = game.add.group();
        this.erros = 0;
        this.acertos = 0;
        this.checked = false;
        this.escutando = false;
    },

    gen: function (id) {
        var x = 1272;
        var y = 987 + 78;

        if (this.last && !this.last.encaixado) {
            this.last.kill();
            alien.grabing = false;
        }

        this.last = game.add.button(x, y, 'blocoorganela' + celulaAtual.nome + id, organelas.grab, this);
        this.efeitoCapturado = game.add.sprite(0, 0, 'organelaCapturada');
        this.efeitoCapturado.animations.add('fly');
        this.efeitoCapturado.animations.play('fly', 7, true);
        this.efeitoCapturado.anchor.setTo(0.5, 0.5);
        this.efeitoCapturado.scale.setTo(1.2, 1.2);
        this.efeitoCapturado.alpha = 0;
        this.last.addChild(this.efeitoCapturado);
        this.last.alpha = 0;
        game.add.tween(this.last).to({
            alpha: 1
        }, 800, Phaser.Easing.Linear.None, true, 0);


        gerador.effect.bringToTop();
        gerador.body.bringToTop();
        this.last.anchor.setTo(0.5, 0.5);
        this.gerados.add(this.last);
        this.last.id = id;

        gerador.body.animations.play('open');
        this.last.bringToTop();
        this.efeitoCapturado.bringToTop();
        alien.element.bringToTop();
        gameUiBringtoTop();

        //dialogo
        game.add.tween(gerador.dialogoOrganela).to({
            alpha: 0.7,
        }, 600, Phaser.Easing.Linear.None, true);

        //dialogo
        game.add.tween(gerador.dialogo).to({
            alpha: 0,
        }, 600, Phaser.Easing.Linear.None, true);
    },

    grab: function (e) {
        if ((!alien.montado && Math.abs(alien.element.x - e.x) < 300 && Math.abs(alien.element.y - e.y) < 300 && !e.encaixado) || (alien.montado && Math.abs(naveEspacial.body.x - e.x) < 300 && Math.abs(naveEspacial.body.y - e.y) < 300 && !e.encaixado)) {
            //condição se não estiver montado
            alien.animating = true;
            sounds.play('catch');

            alien.element.animations.play('grabing', 12, false);
            game.time.events.add(900, function () {
                alien.animating = false;
            }, this).autoDestroy = true;


            game.add.tween(organelas.efeitoCapturado).to({
                alpha: 1
            }, 200, Phaser.Easing.Linear.None, true);


            game.add.tween(e).to({
                alpha: 0
            }, 900, Phaser.Easing.Linear.None, true);


            game.time.events.add(800, function () {
                var e = organelas.last;
                e.x = 0;
                e.y = -65;

                organelas.grabing = e;
                alien.element.addChild(e);
                alien.grabing = 'organela' || true;

                game.add.tween(e).to({
                    alpha: 1
                }, 900, Phaser.Easing.Linear.None, true);

                //dialogo
                game.add.tween(gerador.dialogoOrganela).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(reator.dialogoCapture).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(naveEspacial.dialogo).to({
                    alpha: 0.7
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(celulaAtual.dialogo).to({
                    alpha: 0.7
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(gerador.dialogoSuba).to({
                    alpha: 0.7
                }, 600, Phaser.Easing.Linear.None, true);

            }, this).autoDestroy = true;
        } else {
            console.log('mt longe')
        }

        alien.element.bringToTop();
        naveEspacial.body.bringToTop();
        naveEspacial.fantasia.bringToTop();
        gameUiBringtoTop();
    },

    drop: function () {
        var pointer = game.input.activePointer;
        e = this.grabing;
        e.scale.x = 1;
        if (checkNaveEspacialOverlap() && ((Math.abs((pointer.x + game.camera.x) - alien.element.x) < 300 && Math.abs((pointer.y + game.camera.y) - alien.element.y) < 300) || (alien.montado && (Math.abs((pointer.x + game.camera.x) - naveEspacial.body.x) < 600 && Math.abs((pointer.y + game.camera.y) - naveEspacial.body.y) < 600)))) {
            sounds.play('catch');
            alien.animating = true;
            alien.element.animations.play('grabing', 12, false);
            game.time.events.add(900, function () {
                alien.animating = false;
            }, this).autoDestroy = true;

            e.alpha = 0;
            organelas.grabing.x = pointer.x + game.camera.x;
            organelas.grabing.y = pointer.y + game.camera.y;
            game.add.existing(e);
            alien.grabing = false;

            game.time.events.add(700, function () {
                game.add.tween(e).to({
                    alpha: 1
                }, 900, Phaser.Easing.Linear.None, true);

                game.add.tween(organelas.efeitoCapturado).to({
                    alpha: 0
                }, 400, Phaser.Easing.Linear.None, true);

            }, this).autoDestroy = true;

            var overlap = checkPlaceholderOverlap();
            if (overlap && !overlap.checked) {
                this.grabing = false;
                this.last.encaixado = true;
                overlap.id = e.id;
                overlap.checked = true;
                this.encaixados[overlap.posicao] = e; //posiciona na posicao correta em um array para depois ser corrigido
                this.last = false;
                this.grabing = false;
                this.numeroEncaixados++;
                e.x = overlap.x;
                e.y = overlap.y;
                game.add.tween(stateProgressBar.scale).to({
                    x: organelas.numeroEncaixados / numeroOrganelas,
                    y: 1
                }, 600, Phaser.Easing.Linear.None, true);
                gameUiBringtoTop();

                //dialogo
                game.add.tween(reator.dialogoGere).to({
                    alpha: 0.7
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(celulaAtual.dialogo).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(naveEspacial.dialogo).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);

                game.add.tween(gerador.dialogoSuba).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);


            }
            if (celulaAtual.numeroOrganelas == organelas.numeroEncaixados) {
                celulaAtual.check();
            }
        }
        alien.element.bringToTop();
        naveEspacial.body.bringToTop();
        naveEspacial.fantasia.bringToTop();
        gameUiBringtoTop();
    },

    locucao: function () {
        if (!organelas.escutando && config.locucao) {
            if (!organelas.checked) {
                var time = 300;
                organelas.escutando = true;

                celulaAtual.placeholders.forEach(function (box) {
                    if (box.checked) {
                        (function () {
                            setTimeout(function () {
                                locucao.call('posicao' + (box.posicao + 1));
                                console.log('checked: ' + (box.posicao + 1));
                            }, time, box);

                            setTimeout(function () {
                                organelas.callByIndex(box.id);
                            }, time + 1200, box);

                        })(box);
                    } else {
                        (function () {
                            setTimeout(function () {
                                locucao.call('posicao' + (box.posicao + 1));
                                console.log('vazio: ' + (box.posicao + 1));
                            }, time, box);

                            setTimeout(function () {
                                locucao.call('vazio');
                            }, time + 1200, box);

                        })(box);
                    }
                    time += 3000;
                    setTimeout(function () {
                        organelas.escutando = false;
                    }, 3000 * celulaAtual.numeroOrganelas);
                });
            } else {
                var time = 300;
                organelas.escutando = true;
                var x = 0;
                celulaAtual.placeholders.forEach(function (box) {
                    (function () {
                        setTimeout(function () {
                            locucao.call('posicao' + (box.posicao + 1));
                        }, time, box);

                        setTimeout(function () {
                            organelas.callByIndex(box.id);
                        }, time + 1200, box);

                        if (box.id == celulaAtual.respostas[x]) {
                            setTimeout(function () {
                                locucao.call('certo');
                            }, time + 2200);
                        } else {
                            setTimeout(function () {
                                locucao.call('errado');
                            }, time + 2200);
                        }
                        time += 3000;
                        setTimeout(function () {
                            organelas.escutando = false;
                        }, 3000 * celulaAtual.numeroOrganelas);
                    })(box);
                    x++;
                });
            }
        }
    },

    callByIndex: function (index) {
        //play do nome da celula
        if (celulaAtual.nome == 'procarionte') {
            switch (index) {
                case 0:
                    locucao.call('capsula');
                    break;

                case 1:
                    locucao.call('paredecelular');
                    break;

                case 2:
                    locucao.call('membranaplasmatica');
                    break;

                case 3:
                    locucao.call('citoplasma');
                    break;

                case 4:
                    locucao.call('ribossomos');
                    break;

                case 5:
                    locucao.call('nucleoide');
                    break;

                case 6:
                    locucao.call('flagelo');
                    break;
            }

        } else if (celulaAtual.nome == 'animal') {
            switch (index) {
                case 0:
                    locucao.call('citoesqueleto');
                    break;

                case 1:
                    locucao.call('ribossomos');
                    break;

                case 2:
                    locucao.call('lisossomo');
                    break;

                case 3:
                    locucao.call('nucleo');
                    break;

                case 4:
                    locucao.call('reticuloendoplasmatico');
                    break;

                case 5:
                    locucao.call('complexogolgiense');
                    break;

                case 6:
                    locucao.call('membranaplasmatica');
                    break;

                case 7:
                    locucao.call('peroxissomo');
                    break;

                case 8:
                    locucao.call('centriolo');
                    break;

                case 9:
                    locucao.call('mitocondria');
                    break;

                case 10:
                    locucao.call('citoplasma');
                    break;
            }

        } else if (celulaAtual.nome == 'vegetal') {

            switch (index) {
                case 0:
                    locucao.call('nucleo');
                    break;

                case 1:
                    locucao.call('mitocondria');
                    break;

                case 2:
                    locucao.call('cloropasto');
                    break;

                case 3:
                    locucao.call('paredecelular');
                    break;

                case 4:
                    locucao.call('complexogolgiense');
                    break;

                case 5:
                    locucao.call('citoesqueleto');
                    break;

                case 6:
                    locucao.call('peroxissomo');
                    break;

                case 7:
                    locucao.call('ribossomos');
                    break;

                case 8:
                    locucao.call('vacuolo');
                    break;

                case 9:
                    locucao.call('reticuloendoplasmatico');
                    break;
            }
        }
    }
}


function checkPlaceholderOverlap() {

    var organela = organelas.last;
    var overlapControl;
    var placeOverlaped;

    var x = false;
    celulaAtual.placeholders.forEach(function (e) {
        if (!x) {
            if (Phaser.Rectangle.intersects(organela, e)) {
                overlapControl = true;
                placeOverlaped = e;
                x = true;
            } else {
                overlapControl = false;
                x = false;
            }
        }
    });

    if (overlapControl) {
        return placeOverlaped;
    } else {
        return false;
    }

}