var locucao = {
    gen: function () {

        this.procariontecapsula0 = game.add.audio('procariontecapsula0');
        this.procariontecapsula1 = game.add.audio('procariontecapsula1');
        this.procariontecitoplasma0 = game.add.audio('procariontecitoplasma0');
        this.procariontecitoplasma1 = game.add.audio('procariontecitoplasma1');
        this.procarionteflagelo0 = game.add.audio('procarionteflagelo0');
        this.procarionteflagelo1 = game.add.audio('procarionteflagelo1');
        this.procariontemembranaplasmatica0 = game.add.audio('procariontemembranaplasmatica0');
        this.procariontemembranaplasmatica1 = game.add.audio('procariontemembranaplasmatica1');
        this.procariontenucleoide0 = game.add.audio('procariontenucleoide0');
        this.procariontenucleoide1 = game.add.audio('procariontenucleoide1');
        this.procarionteparedecelular0 = game.add.audio('procarionteparedecelular0');
        this.procarionteparedecelular1 = game.add.audio('procarionteparedecelular1');
        this.procarionteribossomo0 = game.add.audio('procarionteribossomo0');
        this.procarionteribossomo1 = game.add.audio('procarionteribossomo1');

        this.capsula = game.add.audio('capsula');
        this.membranaplasmatica = game.add.audio('membranaplasmatica');
        this.citoplasma = game.add.audio('citoplasma');
        this.ribossomos = game.add.audio('ribossomos');
        this.nucleoide = game.add.audio('nucleoide');
        this.flagelo = game.add.audio('flagelo');
        this.citoesqueleto = game.add.audio('citoesqueleto');
        this.nucleo = game.add.audio('nucleo');
        this.lisossomo = game.add.audio('lisossomo');
        this.reticuloendoplasmatico = game.add.audio('reticuloendoplasmatico');
        this.complexogolgiense = game.add.audio('complexogolgiense');
        this.peroxissomo = game.add.audio('peroxissomo');
        this.centriolo = game.add.audio('centriolo');
        this.mitocondria = game.add.audio('mitocondria');
        this.cloropasto = game.add.audio('cloropasto');
        this.paredecelular = game.add.audio('paredecelular');
        this.vacuolo = game.add.audio('vacuolo');
        this.vazio = game.add.audio('vazio');

        this.posicao1 = game.add.audio('posicao1');
        this.posicao2 = game.add.audio('posicao2');
        this.posicao3 = game.add.audio('posicao3');
        this.posicao4 = game.add.audio('posicao4');
        this.posicao5 = game.add.audio('posicao5');
        this.posicao6 = game.add.audio('posicao6');
        this.posicao7 = game.add.audio('posicao7');
        this.posicao8 = game.add.audio('posicao8');
        this.posicao9 = game.add.audio('posicao9');
        this.posicao10 = game.add.audio('posicao10');
        this.posicao11 = game.add.audio('posicao11');
        
        this.errado = game.add.audio('errado');
        this.certo = game.add.audio('certo');
    },

    call: function (id1) {
        if (config.locucao) {
            this.play(id1);
        }
    },

    play: function (id) {

        switch (id) {

            //questoes

            //procarionte
            case 'procariontecapsula0':
                this.procariontecapsula0.play();
                break;

            case 'procariontecapsula1':
                this.procariontecapsula1.play();
                break;

            case 'procariontecitoplasma0':
                this.procariontecitoplasma0.play();
                break;

            case 'procariontecitoplasma1':
                this.procariontecitoplasma1.play();
                break;

            case 'procarionteflagelo0':
                this.procarionteflagelo0.play();
                break;

            case 'procarionteflagelo1':
                this.procarionteflagelo0.play();
                break;

            case 'procariontemembranaplasmatica0':
                this.procariontemembranaplasmatica0.play();
                break;

            case 'procariontemembranaplasmatica1':
                this.procariontemembranaplasmatica0.play();
                break;

            case 'procariontenucleoide0':
                this.procariontenucleoide0.play();
                break;

            case 'procariontenucleoide1':
                this.procariontenucleoide1.play();
                break;

            case 'procarionteparedecelular0':
                this.procarionteparedecelular0.play();
                break;

            case 'procarionteparedecelular1':
                this.procarionteparedecelular1.play();
                break;

            case 'procarionteribossomo0':
                this.procarionteribossomo0.play();
                break;

            case 'procarionteribossomo1':
                this.procarionteribossomo1.play();
                break;

                //animal


                ///vegetal


                //fim questoes

                //organelas
            case 'capsula':
                this.capsula.play();
                break;

            case 'membranaplasmatica':
                this.membranaplasmatica.play();
                break;

            case 'citoplasma':
                this.citoplasma.play();
                break;

            case 'ribossomos':
                this.ribossomos.play();
                break;

            case 'nucleoide':
                this.nucleoide.play();
                break;

            case 'flagelo':
                this.flagelo.play();
                break;

            case 'citoesqueleto':
                this.citoesqueleto.play();
                break;

            case 'nucleo':
                this.nucleo.play();
                break;

            case 'lisossomo':
                this.lisossomo.play();
                break;

            case 'reticuloendoplasmatico':
                this.reticuloendoplasmatico.play();
                break;

            case 'complexogolgiense':
                this.complexogolgiense.play();
                break;

            case 'peroxissomo':
                this.peroxissomo.play();
                break;

            case 'centriolo':
                this.centriolo.play();
                break;

            case 'mitocondria':
                this.mitocondria.play();
                break;

            case 'cloropasto':
                this.cloropasto.play();
                break;

            case 'paredecelular':
                this.paredecelular.play();
                break;

            case 'vacuolo':
                this.vacuolo.play();
                break;

            case 'vazio':
                this.vazio.play();
                break;

            case 'posicao1':
                this.posicao1.play();
                break;

            case 'posicao2':
                this.posicao2.play();
                break;

            case 'posicao3':
                this.posicao3.play();
                break;

            case 'posicao4':
                this.posicao4.play();
                break;

            case 'posicao5':
                this.posicao5.play();
                break;

            case 'posicao6':
                this.posicao6.play();
                break;

            case 'posicao7':
                this.posicao7.play();
                break;

            case 'posicao8':
                this.posicao8.play();
                break;

            case 'posicao9':
                this.posicao9.play();
                break;

            case 'posicao10':
                this.posicao10.play();
                break;

            case 'posicao11':
                this.posicao11.play();
                break;

            case 'certo':
                this.certo.play();
                break;

            case 'errado':
                this.errado.play();
                break;
        }
    }
}