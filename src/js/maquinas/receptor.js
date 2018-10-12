var receptor = {
    gen: function(){
        this.body = game.add.sprite(13, 100, 'receptorEnergia')
        this.body.frame = 4;

        this.body.animations.add('pegar', [3,2,1,0]);
        this.body.animations.add('voltar', [0,1,2,3,4]);
    },
    play: function(animacao){
        switch(animacao){
            case 'pegar':
                receptor.body.animations.play('pegar', 12, false);
                game.add.tween(receptor.body).to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None, true, 0);

                //animacoes da energia
                game.add.tween(energia.body).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true, 0);

                game.add.tween(energia.body.scale).to({
                    x: 0,
                    y: 0
                }, 500, Phaser.Easing.Linear.None, true);

                game.add.tween(energia.body).to({
                    y: energia.body.y - 100
                }, 500, Phaser.Easing.Linear.None, true);

                sounds.play('receptor');
                break;

            case 'voltar':
                receptor.body.animations.play('voltar', 12, false);
                game.add.tween(receptor.body).to({
                    alpha: 1
                }, 200, Phaser.Easing.Linear.None, true, 0);
                sounds.play('receptor');
                break;
        }
    }
}