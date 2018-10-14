var sounds = {
    gen: function () {
        if (config.sounds) {
            this.hurt = game.add.audio('hurt');
            this.attack = game.add.audio('attack');
            this.right = game.add.audio('right');
            this.catch = game.add.audio('catch');
            this.receptor = game.add.audio('receptor');
            this.shock = game.add.audio('shock');
            this.ambiente = game.add.audio('ambiente');
            this.reator = game.add.audio('reator');
            this.ambiente.volume = 0.06;

            this.mutScream = game.add.audio('mutScream');
            this.boxChange = game.add.audio('boxChange');

            this.predatorDie = game.add.audio('predatorDie');
            this.predatorVoice = game.add.audio('predatorVoice');
            this.predatorAttacked = game.add.audio('predatorAttacked');

            this.boxChange.volume = 0.2;
        }

    },

    play: function (id) {
        if (config.sounds) {
            switch (id) {
                case 'change':
                    this.change.play();
                    break;

                case 'reator':
                    this.reator.play();
                    break;

                case 'predatorVoice':
                    this.predatorVoice.play();
                    break;

                case 'predatorAttacked':
                    this.predatorAttacked.play();
                    break;

                case 'predatorDie':
                    this.predatorDie.play();
                    break;

                case 'shock':
                    this.shock.play();
                    break;

                case 'receptor':
                    this.receptor.play();
                    break;

                case 'ambiente':
                    this.ambiente.play();
                    break;

                case 'catch':
                    this.catch.play();
                    break;

                case 'boxChange':
                    this.boxChange.play();
                    break;

                case 'fall':
                    this.fall.play();
                    break;

                case 'attack':
                    this.attack.play();
                    break;

                case 'hurt':
                    this.hurt.play();
                    break;

                case 'angry':
                    this.angry.play();
                    break;

                case 'right':
                    this.right.play();
                    break;

                case 'mutScream':
                    this.mutScream.play();
                    break;

                case 'mutAttack':

                    break;

                case 'mutDie':

                    break;

            }
        } else {
            return false;
        }
    }
}