var levelState = {
	create: criarLevelState,
	update: atualizarLevelState,
};

//local storage progress stars array
var starsArray, timeArray, btnComoJogar;
if (!localStorage.starsArray) {
	starsArray = [0, 4, 4];
	localStorage.setItem('starsArray', JSON.stringify(starsArray));
} else {
	starsArray = JSON.parse(localStorage.starsArray);
}

if (!localStorage.timeArray) {
	timeArray = [
		[00, 00, 00],
		[00, 00, 00],
		[00, 00, 00]
	];
	localStorage.setItem('timeArray', JSON.stringify(timeArray));
} else {
	timeArray = JSON.parse(localStorage.timeArray);
}
var levels;
function criarLevelState() {
	createModals();
	game.sound.stopAll();
	if(soundLoop){
		clearInterval(soundLoop);
	}
	game.camera.scale.setTo(1, 1);
	
	levels = game.add.group();
	var level = new Array();
	var pl = [
		[centerX - 400, 165],
		[centerX - 130, 165],
		[centerX + 140, 165]
	]; //posicoes dos niveis

	for (x = 0; x < 3; x++) {
		var a = x + 1;
		level[x] = game.add.button(pl[x][0], pl[x][1], 'level' + a + 'bg', thumbClicked, this);
		var e = level[x];
		e.levelNumber = x + 1;
		e.stars = game.add.image(130, 380, 'levels');
		e.stars.anchor.setTo(0.5, 0.5);
		e.addChild(e.stars);

		e.time = game.add.text(170, 330, timeArray[x][0]+":"+timeArray[x][1]+":"+timeArray[x][2]);
		e.time.anchor.set(0.5);
		e.time.align = 'center';
		e.time.font = 'Rajdhani';
		e.time.fontSize = 14;
		e.time.stroke = '#7ed2f6';
		e.time.strokeThickness = 1;
		e.time.fill = '#7ed2f6';
		e.addChild(e.time);

		//desbloqueia o proximo nivel caso o anterior esteja liberado
		if ((starsArray[x - 1] >= 1 && starsArray[x - 1] != 4) && (starsArray[x] == 0 || starsArray[x] == 4)) {

			starsArray[x] = 0;
			//é jogavel
		}

		e.stars.frame = starsArray[e.levelNumber - 1];
		levels.add(e);
	}

	var backBtn = game.add.button(centerX - 370, 60, 'btnLeft', function(){
		game.state.start('startState');
	});
	backBtn.anchor.setTo(0.5, 0.5);
	backBtn.scale.setTo(0.8, 0.8);
	backBtn.inputEnabled = true;


	var btnSettings = game.add.button(centerX + 370, 60, 'btnSettings', showConfigModal, this);
	btnSettings.enableBody = true;
	btnSettings.anchor.setTo(0.5, 0.5);
	btnSettings.scale.setTo(0.8, 0.8);
	game.world.setBounds(0, 0, 800, 600);

	btnComoJogar = game.add.button(centerX + 230, 64, 'btnComoJogar', showComoJogarModal, this);
	btnComoJogar.enableBody = true;
	btnComoJogar.anchor.setTo(0.5, 0.5);
	btnComoJogar.scale.setTo(0.8, 0.8);
	game.world.setBounds(0, 0, 800, 600);
	
}

function atualizarLevelState() {

	levels.forEach(function (e) {
		if (e.input.pointerOver()) {
			e.frame = 1;
			game.add.tween(e.stars.scale).to({
				x: 1.1,
				y: 1.1,
			}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(e.time.scale).to({
				x: 1.1,
				y: 1.1,
			}, 100, Phaser.Easing.Linear.None, true);
		} else {
			e.frame = 0;
			game.add.tween(e.time.scale).to({
				x: 1,
				y: 1,
			}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(e.stars.scale).to({
				x: 1,
				y: 1
			}, 100, Phaser.Easing.Linear.None, true);
		}
	});

	if (btnComoJogar.input.pointerOver()) {
		btnComoJogar.frame = 1;
	} else {
		btnComoJogar.frame = 1;
	}


}

function thumbClicked(button) {
	// the level is playable, then play the level!!
	if (button.stars.frame < 4) {
		game.state.start('gameState' + button.levelNumber);

	}
	// else, let's shake the locked levels
	else {
		var buttonTween = game.add.tween(button)
		buttonTween.to({
			x: button.x + 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x + 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.start();
	}
}

function mostraInfo(e) {
	showInfoModal();
}


function mostraLibras(e) {
	var src = 'assets/videoslibras/libras' + e.id + '.mp4';
	reg.modal.updateModalValue(src, 'librasModal', 0);
	showLibrasModal();
}