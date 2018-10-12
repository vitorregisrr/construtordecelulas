var celulaVegetal = {
    nome: 'vegetal',

    gen: function () {
        game.add.sprite(788, 280, 'canoAlavanca'); // cano do portal
        this.body = game.add.sprite(320, 90, 'celulaVegetal');
        this.body.scale.setTo(0.38, 0.38);
        //this.alavancaGen();
        alien.element.bringToTop();
    },

    alavancaGen: function(){
        this.alavanca = game.add.button(600, 605, 'iBtn', function(){
            celulaVegetal.check();
        });
    },

    respostas: [0, 9, 1, 7, 3, 8, 5, 6, 2, 4],

    numeroOrganelas: 10,

    placeholdersGen: function () {
        this.posicoes = [
            [388, 450],
            [503, 344],
            [539, 543],
            [690, 155],
            [676, 713],
            [830, 663],
            [925, 160],
            [1040, 558],
            [1083, 397],
            [1260, 350],
        ];
        this.placeholders = game.add.group();

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
        if(organelas.numeroEncaixados >= this.numeroOrganelas){
            organelas.checked = true;
            portal.permissao = true;
            portal.sinalizador.frame = 0;
            for(x = 0; x <= organelas.encaixados.length - 1; x++){
                if(this.placeholders.getAt(x).id == this.respostas[x] ){
                    organelas.encaixados[x].frame = 1;
                    organelas.acertos++;
                    textCerto.setText(organelas.acertos);
                }else{
                    organelas.encaixados[x].frame = 2;
                    organelas.erros++;
                    textErrado.setText(organelas.erros);
                }
            }
        }
    
    }
}