var sfx;
var sounds = {
    gen: function () {
        if (config.sounds) {
            sfx = game.add.audioSprite('sfx');
            sfx.allowMultiple = true;
        }
    },

    play: function (id) {
        if (config.sounds) {
            switch (id) {
                case 'change':
                    sfx.play('change');
                    break;

                case 'reator':
                    sfx.play('reator');
                    break;

                case 'predatorVoice':
                    sfx.play('predatorVoice');

                    break;

                case 'predatorAttacked':
                    sfx.play('predatorAttacked');

                    break;

                case 'predatorDie':
                    sfx.play('predatorDie');

                    break;

                case 'shock':
                    sfx.play('shock');

                    break;

                case 'receptor':
                    sfx.play('receptor');

                    break;

                case 'ambiente':
                    sfx.play('ambiente', 0.08);
                    break;

                case 'catch':
                    sfx.play('catch');

                    break;

                case 'boxChange':
                    sfx.play('boxChange');

                    break;

                case 'fall':
                    sfx.play('fall');

                    break;

                case 'attack':
                    sfx.play('attack', 0.05);

                    break;

                case 'hurt':
                    sfx.play('hurt');

                    break;

                case 'angry':
                    sfx.play('angry');

                    break;

                case 'right':
                    sfx.play('right');

                    break;

                case 'wrong':
                    sfx.play('wrong', 0.03);

                    break;

            }
        } else {
            return false;
        }
    }
}