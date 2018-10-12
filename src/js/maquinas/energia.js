var energia = {
    gen: function(){
        if(this.body){
            this.body.destroy();
        }
    
        this.body = game.add.button(230, 950 + 120, 'energia', this.grab, this);
        reator.body.animations.play('open', 12, false);
        this.noReceptor = true;
        reator.body.bringToTop();
        reator.painel.bringToTop();
        this.efeitoCapturado = game.add.sprite(0, 0, 'energiaCapturada');
        this.efeitoCapturado.anchor.setTo(0.5, 0.5);
        this.efeitoCapturado.scale.setTo(1.2, 1.2);
        this.efeitoCapturado.alpha = 0;
        this.efeitoCapturado.animations.add('fly');
        this.efeitoCapturado.animations.play('fly',8, true);
        this.body.addChild(this.efeitoCapturado);

        //animacao de gerar
        this.body.scale.setTo(0,0);
        this.body.alpha = 0;
        this.body.anchor.setTo(0.5, 0.5);
        game.add.tween(this.body.scale).to({
            x: 0.6,
            y: 0.6
        }, 600, Phaser.Easing.Linear.None, true);

        game.add.tween(this.body).to({
            alpha: 1,
            y: energia.body.y += 10,
        }, 600, Phaser.Easing.Linear.None, true);

        //outras animacoes
        this.body.animations.add('anim');
        this.body.animations.play('anim', 14, true);
        sounds.play('reator');

        alien.element.bringToTop();
        gameUiBringtoTop();
    },

    grab: function(e){
        if (Math.abs(alien.element.x - e.x) < 300 && Math.abs(alien.element.y - e.y) < 300 && !e.encaixado) {
            alien.animating = true;
            sounds.play('catch');
            alien.element.animations.play('grabing', 12, false);
            game.time.events.add(900, function () {
                alien.animating = false;
            }, this).autoDestroy = true;


            game.add.tween(energia.efeitoCapturado).to({
                alpha: 1
            }, 200, Phaser.Easing.Linear.None, true);

            game.add.tween(energia.body).to({
                alpha: 0
            }, 900, Phaser.Easing.Linear.None, true);


            game.time.events.add(1000, function () {
                e.x = 0;
                e.y = -65;
                alien.element.addChild(e);
                game.add.tween(energia.body).to({
                    alpha: 1
                }, 900, Phaser.Easing.Linear.None, true);
                alien.element.frame = 3;
                alien.grabing = 'energia';
                this.grabing = e;
                if(this.noReceptor){
                    energia.noReceptor = false;
                    reator.body.animations.play('close',12,false);
                    reator.painel.frame = 0;
                    sounds.play('reator');
                }
            }, this).autoDestroy = true;
        }
    },

    drop: function(){
        var pointer = game.input.activePointer;
        e = this.grabing;

        if ((Math.abs( (pointer.x + game.camera.x) - alien.element.x) < 300 && Math.abs((pointer.y + game.camera.y) - alien.element.y) < 300)) {
            sounds.play('catch');
            alien.animating = true;
            alien.element.animations.play('grabing', 12, false);
            game.time.events.add(900, function () {
                alien.animating = false;
            }, this).autoDestroy = true;

            e.alpha = 0;
            e.x = pointer.x + game.camera.x;
            e.y = pointer.y + game.camera.y;
            game.add.existing(e);
            alien.grabing = false;

            game.time.events.add(700, function () {
                game.add.tween(e).to({
                    alpha: 1
                }, 900, Phaser.Easing.Linear.None, true);

                game.add.tween(energia.efeitoCapturado).to({
                    alpha: 0
                }, 400, Phaser.Easing.Linear.None, true);

                if(checkReceptorOverlap(this.grabing, receptor.body)){
                    this.grabing = false;
                    gerador.body.addChild(this.body);
                    this.body.x = 63
                    this.body.y = 190;
                    receptor.body.bringToTop();
                    this.body.encaixado = true;
                }

            }, this).autoDestroy = true;
        }
    },
}

function checkReceptorOverlap() {

    var boundsA = receptor.body.getBounds();
    var boundsB = energia.body.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}