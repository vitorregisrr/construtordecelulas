var locucao = {
    gen: function () {
        if (config.locucao) {
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

            this.animalcitoesqueleto0 = game.add.audio('animalcitoesqueleto0');
            this.animalcitoesqueleto1 = game.add.audio('animalcitoesqueleto1');
            this.animalribossomos0 = game.add.audio('animalribossomos0');
            this.animalribossomos1 = game.add.audio('animalribossomos1');
            this.animallisossomo0 = game.add.audio('animallisossomo0');
            this.animallisossomo1 = game.add.audio('animallisossomo1');
            this.animalnucleo0 = game.add.audio('animalnucleo0');
            this.animalnucleo1 = game.add.audio('animalnucleo1');
            this.animalreticuloendoplasmatico0 = game.add.audio('animalreticuloendoplasmatico0');
            this.animalreticuloendoplasmatico1 = game.add.audio('animalreticuloendoplasmatico1');
            this.animalcomplexogolgiense0 = game.add.audio('animalcomplexogolgiense0');
            this.animalcomplexogolgiense1 = game.add.audio('animalcomplexogolgiense1');
            this.animalmembranaplasmatica0 = game.add.audio('animalmembranaplasmatica0');
            this.animalmembranaplasmatica1 = game.add.audio('animalmembranaplasmatica1');
            this.animalperoxissomo0 = game.add.audio('animalperoxissomo0');
            this.animalperoxissomo1 = game.add.audio('animalperoxissomo1');
            this.animalcentriolo0 = game.add.audio('animalcentriolo0');
            this.animalcentriolo1 = game.add.audio('animalcentriolo1');
            this.animalmitocondria0 = game.add.audio('animalmitocondria0');
            this.animalmitocondria1 = game.add.audio('animalmitocondria1');
            this.animalcitoplasma0 = game.add.audio('animalcitoplasma0');
            this.animalcitoplasma1 = game.add.audio('animalcitoplasma1');

            this.vegetalnucleo0 = game.add.audio('vegetalnucleo0');
            this.vegetalnucleo1 = game.add.audio('vegetalnucleo1');
            this.vegetalmitocondria0 = game.add.audio('vegetalmitocondria0');
            this.vegetalmitocondria1 = game.add.audio('vegetalmitocondria1');
            this.vegetalcloroplasto0 = game.add.audio('vegetalcloroplasto0');
            this.vegetalcloroplasto1 = game.add.audio('vegetalcloroplasto1');
            this.vegetalparedecelular0 = game.add.audio('vegetalparedecelular0');
            this.vegetalparedecelular1 = game.add.audio('vegetalparedecelular1');
            this.vegetalcomplexogolgiense0 = game.add.audio('vegetalcomplexogolgiense0');
            this.vegetalcomplexogolgiense1 = game.add.audio('vegetalcomplexogolgiense1');
            this.vegetalcitoesqueleto0 = game.add.audio('vegetalcitoesqueleto0');
            this.vegetalcitoesqueleto1 = game.add.audio('vegetalcitoesqueleto1');
            this.vegetalperoxissomo0 = game.add.audio('vegetalperoxissomo0');
            this.vegetalperoxissomo1 = game.add.audio('vegetalperoxissomo1');
            this.vegetalribossomos0 = game.add.audio('vegetalribossomos0');
            this.vegetalribossomos1 = game.add.audio('vegetalribossomos1');
            this.vegetalvacuolo0 = game.add.audio('vegetalvacuolo0');
            this.vegetalvacuolo1 = game.add.audio('vegetalvacuolo1');
            this.vegetalreticuloendoplasmatico0 = game.add.audio('vegetalreticuloendoplasmatico0');
            this.vegetalreticuloendoplasmatico1 = game.add.audio('vegetalreticuloendoplasmatico1');
            this.vegetalcitoplasma0 = game.add.audio('vegetalcitoplasma0');
            this.vegetalcitoplasma1 = game.add.audio('vegetalcitoplasma1');
            this.vegetalmembranaplasmatica0 = game.add.audio('vegetalmembranaplasmatica0');
            this.vegetalmembranaplasmatica1 = game.add.audio('vegetalcitoplasma1');

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
            this.cloroplasto = game.add.audio('cloroplasto');
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
        }
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

                //vegetal
            case 'animalcitoesqueleto0':
                this.animalcitoesqueleto0.play();
                break;

            case 'animalcitoesqueleto1':
                this.animalcitoesqueleto1.play();
                break;

            case 'animalribossomos0':
                this.animalribossomos0.play();
                break;

            case 'animalribossomos1':
                this.animalribossomos1.play();
                break;

            case 'animallisossomo0':
                this.animallisossomo0.play();
                break;

            case 'animallisossomo1':
                this.animallisossomo1.play();
                break;

            case 'animalnucleo0':
                this.animalnucleo0.play();
                break;

            case 'animalnucleo1':
                this.animalnucleo1.play();
                break;

            case 'animalreticuloendoplasmatico0':
                this.animalreticuloendoplasmatico0.play();
                break;

            case 'animalreticuloendoplasmatico1':
                this.animalreticuloendoplasmatico1.play();
                break;

            case 'animalcomplexogolgiense0':
                this.animalcomplexogolgiense0.play();
                break;

            case 'animalcomplexogolgiense1':
                this.animalcomplexogolgiense1.play();
                break;

            case 'animalmembranaplasmatica0':
                this.animalmembranaplasmatica0.play();
                break;

            case 'animalmembranaplasmatica1':
                this.animalmembranaplasmatica1.play();
                break;

            case 'animalperoxissomo0':
                this.animalperoxissomo0.play();
                break;

            case 'animalperoxissomo1':
                this.animalperoxissomo1.play();
                break;

            case 'animalcentriolo0':
                this.animalcentriolo0.play();
                break;

            case 'animalcentriolo1':
                this.animalcentriolo1.play();
                break;

            case 'animalmitocondria0':
                this.animalmitocondria0.play();
                break;

            case 'animalmitocondria1':
                this.animalmitocondria1.play();
                break;

            case 'animalcitoplasma0':
                this.animalcitoplasma0.play();
                break;

            case 'animalcitoplasma1':
                this.animalcitoplasma1.play();
                break;

                ///animal
            case 'vegetalnucleo0':
                this.vegetalnucleo0.play();
                break;

            case 'vegetalnucleo1':
                this.vegetalnucleo1.play();
                break;

            case 'vegetalmitocondria0':
                this.vegetalmitocondria0.play();
                break;

            case 'vegetalmitocondria1':
                this.vegetalmitocondria1.play();
                break;

            case 'vegetalcloroplasto0':
                this.vegetalcloroplasto0.play();
                break;

            case 'vegetalcloroplasto1':
                this.vegetalcloroplasto1.play();
                break;

            case 'vegetalmembranaplasmatica0':
                this.vegetalmembranaplasmatica0.play();
                break;

            case 'vegetalmembranaplasmatica1':
                this.vegetalmembranaplasmatica1.play();
                break;

            case 'vegetalparedecelular0':
                this.vegetalparedecelular0.play();
                break;

            case 'vegetalparedecelular1':
                this.vegetalparedecelular1.play();
                break;

            case 'vegetalcomplexogolgiense0':
                this.vegetalcomplexogolgiense0.play();
                break;

            case 'vegetalcomplexogolgiense1':
                this.vegetalcomplexogolgiense1.play();
                break;

            case 'vegetalcitoesqueleto0':
                this.vegetalcitoesqueleto0.play();
                break;

            case 'vegetalcitoesqueleto1':
                this.vegetalcitoesqueleto1.play();
                break;

            case 'vegetalperoxissomo0':
                this.vegetalperoxissomo0.play();
                break;

            case 'vegetalperoxissomo1':
                this.vegetalperoxissomo1.play();
                break;

            case 'vegetalribossomos0':
                this.vegetalribossomos0.play();
                break;

            case 'vegetalribossomos1':
                this.vegetalribossomos1.play();
                break;

            case 'vegetalcitoplasma0':
                this.vegetalcitoplasma0.play();
                break;

            case 'vegetalcitoplasma1':
                this.vegetalcitoplasma1.play();
                break;

            case 'vegetalvacuolo0':
                this.vegetalvacuolo0.play();
                break;

            case 'vegetalvacuolo1':
                this.vegetalvacuolo1.play();
                break;

            case 'vegetalreticuloendoplasmatico0':
                this.vegetalreticuloendoplasmatico0.play();
                break;

            case 'vegetalreticuloendoplasmatico1':
                this.vegetalreticuloendoplasmatico1.play();
                break;
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

            case 'cloroplasto':
                this.cloroplasto.play();
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