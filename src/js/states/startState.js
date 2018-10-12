var startState = { create:criarStart, update: atualizarStart}
var btnPlay, btnSobre;
function criarStart(){
    sobreBg = game.add.image(centerX, game.height/2, 'startModal');
    sobreBg.anchor.x = 0.5;
    sobreBg.anchor.y = 0.5;

    /*var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;*/

    createModals();

    btnPlay = game.add.button(centerX , game.world.centerY + 70, 'btnPlay');
    btnPlay.enableBody = true;
    btnPlay.anchor.x = 0.5;
    btnPlay.anchor.y = 0.5;
    btnPlay.scale.setTo(0.8, 0.8);
    btnPlay.inputEnabled = true;
    btnPlay.events.onInputDown.add(start, this);

    btnSobre = game.add.button(centerX - 205, 562, 'sobreBtn');
    btnSobre.enableBody = true;
    btnSobre.anchor.x = 0.5;
    btnSobre.anchor.y = 0.5;
    btnSobre.scale.setTo(0.8, 0.8);
    btnSobre.inputEnabled = true;
    btnSobre.scale.setTo(1.4,1.4);
    btnSobre.events.onInputDown.add(function(){
        showSobreModal();
    }, this);

    game.world.setBounds(0, 0, 800, 600);    
    game.camera.scale.setTo(1, 1);
}

function atualizarStart(){
    game.scale.setShowAll();
    game.scale.refresh();

    if (btnPlay.input.pointerOver())
    {
        btnPlay.frame = 1;
    }
    else
    {
        btnPlay.frame = 0;
    }

    if (btnSobre.input.pointerOver())
    {
        btnSobre.frame = 1;
    }
    else
    {
        btnSobre.frame = 0;
    }
}
function start(){
    game.state.start('levelState');
}