var numeroAcertos;
function createQuizzModal() {
    numeroAcertos = 0;
    reg.modal.createModal({
        type: "modalQuizz",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        fixedToCamera: true,
        itemsArr: [{
                type: "image",
                content: "modalQuizz",
                offsetY: -20,
                contentScale: 1,
                callback: function () {
                    return false;
                }
            },
            {
                type: "image",
                content: "enviarscifiBtn",
                offsetY: 250,
                contentScale: 1.3,
                offsetX: 0,
                callback: function () {
                    reg.modal.hideModal("modalQuizz");
                    questaoEnviada();
                }
            },
            {
                type: "sprite",
                content: "onoffscifi",
                offsetY: -2,
                offsetX: 225,
                frame: 0,
                contentScale: 0.7,
                callback: function (e) {
                    alternativaMarcada(0);
                }
            },
            {
                type: "sprite",
                content: "onoffscifi",
                offsetY: 40,
                offsetX: 225,
                contentScale: 0.7,
                callback: function (e) {
                    alternativaMarcada(1);
                }
            },
            {
                type: "sprite",
                content: "onoffscifi",
                offsetY: 88,
                offsetX: 225,
                contentScale: 0.7,
                callback: function (e) {
                    alternativaMarcada(2);
                }
            },
            {
                type: "sprite",
                content: "onoffscifi",
                offsetY: 133,
                offsetX: 225,
                contentScale: 0.7,
                callback: function (e) {
                    alternativaMarcada(3);
                }
            },
            {
                type: "sprite",
                content: "onoffscifi",
                contentScale: 0.7,
                offsetY: 177,
                offsetX: 225,
                contentScale: 0.7,
                callback: function (e) {
                    alternativaMarcada(4);
                }
            },

            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                fontSize: 19,
                maxWidth: 510,
                align: 'left',
                lineSpacing: -5,
                content: "Quando escovamos os dentes, realizamos a remoção de biofilme bacteriano depositado sobre nossa estrutura dentária.O biofilme é uma massa composta por várias bactérias e matriz extracelular produzida pelas mesmas. Os maus hábitos de higiene causam problemas como a cárie, que são perfurações nos dentes causadas por grupos específicos de bactérias presentes em biofilmes.Qual o nome da matriz extracelular descrita no texto acima ?",
                offsetY: -110,
                offsetX: 5,
                callback: function (e) {
                }
            },

            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                align: 'left',
                fontSize: 19,
                content: "Alternativa 1",
                offsetY: 0,
                offsetX: -80,
                callback: function (e) {
                }
            },

            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                align: 'left',
                fontSize: 19,
                content: "Alternativa 2",
                offsetY: 45,
                offsetX: -80,
                callback: function (e) {
                }
            },
            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                align: 'left',
                fontSize: 19,
                content: "Alternativa 3",
                offsetY: 90,
                offsetX: -80,
                callback: function (e) {
                }
            },

            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                align: 'left',
                fontSize: 19,
                content: "Alternativa 4",
                offsetY: 134,
                offsetX: -80,
                callback: function (e) {
                }
            },

            {
                type: "text",
                color:'0xFFFFFF',
                fontFamily: 'Rajdhani',
                align: 'left',
                fontSize: 19,
                content: "Alternativa 5",
                offsetY: 180,
                offsetX: -80,
                callback: function (e) {
                }
            },

            {
                type: "sprite",
                content: "hearBtn",
                offsetY: -190,
                offsetX: 255,
                frame: 0,
                callback: function (e) {
                    locucao.call(controleQuestao.locucao)
                }
            }

        ]
    });
}

var controleQuestao;
function novaQuestao() {
    //desmarca todas as caixinhas
    for(x = 2; x <= 6; x++){
        reg.modal.updateModalValue(0, 'modalQuizz', x);
    }

    alien.canAttack = false;

    var celulaAtual = levelNumber -1,
        numeroOrganelas =  questoes[celulaAtual].length -1,
        organelaAleatoria = game.rnd.integerInRange(0, numeroOrganelas),
        questaoAleatoria = game.rnd.integerInRange(0, 1),
        questaoAtual = questoes[celulaAtual][organelaAleatoria][questaoAleatoria];

    var numeroQuestoes = numeroOrganelas * 2;
    if(numeroAcertos <= numeroQuestoes){
        while(questaoAtual[8] == true){
            organelaAleatoria = game.rnd.integerInRange(0, numeroOrganelas),
            questaoAleatoria = game.rnd.integerInRange(0, 1),
            questaoAtual = questoes[celulaAtual][organelaAleatoria][questaoAleatoria];
        }
    }

    console.log('numero questoes:' + numeroQuestoes + 'numero acertos:' +numeroAcertos);

    controleQuestao = {
        titulo: questaoAtual[0],
        alternativa1: questaoAtual[1],
        alternativa2: questaoAtual[2],
        alternativa3: questaoAtual[3],
        alternativa4: questaoAtual[4],
        alternativa5: questaoAtual[5],
        certa: questaoAtual[6],
        locucao: questaoAtual[7],
        jaacertou: questaoAtual[8],
        index: questaoAtual,
        marcada: null,
    }

    //setta a questao
    reg.modal.updateModalValue(controleQuestao.titulo, 'modalQuizz', 7);
    reg.modal.updateModalValue(controleQuestao.alternativa1, 'modalQuizz', 8);
    reg.modal.updateModalValue(controleQuestao.alternativa2, 'modalQuizz', 9);
    reg.modal.updateModalValue(controleQuestao.alternativa3, 'modalQuizz', 10);
    reg.modal.updateModalValue(controleQuestao.alternativa4, 'modalQuizz', 11);
    reg.modal.updateModalValue(controleQuestao.alternativa5, 'modalQuizz', 12);


    reg.modal.showModal("modalQuizz");
}

function alternativaMarcada(index) {

    controleQuestao.marcada = index;

    //desmarca as outras alternativas
    for(x = 2; x <= 6; x++){
        if( x == index+2){
            reg.modal.updateModalValue(1, 'modalQuizz', x);
        }else{
            reg.modal.updateModalValue(0, 'modalQuizz', x);
        }
    }
}

function questaoEnviada(){
    game.sound.stopAll();
    sounds.play('ambiente');
    setTimeout(() => {
        alien.canAttack = true;
    }, 300);

    if(controleQuestao.marcada == controleQuestao.certa){
        energia.gen();
        reator.painel.frame = 2;
        controleQuestao.index[8] = true;
        numeroAcertos++;
    }else{
        reator.painel.frame = 1;
    }
}