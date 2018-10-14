 var incubadora = {
     gen: function(){
        this.body = game.add.sprite(600, 608, 'incubadora');

        switch (celulaAtual.nome) {
            case 'procarionte':
                var bacteria = game.add.sprite(incubadora.body.x + 90, incubadora.body.y + 30, 'bacteriaIncubadora');
                bacteria.animations.add('effect');
                bacteria.animations.play('effect', 8, true);
                break;
       
            case 'animal':
                var ovo = game.add.sprite(incubadora.body.x + 75, incubadora.body.y + 25, 'ovoIncubadora');
                ovo.animations.add('effect');
                ovo.animations.play('effect', 8, true);
                break;
       
            case 'vegetal':
                var planta = game.add.sprite(incubadora.body.x + 90, incubadora.body.y + 30, 'plantaIncubadora');
                planta.animations.add('effect');
                planta.animations.play('effect', 8, true);
                break;
        }
       
        incubadora.body.bringToTop();

        this.dialogoProteja = game.add.image(40, -100, 'dialogoProteja');
        this.dialogoProteja.scale.setTo(0.65, 0.65);
        this.dialogoProteja.alpha = 0.5;
        this.body.addChild(this.dialogoProteja);
        this.dialogoProteja.bringToTop();
     }
 } 