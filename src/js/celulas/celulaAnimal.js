var celulaAnimal = {
    nome: 'animal',
    gen: function () {
        game.add.sprite(788, 280, 'canoAlavanca'); // cano do portal
        this.body = game.add.sprite(160 + 100, 70, 'celulaAnimal');
        this.body.scale.setTo(0.5, 0.5);
        alien.element.bringToTop();
        this.placeholders = game.add.group();

        this.dialogo = game.add.image(630, 660, 'dialogoEncaixe');
        this.dialogo.scale.setTo(0.65, 0.65);
        this.dialogo.alpha = 0;

    },

    alavancaGen: function () {
        this.alavanca = game.add.button(600, 605, 'iBtn', function () {
            celulaAnimal.check();
        });
    },

    respostas: [0, 8, 10, 2, 4, 9, 6, 7, 3, 5, 1],

    numeroOrganelas: 11,

    placeholdersGen: function () {
        this.posicoes = [
            [335, 164],
            [325, 478],
            [431, 590],
            [502, 175],
            [590, 573],
            [765, 605],
            [902, 659],
            [915, 180],
            [993, 440],
            [1098, 586],
            [1200, 383],

        ];
        for (x = 0; x <= this.posicoes.length - 1; x++) {
            var sprite = game.add.sprite(this.posicoes[x][0], this.posicoes[x][1], 'placeholder');
            sprite.anchor.setTo(0.5, 0.5);
            sprite.alpha = 0;
            sprite.posicao = x;
            this.placeholders.add(sprite);
            text = game.add.text(this.posicoes[x][0], this.posicoes[x][1], x, {
                fill: "#ff0044",
            });
            text.alpha = 0;
        }
    },

    check: function () {
        if (organelas.numeroEncaixados >= this.numeroOrganelas) {

            //dialogo
            game.add.tween(portal.dialogo).to({
                alpha: 7
            }, 600, Phaser.Easing.Linear.None, true);

            game.add.tween(reator.dialogoGere).to({
                alpha: 0
            }, 600, Phaser.Easing.Linear.None, true);

            organelas.checked = true;
            portal.permissao = true;
            portal.sinalizador.frame = 0;
            for (x = 0; x <= organelas.encaixados.length - 1; x++) {
                if (this.placeholders.getAt(x).id == this.respostas[x]) {
                    organelas.encaixados[x].frame = 1;
                    organelas.acertos++;
                    textCerto.setText(organelas.acertos);
                } else {
                    organelas.encaixados[x].frame = 2;
                    organelas.erros++;
                    textErrado.setText(organelas.erros);
                }
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