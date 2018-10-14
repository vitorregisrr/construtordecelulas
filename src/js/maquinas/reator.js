var reator = {
    gen: function () {

        this.body = game.add.sprite(30, 950, 'reator');
        this.body.animations.add('open');
        this.body.animations.add('close', [7, 6, 5, 4, 3, 2, 1, 0]);

        this.placa = game.add.sprite(140, -20, 'placareator');
        this.body.addChild(this.placa);

        this.gerarBtn = game.add.button(92, 950 + -30, 'gerarBtn', function () {
            if (Math.abs((reator.gerarBtn.x + 100) - alien.element.x) < 220 && Math.abs((reator.gerarBtn.y + 100) - alien.element.y) < 150) {
                reator.gerarEnergia();
            }
        }); // nao da pra usar o add child por causa do pointer check

        this.gerarBtn.anchor.setTo(0.5, 0.5);

        this.painel = game.add.sprite(44, 137, 'reatorPainel');
        this.painel.frame = 0;
        this.painel.inputEnabled = true;
        this.painel.events.onInputDown.add(function () {
            if (Math.abs((reator.gerarBtn.x + 100) - alien.element.x) < 220 && Math.abs((reator.gerarBtn.y + 100) - alien.element.y) < 150) {
                reator.gerarEnergia();
            }
        }, this);
        this.body.addChild(this.painel);

        this.dialogoGere = game.add.image(0, -130, 'dialogoGere');
        this.dialogoGere.scale.setTo(0.65, 0.65);
        this.dialogoGere.alpha = 0;
        this.body.addChild(this.dialogoGere);

        this.dialogoCapture = game.add.image(150, 20, 'dialogoCapture');
        this.dialogoCapture.scale.setTo(0.6, 0.6);
        this.dialogoCapture.alpha = 0;
        this.body.addChild(this.dialogoCapture);

        if (mobileAndTabletcheck()) {
            this.gerarBtn.scale.setTo(1.5,1.5);
            this.gerarBtn.y -= 10;
            this.dialogoGere.y -= 15;
        }
    },

    gerarEnergia: function () {
        if (!alien.montado) {
            novaQuestao();
        }
    }
}