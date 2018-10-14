var locucao = {
    gen: function () {
        if (config.locucao) {
            this.sprite = game.add.audioSprite('locucao');
            this.sprite.allowMultiple = true;
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
                this.sprite.play('procariontecapsula0');
                break;

            case 'procariontecapsula1':
                this.sprite.play('procariontecapsula1');
                break;

            case 'procariontecitoplasma0':
                this.sprite.play('procariontecitoplasma0');
                break;

            case 'procariontecitoplasma1':
                this.sprite.play('procariontecitoplasma1');
                break;

            case 'procarionteflagelo0':
                this.sprite.play('procarionteflagelo0');
                break;

            case 'procarionteflagelo1':
                this.sprite.play('procarionteflagelo1');
                break;

            case 'procariontemembranaplasmatica0':
                this.sprite.play('procariontemembranaplasmatica0');
                break;

            case 'procariontemembranaplasmatica1':
                this.sprite.play('procariontemembranaplasmatica1');
                break;

            case 'procariontenucleoide0':
                this.sprite.play('procariontenucleoide0');
                break;

            case 'procariontenucleoide1':
                this.sprite.play('procariontenucleoide1');
                break;

            case 'procarionteparedecelular0':
                this.sprite.play('procarionteparedecelular0');
                break;

            case 'procarionteparedecelular1':
                this.sprite.play('procarionteparedecelular1');
                break;

            case 'procarionteribossomo0':
                this.sprite.play('procarionteribossomo0');
                break;

            case 'procarionteribossomo1':
                this.sprite.play('procarionteribossomo1');
                break;

                //vegetal
            case 'animalcitoesqueleto0':
                this.sprite.play('animalcitoesqueleto0');
                break;

            case 'animalcitoesqueleto1':
                this.sprite.play('animalcitoesqueleto1');
                break;

            case 'animalribossomos0':
                this.sprite.play('animalribossomos0');
                break;

            case 'animalribossomos1':
                this.sprite.play('animalribossomos1');
                break;

            case 'animallisossomo0':
                this.sprite.play('animallisossomo0');
                break;

            case 'animallisossomo1':
                this.sprite.play('animallisossomo1');
                break;

            case 'animalnucleo0':
                this.sprite.play('animalnucleo0');
                break;

            case 'animalnucleo1':
                this.sprite.play('animalnucleo1');
                break;

            case 'animalreticuloendoplasmatico0':
                this.sprite.play('animalreticuloendoplasmatico0');
                break;

            case 'animalreticuloendoplasmatico1':
                this.sprite.play('animalreticuloendoplasmatico1');
                break;

            case 'animalcomplexogolgiense0':
                this.sprite.play('animalcomplexogolgiense0');
                break;

            case 'animalcomplexogolgiense1':
                this.sprite.play('animalcomplexogolgiense1');
                break;

            case 'animalmembranaplasmatica0':
                this.sprite.play('animalmembranaplasmatica0');
                break;

            case 'animalmembranaplasmatica1':
                this.sprite.play('animalmembranaplasmatica1');
                break;

            case 'animalperoxissomo0':
                this.sprite.play('animalperoxissomo0');
                break;

            case 'animalperoxissomo1':
                this.sprite.play('animalperoxissomo1');
                break;

            case 'animalcentriolo0':
                this.sprite.play('animalcentriolo0');
                break;

            case 'animalcentriolo1':
                this.sprite.play('animalcentriolo1');
                break;

            case 'animalmitocondria0':
                this.sprite.play('animalmitocondria0');
                break;

            case 'animalmitocondria1':
                this.sprite.play('animalmitocondria1');
                break;

            case 'animalcitoplasma0':
                this.sprite.play('animalcitoplasma0');
                break;

            case 'animalcitoplasma1':
                this.sprite.play('animalcitoplasma1');
                break;

                ///animal
            case 'vegetalnucleo0':
                this.sprite.play('vegetalnucleo0');
                break;

            case 'vegetalnucleo1':
                this.sprite.play('vegetalnucleo1');
                break;

            case 'vegetalmitocondria0':
                this.sprite.play('vegetalmitocondria0');
                break;

            case 'vegetalmitocondria1':
                this.sprite.play('vegetalmitocondria1');
                break;

            case 'vegetalcloroplasto0':
                this.sprite.play('vegetalcloroplasto0');
                break;

            case 'vegetalcloroplasto1':
                this.sprite.play('vegetalcloroplasto1');
                break;

            case 'vegetalmembranaplasmatica0':
                this.sprite.play('vegetalmembranaplasmatica0');
                break;

            case 'vegetalmembranaplasmatica1':
                this.sprite.play('vegetalmembranaplasmatica1');
                break;

            case 'vegetalparedecelular0':
                this.sprite.play('vegetalparedecelular0');
                break;

            case 'vegetalparedecelular1':
                this.sprite.play('vegetalparedecelular1');
                break;

            case 'vegetalcomplexogolgiense0':
                this.sprite.play('vegetalcomplexogolgiense0');
                break;

            case 'vegetalcomplexogolgiense1':
                this.sprite.play('vegetalcomplexogolgiense1');
                break;

            case 'vegetalcitoesqueleto0':
                this.sprite.play('vegetalcitoesqueleto0');
                break;

            case 'vegetalcitoesqueleto1':
                this.sprite.play('vegetalcitoesqueleto1');
                break;

            case 'vegetalperoxissomo0':
                this.sprite.play('vegetalperoxissomo0');
                break;

            case 'vegetalperoxissomo1':
                this.sprite.play('vegetalperoxissomo1');
                break;

            case 'vegetalribossomos0':
                this.sprite.play('vegetalribossomos0');
                break;

            case 'vegetalribossomos1':
                this.sprite.play('vegetalribossomos1');
                break;

            case 'vegetalcitoplasma0':
                this.sprite.play('vegetalcitoplasma0');
                break;

            case 'vegetalcitoplasma1':
                this.sprite.play('vegetalcitoplasma1');
                break;

            case 'vegetalvacuolo0':
                this.sprite.play('vegetalvacuolo0');
                break;

            case 'vegetalvacuolo1':
                this.sprite.play('vegetalvacuolo1');
                break;

            case 'vegetalreticuloendoplasmatico0':
                this.sprite.play('vegetalreticuloendoplasmatico0');
                break;

            case 'vegetalreticuloendoplasmatico1':
                this.sprite.play('vegetalreticuloendoplasmatico1');
                break;
                //fim questoes

                //organelas
            case 'capsula':
                this.sprite.play('capsula');
                break;

            case 'membranaplasmatica':
                this.sprite.play('membranaplasmatica');
                break;

            case 'citoplasma':
                this.sprite.play('citoplasma');
                break;

            case 'ribossomos':
                this.sprite.play('ribossomos');
                break;

            case 'nucleoide':
                this.sprite.play('nucleoide');
                break;

            case 'flagelo':
                this.sprite.play('flagelo');
                break;

            case 'citoesqueleto':
                this.sprite.play('citoesqueleto');
                break;

            case 'nucleo':
                this.sprite.play('nucleo');
                break;

            case 'lisossomo':
                this.sprite.play('lisossomo');
                break;

            case 'reticuloendoplasmatico':
                this.sprite.play('reticuloendoplasmatico');
                break;

            case 'complexogolgiense':
                this.sprite.play('complexogolgiense');
                break;

            case 'peroxissomo':
                this.sprite.play('peroxissomo');
                break;

            case 'centriolo':
                this.sprite.play('centriolo');
                break;

            case 'mitocondria':
                this.sprite.play('mitocondria');
                break;

            case 'cloroplasto':
                this.sprite.play('cloroplasto');
                break;

            case 'paredecelular':
                this.sprite.play('paredecelular');
                break;

            case 'vacuolo':
                this.sprite.play('vacuolo');
                break;

            case 'vazio':
                this.sprite.play('vazio');
                break;

            case 'posicao1':
                this.sprite.play('posicao1');
                break;

            case 'posicao2':
                this.sprite.play('posicao2');
                break;

            case 'posicao3':
                this.sprite.play('posicao3');
                break;

            case 'posicao4':
                this.sprite.play('posicao4');
                break;

            case 'posicao5':
                this.sprite.play('posicao5');
                break;

            case 'posicao6':
                this.sprite.play('posicao6');
                break;

            case 'posicao7':
                this.sprite.play('posicao7');
                break;

            case 'posicao8':
                this.sprite.play('posicao8');
                break;

            case 'posicao9':
                this.sprite.play('posicao9');
                break;

            case 'posicao10':
                this.sprite.play('posicao10');
                break;

            case 'posicao11':
                this.sprite.play('posicao11');
                break;

            case 'certo':
                this.sprite.play('certo');
                break;

            case 'errado':
                this.sprite.play('errado');
                break;
        }
    }
}