var celulaProcarionte = {
    nome: 'procarionte',
    gen: function () {
        game.add.sprite(788, 280, 'canoAlavanca'); // cano do portal
        this.body = game.add.sprite(200, 90, 'celulaProcarionte');
        this.body.scale.setTo(0.4, 0.4);
        alien.element.bringToTop();
    },

    respostas: [6, 3, 0, 1, 2, 5, 4],

    numeroOrganelas: 7,

    placeholdersGen: function () {
        this.posicoes = [
            [291, 322],
            [480, 410],
            [605, 510],
            [708, 615],
            [1047, 597],
            [990, 390],
            [1205, 393]
        ];
        this.placeholders = game.add.group();

        for (x = 0; x <= this.posicoes.length - 1; x++) {
            var sprite = game.add.sprite(this.posicoes[x][0], this.posicoes[x][1], 'placeholder');
            sprite.anchor.setTo(0.5, 0.5);
            sprite.width += 10;
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