var reator = {
    gen: function(){
        this.body = game.add.sprite(30, 950, 'reator');
        this.body.animations.add('open');
        this.body.animations.add('close', [7,6,5,4,3,2,1,0]);

        this.placa = game.add.sprite(140, -20, 'placareator');
        this.body.addChild(this.placa);

        this.gerarBtn = game.add.button(30 + 30, 950 + -30, 'gerarBtn', function(){
            if(Math.abs( (reator.gerarBtn.x + 100) - alien.element.x) < 220 && Math.abs((reator.gerarBtn.y + 100) - alien.element.y) < 150){
                reator.gerarEnergia();
            }
        }); // nao da pra usar o add child por causa do pointer check
        if (mobileAndTabletcheck()) {
          reator.gerarBtn.scale.setTo(1.8,1.8);
          reator.gerarBtn.x = 35;
          reator.gerarBtn.y = 950 - 40;
        }

        this.painel = game.add.sprite(44, 137, 'reatorPainel');
        this.painel.frame = 0;
        this.painel.inputEnabled = true;
        this.painel.events.onInputDown.add(function(){
            if(Math.abs( (reator.gerarBtn.x + 100) - alien.element.x) < 220 && Math.abs((reator.gerarBtn.y + 100) - alien.element.y) < 150){
                reator.gerarEnergia();
            }
        }, this);
        this.body.addChild(this.painel);
        
    },

    gerarEnergia: function(){
        if(!alien.montado){
            novaQuestao();
        }
    }
}