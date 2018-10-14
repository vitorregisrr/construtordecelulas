//0 = procarionte

// 0 = capsula
// 1 = parede celular
// 2 =
// 3 = 
// 4 =
// 5 =
// 6 =
// 7 =


//1 = vegetal

// 0 =
// 1 =
// 2 =
// 3 = 
// 4 =
// 5 =
// 6 =
// 7 =


//2 = vegetal

// 0 =
// 1 =
// 2 =
// 3 = 
// 4 =
// 5 =
// 6 =
// 7 =

// 0 = questao 1
// 1 = questao 2

// 0 = pergunta
// 1 = alternativa 1
// 2 = alternative 2
// 3 = alternativa 3
// 4 = alternativa 4
// 5 = alternativa 5
// 6 = alternativa certa
// index do audio da locução

var questoes = [
    [ // celula procarionte

        [ //capsula
            [ //questao 1
                "Quando escovamos os dentes, realizamos a remoção de biofilme bacteriano depositado sobre os mesmos. O biofilme é uma massa composta por bactérias e por sua matriz extracelular. Os maus hábitos de higiene causam problemas como a cárie, que são perfurações nos dentes causadas por bactérias específicas presentes em biofilmes.Qual o nome da matriz extracelular descrita no texto acima? ",
                "Cápsula",
                "Citoplasma",
                "Ribossomo",
                "Parede Celular",
                "Membrana Plasmática",
                0,
                'procariontecapsula0',
                false
            ],

            [ //questao 2
                "A presença de uma matriz extracelular composta por polissacarídeos (açúcares) ou polipeptídeos (origem proteica) aumenta a probabilidade de bactérias causarem doenças, capacidade denominada de virulência. Isso ocorre porque esta matriz extracelular impede que as bactérias sejam identificadas e destruídas por nossas células de defesa. Qual o nome da matriz extracelular descrita no texto acima?",
                "Cápsula",
                "Nucleoide",
                "Citoplasma",
                "Parede Celular",
                "Membrana Plasmática",
                0,
                'procariontecapsula1',
                false
            ]
        ],

        [ //Parede celular
            [ //questao 1
                "A maioria das bactérias possui parede celular externamente a membrana plasmática. A parede celular é uma estrutura espessa, complexa e semirrígida composta principalmente por peptideoglicano. Qual a principal função da estrutura descrita acima?",
                "Sintese",
                "Proteção",
                "Comando",
                "Transporte",
                "Movimento",
                1,
                'procarionteparedecelular0',
                false
            ],

            [ //questao 2
                "A célula procarionte possui uma estrutura recobrindo a membrana plasmática que tem a função de protege-la contra ruptura e conferir-lhe rigidez, sendo composta principalmente por peptideoglicano. Qual o nome da estrutura descrita a cima?",
                "Cápsula",
                "Nucleoide",
                "Ribossomo",
                "Parede Celular",
                "Membrana Plasmática",
                3,
                'procarionteparedecelular1',
                false
            ]
        ],


        [ //Membrana plasmática
            [ //questao 1
                "A célula procarionte possui uma estrutura que a delimita e tem várias funções, sendo a principal delas a capacidade de controlar o que entra e sai da célula, característica denominada de permeabilidade seletiva. Qual o nome da estrutura descrita acima?",
                "Cápsula",
                "Citoplasma",
                "Ribossomo",
                "Parede Celular",
                "Membrana Plasmática",
                4,
                'procariontemembranaplasmatica0',
                false
            ],

            [ //questao 2
                "O uso de sal em alimentos tem sido utilizado há anos como uma forma de conservação. Isso ocorre porque o excesso de sal elimina a água dos alimentos e, assim, evita-se a proliferação de microrganismos. Qual o nome do processo mencionado a cima",
                "Osmose",
                "Endocitose",
                "Transporte ativo",
                "Difusão simples",
                "Difusão facilitada",
                0,
                'procariontemembranaplasmatica1',
                false
            ]
        ],

        [ //Citoplasmsa
            [ //questao 1
                "Marque a alternativa que contém as estruturas celulas presentes no citoplasma de uma célula procarionte:",
                "Vacúolo, cloroplasto, complexo golgiense, núcleo",
                "Ribossomo, DNA, RNA e proteínas",
                "Peroxissomos, mitocôndrias, centríolos e lisossomos",
                "Mitocôndrias, retículo endoplasmático, complexo golgiese e lisossomos",
                "Centríolos, peroxissomos, lisossomos e retículo endoplasmático",
                1,
                'procariontecitoplasma0',
                false
            ],

            [ //questao 2
                "Todas as células, inclusive a procarionte, possuem em seu interior um fluido de aparência gelatinosa, rico em moléculas orgânicas e organelas. Esse fluido é composto por aproximadamente 80% de água, o que explica a importância deste líquido na composição dos seres vivos. Qual estrutura celular está sendo descrita no texto acima?",
                "Cápsula",
                "Citoplasma",
                "Ribossomo",
                "Parede celular",
                "Membrana plasmática",
                1,
                'procariontecitoplasma1',
                false
            ]
        ],

        [ //Ribossomos
            [ //questao 1
                "No citoplasma das células procariontes, encontram-se grânulos espalhados, que são os locais onde ocorre a síntese de proteínas. As proteínas são biomoléculas essenciais para constituição das células. Qual o nome das estruturas mencionadas acima?",
                "Cápsula",
                "Nucleoide",
                "Ribossomo",
                "Parede celular",
                "Membrana plasmática",
                2,
                'procarionteribossomo0',
                false
            ],

            [ //questao 2
                "Os antibióticos são medicamentos utilizados para o combate de bactérias patogênicas, ou seja, aquelas capazes de provocar doenças. Se um antibiótico inibe a síntese de proteínas, está atuando diretamente sobre qual das estruturas citadas abaixo?",
                "Membrana plasmática",
                "Parede celular",
                "Ribossomo",
                "Nucleoide",
                "Cápsula",
                2,
                'procarionteribossomo1',
                false
            ]
        ],

        [ //Nucleoide
            [ //questao 1
                "As células procariontes diferenciam-se das eucariontes, principalmente, por não possuírem envoltório nuclear. Dessa forma, o DNA fica solto no citoplasma da célula e não dentro do envoltório nuclear. Que nome recebe o material genético descrito acima?",
                "Ribossomo",
                "Lisossomo",
                "Nucleoide",
                "Centríolo",
                "Núcleo",
                2,
                'procariontenucleoide0',
                false
            ],

            [ //questao 2
                "Um antibiótico mata as bactérias ao impedir a duplicação do seu DNA e assim, evita que as mesmas consigam se dividir e multiplicar. Esse antibiótico age sobre:",
                "a membrana plasmática",
                "a parede celular",
                "os ribossomos",
                "o nucleoide",
                "o citoplasma",
                3,
                'procariontenucleoide1',
                false
            ]
        ],

        [ //Flagelo
            [ //questao 1
                "Algumas bactérias possuem a capacidade de se locomover em meio líquido. Para isso, utilizam apêndices móveis em forma de chicote que podem girar no sentido horário ou anti-horário.",
                "Cílio",
                "Flagelo",
                "Centríolo",
                "Filamentos",
                "Pseudópode",
                1,
                'procarionteflagelo0',
                false
            ],

            [ //questao 2
                "Algumas bactérias possuem uma estrutura filamentosa externamente que fica inserida na membrana plasmática, denominada de flagelo, a qual possui a capacidade de girar no sentido horário e anti-horário. Qual a função da estrutura descrita acima?",
                "Digestão celular",
                "Respiração celular",
                "Movimento celular",
                "Secreção de substâncias",
                "Transporte de substâncias",
                2,
                'procarionteflagelo1',
                false
            ]
        ],

    ],

    //celula animal
    [
        [ //Membrana plasmática
            [ //questao 1
                "Quando uma bactéria é englobada por uma célula de defesa do nosso corpo pelo dobramento interno da membrana plasmática e digerida, podemos afirmar que houve uma:",
                "Osmose",
                "Exocitose",
                "Pinocitose",
                "Fagocitose",
                "Clasmocitose",
                3,
                'animalmembranaplasmatica0',
                false
            ],

            [ //questao 2
                "A membrana plasmática é composta por três tipos de biomoléculas. _____________ formam a bicamada fosfolipídica, ______________ constituem os canais por onde passam íons, ____________________ formam o glicocálice junto com os demais componentes.",
                "Os lipídios – as proteínas – os carboidratos. celular",
                "As proteínas – os lipídios – os carboidratos. celular",
                "Os carboidratos – as proteínas – os lipídios celular",
                "Os lipídios – os carboidratos – as proteínas.",
                "As proteínas – os carboidratos – os lipídios.",
                0,
                'animalmembranaplasmatica1',
                false
            ]
        ],

        [ //Citoplasma
            [ //questao 1
                "Marque a alternativa que possui estruturas exclusivas do citoplasma da célula eucarionte animal:",
                "núcleo e ribossomos",
                "flagelo e mitocôndria",
                "lisossomo e centríolos",
                "peroxissomo e citoesqueleto",
                "DNA e retículo endoplasmático",
                2,
                'animalcitoplasma0',
                false
            ],

            [ //questao 2
                "No citoplasma de todas as células (procarionte, eucarionte animal e eucarionte vegetal), podemos encontrar:",
                "DNA e ribossomos",
                "núcleo e proteínas",
                "água e cloroplastos",
                "nucleoide e mitocôndria",
                "vacúolo e peroxissomos.",
                0,
                'animalcitoplasma1',
                false
            ]
        ],

        [ //Mitocôndria
            [ //questao 1
                "Os seres vivos aeróbios (que respiram oxigênio) possuem um processo de produção de energia que envolve, além do gás oxigênio, proveniente da respiração, moléculas de glicose ingeridas pela alimentação. Essas duas moléculas sofrem uma reação química que produz energia, a qual é armazenada em moléculas de ATP. Em qual organela ocorre este processo?",
                "Mitocôndria",
                "Peroxissomo",
                "Lisossomo",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                0,
                'animalmitocondria0',
                false
            ],

            [ //questao 2
                "Uma família está a procura de João, o qual está desaparecido há dois meses. Um corpo foi encontrado pela polícia e exames de DNA foram realizados. O DNA mitocondrial foi o escolhido pelos peritos. Para confirmar se corpo é de João seu DNA deve ser igual ao:",
                "do seu filho",
                "da sua filha",
                "do seu pai",
                "da sua avó paterna",
                "da sua avó materna",
                4,
                'animalmitocondria1',
                false
            ]
        ],

        [ //Complexo de Golgi
            [ //questao 1
                "As proteínas são produzidas nos ribossomos, transportadas pelo retículo endoplasmático rugoso até uma organela, onde serão maturadas e depois destinadas ao local onde vão atuar. A organela descrita no texto é o:",
                "núcleo",
                "lisossomo",
                "peroxissomo",
                "citoesqueleto",
                "complexo de Golgi",
                4,
                'animalcomplexogolgiense0',
                false
            ],

            [ //questao 2
                "O espermatozoide é a única célula humana dotada de flagelo para nadar até encontrar o óvulo. Durante a fecundação, enzimas digestivas são liberadas do acrossomo que digerem as membranas que envolvem o óvulo, permitindo a entrada da cabeça do espermatozoide. Que organela é responsável por produzir o acrossomo?",
                "Núcleo",
                "Centríolo",
                "Mitocôndria",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                3,
                'animalcomplexogolgiense1',
                false
            ]
        ],

        [ //Retículo endoplasmático
            [ //questao 1
                "O fígado realiza o processamento de substâncias tóxicas como drogas e bebidas alcoólicas, transformando-as em substâncias não nocivas ao nosso corpo. A organela celular encontrada, abundantemente, nas células do fígado que desempenha a função descrita acima é a(o):",
                "mitocôndria",
                "lisossomo",
                "citoesqueleto",
                "complexo de Golgi",
                "retículo endoplasmático liso",
                4,
                'animalreticuloendoplasmatico0',
                false
            ],

            [ //questao 2
                "Qual a principal função do retículo endoplasmático rugoso?",
                "modificar lipídios",
                "produzir lipídios",
                "secretar proteínas",
                "transportar proteínas",
                "sintetizar carboidratos",
                3,
                'animalreticuloendoplasmatico1',
                false
            ]
        ],

        [ //Lisossomo
            [ //questao 1
                "Qual a função do lisossomo?",
                "difusão simples",
                "difusão facilitada",
                "transporte ativo",
                "digestão celular",
                "secreção celular",
                3,
                'animallisossomo0',
                false
            ],

            [ //questao 2
                "Os lisossomos são bolsas membranosas que contêm enzimas digestivas. Essa organela se origina após desprendimento de vesículas do: ",
                "Núcleo",
                "Centríolo",
                "Peroxissomo",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                3,
                'animallisossomo1',
                false
            ]
        ],

        [ //Ribossomo
            [ //questao 1
                "Qual a função dos ribossomos?",
                "Produzir proteínas",
                "Secretar proteínas",
                "Digerir proteínas",
                "Maturar proteínas",
                "Excretar proteínas",
                0,
                'animalribossomos0',
                false
            ],

            [ //questao 2
                "Qual o nome dos grânulos presentes em todos os tipos de células, que são responsáveis por produzir proteínas? ",
                "peroxissomos",
                "citoesqueleto",
                "ribossomos",
                "lisossomos",
                "centríolos",
                2,
                'animalribossomos1',
                false
            ]
        ],

        [ //Citoesqueleto
            [ //questao 1
                "No citoplasma das células eucariontes, encontra-se uma estrutura altamente complexa formada por fibras proteicas. Esta estrutura define a forma e organização interna da célula, além de promover o deslocamento de materiais no citoplasma e participar de movimentos celulares. Qual o nome da estrutura descrita acima?",
                "Citoesqueleto",
                "Peroxissomo",
                "Ribossomo",
                "Centríolo",
                "Flagelo",
                0,
                'animalcitoesqueleto0',
                false
            ],

            [ //questao 2
                "O citoesqueleto é composto por microtúbulos, microfilamentos e filamentos intermediários. Este conjunto de estruturas proteicas ficam submersas no citoplasma da célula, formando uma estrutura altamente complexo. Qual a principal função do citoesqueleto?",
                "Digerir resíduos",
                "Proteger a célula",
                "Dar forma a célula",
                "Excretar resíduos",
                "Sintetizar proteínas",
                2,
                'animalcitoesqueleto1',
                false
            ]
        ],

        [ //Centríolos
            [ //questao 1
                "No citoplasma da célula eucarionte animal, observa-se dois tubos ocos, orientados perpendicularmente um ao outro. Estão localizados próximos ao núcleo em uma região denominada centro celular ou centrossomo, de onde partem os microtúbulos do citoesqueleto e são responsáveis pelo movimento celular. Qual estrutura está sendo descrita acima?",
                "Centríolos",
                "Mitocôndria",
                "Lisossomos",
                "Ribossomos",
                "Peroxissomos",
                0,
                'animalcentriolo0',
                false
            ],

            [ //questao 2
                "Qual a função dos centríolos?",
                "Movimento celular",
                "Secreção celular",
                "Excreção celular",
                "Produção de proteínas",
                "Maturação de proteínas",
                0,
                'animalcentriolo1',
                false
            ]
        ],

        [ //Peroxissomo
            [ //questao 1
                "No citoplasma das células eucariontes, encontra-se uma bolsa formada por membrana única que possui enzimas oxidases, as quais oxidam substâncias orgânicas, gerando peróxidos de hidrogênio. Esses peróxidos são tóxicos para as células, dessa forma, há também a ação da catalase, que transforma peróxido de hidrogênio em água e gás oxigênio. Todos os eventos mencionados ocorrem no:",
                "núcleo",
                "centríolo",
                "lisossomo",
                "ribossomo",
                "peroxissomo",
                4,
                'animalperoxissomo0',
                false
            ],

            [ //questao 2 ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                "Qual o nome da organela responsável por oxidar substâncias orgânicas e eliminar o peróxido de hidrogênio resultante, evitando que a célula permaneça em um ambiente tóxico?",
                "núcleo",
                "centríolo",
                "lisossomo",
                "ribossomo",
                "peroxissomo",
                4,
                'animalperoxissomo1',
                false
            ]
        ],

        [ //Nucleo
            [ //questao 1
                "A maior organela da célula eucarionte animal é responsável por armazenar o material genético e hereditário, que define as características morfológicas e fisiológicas dos animais. Essa organela é ____________________.",
                "o núcleo",
                "o cloroplasto",
                "a mitocôndria",
                "o Citoplasma",
                "a membrana plasmática",
                0,
                'animalnucleo0',
                false
            ],

            [ //questao 2
                "Como denominamos as células que possuem envoltório nuclear e sistema de endomembranas?",
                "Aeróbias",
                "Eucariontes",
                "Autotróficas",
                "Procariontes",
                "Heterotróficas",
                1,
                'animalnucleo1',
                false
            ]
        ],
    ],

    
    [ //celula vegetal

        [ //Membrana plasmática
            [ //questao 1
                "O transporte de água pela membrana plasmática é chamado de osmose. A célula vegetal quando imersa em meio hipotônico, absorve água. Porém, não se rompe devido a presença de:",
                "cílios",
                "glicocálice",
                "parede celular",
                "bicamada lipídica",
                "proteínas de membrana",
                2,
                'vegetalmembranaplasmatica0',
                false
            ],

            [ //questao 2
                "Como se denomina o transporte de substâncias pela membrana plasmática sem gasto de energia e com auxílio de proteínas carreadoras?",
                "Difusão facilitada",
                "Difusão simples",
                "Endocitose",
                "Exocitose",
                "Osmose",
                0,
                'vegetalmembranaplasmatica1',
                false
            ]
        ],

        [ //Cloropasto
            [ //questao 1
                "Organela com dupla membrana, que contém em seu interior uma porção líquida denominada de estroma e pilhas de pequenas bolsas achatadas, os tilacoides. Essa organela contém o pigmento verde clorofila, responsável por captar a luz solar durante a fotossíntese. A qual organela este texto se refere?",
                "Vacúolo",
                "Ribossomo",
                "Cloroplasto",
                "Mitocôndria",
                "Peroxissomo",
                2,
                'vegetalcloroplasto0',
                false
            ],

            [ //questao 2
                "No cloroplasto, ocorre a produção de glicose a partir do dióxido de carbono da atmosfera, da água absorvida do solo pela planta e da luz solar. Qual o nome do processo descrito?",
                "Secreção",
                "Aerobiose",
                "Respiração",
                "Fotossíntese",
                "Transpiração",
                3,
                'vegetalcloroplasto1',
                false
            ]
        ],

        [ //Vacúolo
            [ //questao 1
                "A célula vegetal tem seu citoplasma preenchido por até 90% do seu volume por uma bolsa membranosa que tem por função o armazenamento de substâncias. Qual o nome desta estrutura?",
                "Vacúolo",
                "Lisossomo",
                "Peroxissomo",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                0,
                'vegetalvacuolo0',
                false
            ],

            [ //questao 2
                "Para que uma planta aquática consiga flutuar na água deve armazenar no vacúolo de suas células, principalmente no caule,:",
                "ar",
                "sais",
                "água",
                "amido",
                "glicogênio",
                2,
                'vegetalvacuolo1',
                false
            ]
        ],

        [ //Parede celular
            [ //questao 1
                "Qual o nome da estrutura que recobre externamente a célula vegetal e é formada, principalmente, por celulose?",
                "Membrana plasmática",
                "Parede celular",
                "Cloroplasto",
                "Cápsula",
                "Vacúolo",
                1,
                'vegetalparedecelular0',
                false
            ],

            [ //questao 2
                "A parede celular das células vegetais é uma estrutura rígida que as circunda, sendo formada, principalmente, por um polímero de glicose denominado de:",
                "amido",
                "lignina",
                "pectina",
                "celulose",
                "glicogênio",
                3,
                'vegetalparedecelular1',
                false
            ]
        ],

        [ //Citoplasma
            [ //questao 1
                "Qual estrutura é encontrada, exclusivamente, no citoplasma de células vegetais?",
                "Cloroplasto",
                "Mitocôndria",
                "Peroxissomo",
                "Ribossomos",
                "Núcleo",
                0,
                'vegetalcitoplasma0',
                false
            ],

            [ //questao 2
                "Qual a maior organela encontrada no citoplasma de células vegetais, que possui a função de armazenar substâncias?",
                "Núcleo",
                "Vacúolo",
                "Cloroplasto",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                1,
                'vegetalcitoplasma1',
                false
            ]
        ],

        [ //Reticulo endoplasmático
            [ //questao 1
                "O retículo endoplasmático é uma rede de bolsas achatadas e canais tubulares interligados originados do sistema de endomembranas. A principal função do retículo endoplasmático é:",
                "transporte de substâncias",
                "secreção de substâncias",
                "excreção de substâncias",
                "maturação de substâncias",
                "produção de substâncias",
                0,
                'vegetalreticuloendoplasmatico0',
                false
            ],

            [ //questao 2
                "O retículo endoplasmático rugoso (RER) diferencia-se do retículo endoplasmático liso (REL), principalmente, por possuir aderidos à sua superfície:",
                "centríolos",
                "ribossomos",
                "lisossomos",
                "peroxissomos",
                "microtúbulos",
                1,
                'vegetalreticuloendoplasmatico1',
                false
            ]
        ],

        [ //Complexo de golgi
            [ //questao 1
                "O complexo de Golgi recebe as proteínas que foram produzidas nos ribossomos e transportadas pelo retículo endoplasmático rugoso. As proteínas são maturadas no complexo de Golgi e algumas delas são lançadas para fora da célula no processo denominado de:",
                "pinocitose",
                "fagocitose",
                "digestão celular",
                "excreção celular",
                "secreção celular",
                4,
                'vegetalcomplexogolgiense0',
                false
            ],

            [ //questao 2
                "Estão disponíveis cinco culturas de microalgas para produção de ágar, um polissacarídeo utilizado na alimentação humana, para dar consistência gelatinosa aos alimentos. A porcentagem de complexo de Golgi nas culturas é a seguinte: A – 45%, B – 33%, C – 37%, D - 50% e E – 29%. Em qual cultura haverá maior secreção de ágar:",
                "A",
                "B",
                "C",
                "D",
                "E",
                3,
                'vegetalcomplexogolgiense1',
                false
            ]
        ],

        [ //Peroxissomo
            [ //questao 1 //precisa corrigir as alternativas estao mt grandes
                "Os peroxissomos são bolsas membranosas que contém enzimas. Sobre esta organela marque a alternativa incorreta",
                "Oxidam substâncias orgânicas",
                "São responsáveis pela digestão celular",
                "Produzem peróxido de hidrogênio",
                "Possuem a catalase que transforma H2O2 em H2O e O2",
                "Possuem um tipo especial encontrado nas plantas, o glioxissomo",
                1,
                'vegetalperoxissomo0',
                false
            ],

            [ //questao 2
                "Quando se coloca água oxigenada (H2O2) em um ferimento, observa-se o desprendimento de gás, formando bolhas. Isso ocorre devido à enzima catalase que degrada a água oxigenada em água e oxigênio. Em qual organela a catalase é armazenada?",
                "Lisossomo",
                "Ribossomo",
                "Peroxissomo",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                2,
                'vegetalperoxissomo1',
                false
            ]
        ],

        [ //Citoesqueleto
            [ //questao 1 
                "Marque a alternativa que não apresenta uma função exercida pelo citoesqueleto:",
                "Definir a forma da célula",
                "Organizar a estrutura interna da célula",
                "Secretar proteínas para o meio extracelular",
                "Promover o deslocamento de materiais no citoplasma",
                "Movimentar cromossomos durantes as divisões celulares",
                2,
                'vegetalcitoesqueleto0',
                false
            ],

            [ //questao 2
                "O citoesqueleto é um complexo estrutural mergulhado no citosol das células eucarióticas, que é composto por três tipos de moléculas. Marque a alternativa que apresenta um componente do citoesqueleto:",
                "Filamentos de queratina",
                "Filamentos de miosina",
                "Filamentos de lignina",
                "Filamentos de quitina",
                "Filamentos de actina",
                4,
                'vegetalcitoesqueleto1',
                false
            ]
        ],
        
        [ //mitocondria
            [ //questao 1
                "Segundo a teoria endossimbiótica, duas organelas celulares eram células procariontes que foram englobadas por células eucariontes e estabeleceram uma relação de benefício para ambas as partes. Uma é capaz de produzir energia e a outra participa da fotossíntese. Essas organelas são, respectivamente:",
                "o retículo endoplasmático e o centríolo",
                "o lisossomo e o complexo de Golgi",
                "a mitocôndria e o cloroplasto",
                "o ribossomo e o peroxissomo",
                "o núcleo e o citoesqueleto",
                2,
                'vegetalmitocondria0',
                false
            ],

            [ //questao 2
                "O espermatozoide é formado pela cabeça, peça intermediária e cauda. A peça intermediária tem a função de produzir energia para que o movimento da cauda ocorra. Qual organela participa da composição da peça intermediária?",
                "Núcleo",
                "Centríolo",
                "Mitocôndria",
                "Complexo de Golgi",
                "Retículo endoplasmático",
                2,
                'vegetalmitocondria1',
                false
            ]
        ],


        [ //Ribossomos
            [ //questao 1
                "Os ribossomos são grânulos formados por RNA ribossômico e proteínas, possuem a função de sintetizar proteínas e são encontrados:",
                "no citoplasma e no retículo endoplasmático.",
                "na membrana plasmática e no cloroplasto",
                "no núcleo e no complexo de Golgi",
                "na mitocôndria e no citoesqueleto",
                "no vacúolo e no peroxissomo",
                0,
                'vegetalribossomos0',
                false
            ],

            [ //questao 2
                "Os ribossomos são grânulos encontrados tanto em células procariontes quanto em eucariontes. Porém, nas células procariontes são encontrados apenas ______________________ enquanto que, nas eucariontes, também podem estar ___________________________. Marque a alternativa que preenche corretamente as lacunas:",
                "na membrana plasmática; no complexo de Golgi",
                "no citoplasma; no retículo endoplasmático rugoso",
                "no nucleoide; na mitocôndria",
                "no plasmídeo; no citoesqueleto",
                "na cápsula; no cloroplasto",
                1,
                'vegetalribossomos1',
                false
            ]
        ],

        [ //Nucleo
            [ //questao 1
                "Marque a alternativa que indica a principal função do núcleo:",
                "proporcionar a excreção celular",
                "comandar as atividades da célula",
                "fazer o movimento da célula",
                "promover a digestão celular",
                "realizar a secreção celular",
                1,
                'vegetalnucleo0',
                false
            ],

            [ //questao 2
                "Organela celular envolta por membrana dupla com poros que permitem a passagem de substâncias. No interior desta organela, encontra-se sua porção aquosa onde estão mergulhados a cromatina e o nucléolo, além de substâncias dissolvidas. A organela descrita é",
                "o DNA",
                "o núcleo",
                "o vacúolo",
                "o ribossomo",
                "o peroxissomo",
                1,
                'vegetalnucleo1',
                false
            ]
        ],

    ],

];