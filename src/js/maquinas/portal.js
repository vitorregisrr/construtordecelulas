var portal = {
    gen: function(x, y){
        this.effect = game.add.sprite(x + 80, y  + 100, 'efeitoraio');
        this.effect.scale.setTo(0.9, 0.9);
        this.effect.animations.add('gen');
        this.effect.frame = 12;
        this.effect.anchor.setTo(0.5, 0.5);
        
        this.station = game.add.sprite(x, y, 'portalStation');
        this.sinalizador = game.add.sprite(27, -70, 'portalSinalizador');
        this.sinalizador.frame = 1;
        this.station.addChild(this.sinalizador);

        this.station.inputEnabled = true;
        this.station.events.onInputDown.add(portal.teleportar, this);
        this.permissao = false;

        this.dialogo = game.add.image(-110, -155, 'dialogoPortal');
        this.dialogo.scale.setTo(0.65, 0.65);
        this.dialogo.alpha = 0;
        this.station.addChild(this.dialogo);

    },

    teleportar: function(){
        if(this.permissao == true && Math.abs( (portal.station.x + 100) - alien.element.x) < 150 && Math.abs((portal.station.y + 100) - alien.element.y) < 150){
            portal.effect.animations.play('gen', 14, false);
            sounds.play("shock");
            alien.canMove = false;
            alien.canAttack = false;
            alien.element.x = portal.station.x + 85;
            alien.element.y = portal.station.y + 110;
            alien.element.body.velocity.x = 0;
            alien.element.body.velocity.y = 0;
            alien.element.body.gravity.y = 0;
            portal.station.bringToTop();
            setTimeout(() => {
                game.state.start('predatorState');
            }, 1000);
        }else{
            //som bloqueado
        }
    }
}