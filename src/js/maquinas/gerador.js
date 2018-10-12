var gerador = {
    gen: function () {

        this.effect = game.add.sprite(1009+258, 987 + 76, 'efeitoraio');
        this.effect.scale.setTo(0.7, 0.7);
        this.effect.animations.add('gen');
        this.effect.frame = 12;
        this.effect.anchor.setTo(0.5, 0.5);
        this.effect.angle = 90;
        //nao da pra usar o add child por que tem que ficar atrás do gerador, por isso a soma das posicoex x e y

        this.body = game.add.sprite(1000, 987, 'gerador');
        this.body.animations.add('open', [0, 1, 2, 3, 4], 9);
        this.body.animations.add('close', [4, 3, 2, 1, 0], 8);

        this.placa = game.add.sprite(0, -80, 'placagerador');
        this.body.addChild(this.placa);

        reator.gen();
        receptor.gen();
        this.body.addChild(receptor.body);

        this.gerarBtn = game.add.button(1238, 525 + 392, 'gerarBtn', function(){
            if(Math.abs( (gerador.gerarBtn.x + 100) - alien.element.x) < 420 && Math.abs((gerador.gerarBtn.y + 100) - alien.element.y) < 150){
                gerarOrganela();
            }
        }, this);
        if (mobileAndTabletcheck()) {
            this.gerarBtn.scale.setTo(1.8,1.8);
            this.gerarBtn.x = 1220;
            this.gerarBtn.y = 525 + 370;
          }

        var celula = celulaAtual.nome;
        if (celula == 'procarionte') {
            var organela0 = game.add.image(0, 0, 'organela' + celula + '0');
            var organela1 = game.add.image(0, 0, 'organela' + celula + '1');
            var organela2 = game.add.image(0, 0, 'organela' + celula + '2');
            var organela3 = game.add.image(0, 0, 'organela' + celula + '3');
            var organela4 = game.add.image(0, 0, 'organela' + celula + '4');
            var organela5 = game.add.image(0, 0, 'organela' + celula + '5');
            var organela6 = game.add.image(0, 0, 'organela' + celula + '6');
            this.slider = slider.createSlider({
                customSliderBG: false,
                mode: "horizontal",
                sliderBGAlpha: 0.8,
                customHandleNext: "gerador-rightarrow",
                customHandlePrev: "gerador-leftarrow",
                onPrePrevCallback: function () {
                    gerador.locucao('prev');
                },
                onAfterNextCallback: function () {
                    gerador.locucao('next');
                },
                width: 218,
                height: 50,
                x: 1157,
                y: 554 + 392,
                objects: [organela0, organela1, organela2, organela3, organela4, organela5, organela6]
            }); 
        } else if (celula == 'animal') {
            var organela0 = game.add.image(0, 0, 'organela' + celula + '0');
            var organela1 = game.add.image(0, 0, 'organela' + celula + '1');
            var organela2 = game.add.image(0, 0, 'organela' + celula + '2');
            var organela3 = game.add.image(0, 0, 'organela' + celula + '3');
            var organela4 = game.add.image(0, 0, 'organela' + celula + '4');
            var organela5 = game.add.image(0, 0, 'organela' + celula + '5');
            var organela6 = game.add.image(0, 0, 'organela' + celula + '6');
            var organela7 = game.add.image(0, 0, 'organela' + celula + '7');
            var organela8 = game.add.image(0, 0, 'organela' + celula + '8');
            var organela9 = game.add.image(0, 0, 'organela' + celula + '9');
            var organela10 = game.add.image(0, 0, 'organela' + celula + '10');
            this.slider = slider.createSlider({
                customSliderBG: false,
                mode: "horizontal",
                sliderBGAlpha: 0.8,
                customHandleNext: "gerador-rightarrow",
                customHandlePrev: "gerador-leftarrow",
                onPrePrevCallback: function () {
                    gerador.locucao('prev');
                },
                onAfterNextCallback: function () {
                    gerador.locucao('next');
                },
                width: 218,
                height: 50,
                x: 1157,
                y: 554 + 392,
                objects: [organela0, organela10, organela2, organela8, organela4, organela9, organela6, organela7, organela3, organela5, organela1]
            });
        } else if (celula == 'vegetal') {
            var organela0 = game.add.image(0, 0, 'organela' + celula + '0');
            var organela1 = game.add.image(0, 0, 'organela' + celula + '1');
            var organela2 = game.add.image(0, 0, 'organela' + celula + '2');
            var organela3 = game.add.image(0, 0, 'organela' + celula + '3');
            var organela4 = game.add.image(0, 0, 'organela' + celula + '4');
            var organela5 = game.add.image(0, 0, 'organela' + celula + '5');
            var organela6 = game.add.image(0, 0, 'organela' + celula + '6');
            var organela7 = game.add.image(0, 0, 'organela' + celula + '7');
            var organela8 = game.add.image(0, 0, 'organela' + celula + '8');
            var organela9 = game.add.image(0, 0, 'organela' + celula + '9');
            this.slider = slider.createSlider({
                customSliderBG: false,
                mode: "horizontal",
                sliderBGAlpha: 0.8,
                customHandleNext: "gerador-rightarrow",
                customHandlePrev: "gerador-leftarrow",
                onPrePrevCallback: function () {
                    gerador.locucao('prev');
                },
                onAfterNextCallback: function () {
                    gerador.locucao('next');
                },
                width: 218,
                height: 50,
                x: 1157,
                y: 554 + 392,
                objects: [organela0, organela2, organela8, organela4, organela9, organela6, organela7, organela3, organela5, organela1]
            });
        }

        alien.element.bringToTop();
    },

    locucao: function (side) {

        var sideControl;
        switch (side) {
            case 'prev':
                sideControl = -1;
                break;

            case 'next':
                sideControl = 1;
        }

        var index = slider.getCurrentIndex() + sideControl;

        if (config.locucao) {
            gerador.locutando = true;
            game.time.events.loop(800, function () {
                gerador.locutando = false;
            });

           organelas.callByIndex(index);
        }
    }
}

function gerarOrganela() {
    if (energia.body && energia.body.encaixado) {
        sounds.play('shock');
        gerador.effect.animations.play('gen', 17, false);
        receptor.play('pegar');
        game.time.events.add(Phaser.Timer.SECOND * 2, function (x) {
            receptor.play('voltar');
            if(energia.body){
                energia.body.destroy();
            }
            energia.body = false;
        }, this, null);

        game.add.tween(energia.body).to({
            alpha: 1
        }, 270, Phaser.Easing.Linear.None, true, 0);

        var index = slider.getCurrentIndex();
        organelas.gen(index);
    }
}