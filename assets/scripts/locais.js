//Fazendo alguns textes com javascript para printar na página.
//Ainda não implementado, talvez eu descarte a ideia.

//Uma array com objetos que guarda informações sobre os lugares.

const estados = [
    {
        nome: "São Paulo",
        pontos_turistico: [
            {
                nome: "Monte Serrat",
                municipio: "Santos",
                imagem: "aleatorio/monteSerrat.jpg",
                descricao: "Funicular de Monte Serrat é o transporte existente no Monte Serrat, na cidade brasileira de Santos e que funciona por meio de bondes transitando sob um sistema funicular planejado em 1910, só executado no ano de 1923 pela então Sociedade Anônima Elevador Monte Serrat, cuja inauguração foi em junho de 1927."
            },
            {
                nome: "Museu Pelé",
                municipio: "Santos",
                imagem: "aleatorio/museuPelé.jpg",
                descricao: "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras."
            },
            {
                nome: "Museu do Café",
                municipio: "Santos",
                imagem: "aleatorio/museu do café.jpg",
                descricao: "O prédio do Museu do Café foi inaugurado em 7 de setembro de 1922, no centenário da Independência do Brasil. O edifício foi erguido em Santos, então maior praça de café do mundo, e sediava a Bolsa Oficial do Café. O último pregão aconteceu na década de 1950 e, até 1986, quando foi desativado, funcionou para divulgar a cotação do café no mercado internacional. Após dez anos fechado, foi restaurado em parceria com o Governo Mário Covas e reinaugurado em 1998."
            },
            {
                nome: "Memorial das Conquistas",
                municipio: "Santos",
                imagem: "aleatorio/memorial das conquistas.jpg",
                descricao: "Um museu localizado no Estádio Urbano Caldeira (mais conhecido como Vila Belmiro), em Santos, e reúne registros e objetos da história e principais conquistas do Santos Futebol Clube. O museu conta com 380 metros quadrados,[que leva o visitante a diferentes momentos importantes da história do clube, onde diversas atrações estão presentes, tais como fotos, uniformes de ídolos, bolas históricas e troféus. O ambiente, organizado por temas, dispõem também de espaços com a história dos ídolos do clube, como Pelé e Neymar, e vídeos dos grandes momentos."
            },
            {
                nome: "Aquário de santos",
                municipio: "Santos",
                imagem: "aleatorio/aquário de santos.jpg",
                descricao: "O Aquário Municipal de Santos localiza-se no bairro da Ponta da Praia, na cidade de Santos, estado de São Paulo, Brasil. Está situado em uma área de dois mil metros quadrados, 32 tanques de água doce e salgada com mais de 200 espécies de animais. Inaugurado em 2 de julho de 1945 por Getúlio Vargas, foi um dos primeiros aquários públicos construídos no estado de São Paulo e recebe cerca de 500 mil visitantes por ano, sendo uma das principais atrações turísticas de Santos."
            },
            {
                nome: "Mercado Municipal de Campinas",
                municipio: "Campinas",
                imagem: "aleatorio/mercado municipal de campinas.jpg",
                descricao: "Foi inaugurado em 12 de abril de 1908. O edifício foi construído inicialmente para servir como armazém de estocagem dos produtos transportados pela ferrovia Funilense. Comprado pela prefeitura, foi reformado e transformado em Mercado Municipal. Obra do arquiteto Ramos de Azevedo, o mercado foi projetado em um pitoresco estilo neomourisco."
            },
            {
                nome: "Estação Cultura - Prefeito Antônio da Costa Santos",
                municipio: "Campinas",
                imagem: "aleatorio/Estação Cultura - Prefeito Antônio da Costa Santos.jpg",
                descricao: "A Estação Cultura “Prefeito Antônio da Costa Santos”, também conhecida como Estação de Campinas, Estação Central de Campinas ou Estação da Fepasa, é a antiga estação ferroviária central da cidade de Campinas, no interior do estado de São Paulo, no Brasil e desde 2002, funciona como um centro cultural. Foi eleita, em 2007, uma das Sete Maravilhas da Cidade."
            },
            {
                nome: "Catedral Metropolitana de Campinas",
                municipio: "Campinas",
                imagem: "aleatorio/Catedral Metropolitana.jpg",
                descricao: "inaugurada em 1883, localiza-se na Praça José Bonifácio - popularmente conhecida como Largo da Catedral, no centro da cidade de Campinas, no interior do estado de São Paulo, Brasil. É a sede da Paróquia Nossa Senhora da Conceição, sendo a organização religiosa mais antiga de Campinas, e do bispado de Campinas, foi instalada em 1908."
            },
            {
                nome: "Jockey Club Campineiro",
                municipio: "Campinas",
                imagem: "aleatorio/jockey club capineiro.jpg",
                descricao: "O Jockey Club Campineiro é um prédio histórico localizado no Centro da cidade brasileira de Campinas. O prédio, em estilo eclético e com elementos do art nouveau e da neorrenascença, teve sua construção concluída em 1925, tendo sido eleito em 2008 uma das Sete Maravilhas de Campinas. Possui 1 371,8 metros quadrados e três pavimentos."
            },
            {
                nome: "Torre do Castelo",
                municipio: "Campinas",
                imagem: "aleatorio/Torre do Castelo.jpg",
                descricao: "A Torre do Castelo - Vítor Negrete é uma caixa d'água do tipo castelo d'água, construída no estilo art déco, com 27 metros de altura, localizada na Praça 23 de Outubro, no bairro Jardim Chapadão, na cidade de Campinas, no Brasil. Foi construída entre 1936 e 1940 com capacidade original para 250 000 litros de água, para abastecer a região norte da cidade. Situada a aproximadamente 735 metros de altitude, é um dos pontos mais altos dentro do perímetro urbano de Campinas, além de ser um marco geodésico e possuir, em seu topo, um mirante que permite ver vários bairros da cidade."
            },
            {
                nome: "Hípica Centaurus",
                municipio: "Tatuí",
                imagem: "aleatorio/hipica centaurus.jpg",
                descricao: "A Hípica Centaurus nasceu em 2003 e desde abril de 2007 proporciona a Tatuí e região uma opção para aulas de equitação e estabulagem. A ideia de estabelecer em Tatuí foi a de criar um lugar adequado aos esportistas e suas famílias. A Centaurus está localizada na Rodovia Senador Laurindo Minhoto, no trevo da Ceagesp."
            },
            {
                nome: "Museu Paulo Setúbal",
                municipio: "Tatuí",
                imagem: "aleatorio/museuPauloSetubal.jpg",
                descricao: 'O Museu Paulo Setúbal, em Tatuí (SP), é considerado um dos principais pontos turísticos da cidade e um dos museus mais visitados do interior de São Paulo, segundo um levantamento do Instituto de Pesquisas. O espaço foi criado em 1966 e conta com um acervo de 500 objetos que trazem a história de Tatuí (SP), dos moradores e de como a cidade se transformou na "Capital da Música". De acordo com o gestor do museu, Rogério Vianna, o prédio, que foi construído em 1920, já foi uma cadeia e, posteriormente, o fórum da cidade. Porém, em 1962 se tornou a Casa de Cultura Paulo Setúbal e, quatro anos depois, se transformou no museu.'
            },
            {
                nome: "Sítio do Carroção",
                municipio: "Tatuí",
                imagem: "aleatorio/sitio do carroção.jpg",
                descricao: "O Sítio do Carroção é o único resort pedagógico do Brasil. Inspirado em Mark Twain, Júlio Verne, Monteiro Lobato, Steven Spielberg e outros, o Sítio do Carroção criou e produziu lazer e entretenimento educativo de qualidade surpreendente. Durante o ano letivo, recebemos alunos das melhores escolas do país e nas férias de inverno, verão e carnaval, crianças e adolescentes de 5 a 16 anos de todo o Brasil e do exterior, vivem um mundo de aventuras inesquecíveis, muita diversão e novas amizades."
            },
            {
                nome: "Teatro Procópio Ferreira",
                municipio: "Tatuí",
                imagem: "aleatorio/teatro procopio ferreira.jpg",
                descricao: 'O Teatro Procópio Ferreira é uma sala de espetáculos localizada na cidade de São Paulo construída em 1948 por Gastão Rachou na rua Augusta. O teatro foi também, durante seis anos, o cenário do popular programa humorístico "Sai de Baixo" da Rede Globo. O nome do teatro é uma homenagem ao ator Procópio Ferreira.'
            },
            {
                nome: "Igreja Matriz Nossa Senhora da Imaculada",
                municipio: "Tatuí",
                imagem: "aleatorio/Igreja matriz da nossa senhora  da imaculada.jpg",
                descricao: "A Paróquia Nossa Senhora da Imaculada Conceição é uma paróquia da Diocese de Presidente Prudente localizada no município de Taciba. A fundação ocorreu em 15 de agosto de 1957 por Dom José Lázaro Neves, então bispo da Diocese de Assis."
            },
            {
                nome: "Parque Estadual da Ilha Anchieta",
                municipio: "Ubatuba",
                imagem: "aleatorio/Parque Estadual da Ilha Anchieta.jpg",
                descricao: "Localizado no município de Ubatuba, o Parque Estadual da Ilha Anchieta é uma área de proteção ambiental criado através do decreto de lei 9 629 de 29 de Março de 1977 do Estado de São Paulo e administrado pelo Instituto Florestal, órgão vinculado à Secretaria Estadual do Meio Ambiente."
            },
            {
                nome: "Igreja Exaltação da Santa Cruz Matriz",
                municipio: "Ubatuba",
                imagem: "aleatorio/igrejaExaltacao.jpeg",
                descricao: "A igreja matriz batalhense foi construída durante o reinado de D. Manuel I. A sua erecção, iniciada em 1514, resulta de um pedido dos habitantes da recém-criada vila e paróquia, pois a pequena igreja de Santa Maria-a-Velha já não comportava o número de fiéis da vila. A obra foi acabada em 1532, conforme inscrição no portal, mas a Confraria da Misericórdia da Batalha, à época dona do templo, ainda investiu avultadas somas, pelo menos até 1537, na conclusão do monumento."
            },
            {
                nome: "Praça da Baleia",
                municipio: "Ubatuba",
                imagem: "aleatorio/Praça da Baleia.jpg",
                descricao: "Praça da Baleia, em Rio das Ostras, é uma área de lazer e contemplação que abriga a escultura de 20 metros de comprimento de uma baleia-jubarte, assinada pelos artistas plásticos Roberto Sá e Clara Arthaud. A ideia da escultura surgiu das periódicas visitas de baleias desta espécie que se aproximam da costa brasileira em seu período de acasalamento, reprodução e amamentação. Por isso, é comum avistar o mamífero seguido de seu filhote na região durante o inverno e a primavera."
            },
            {
                nome: "Aquário de Ubatuba",
                municipio: "Ubatuba",
                imagem: "aleatorio/Aquário de Ubatuba.jpg",
                descricao: "O Aquário de Ubatuba é um aquário localizado em Ubatuba, com a missão de preservar e difundir a biodiversidade. Trata-se de uma instituição privada, criada em janeiro de 1996. No acervo, há principalmente tanques médios e um grande. Há ambientes com organismos de água doce e salgada, priorizando a taxonomia das espécies. Um dos espaços busca permitir a compreensão de ecossistemas, como mangue e recife de corais. Um dos destaques do acervo é um tubarão-lixa, recuperado de um proprietário particular."
            },
            {
                nome: "Praia da Enseada",
                municipio: "Ubatuba",
                imagem: "aleatorio/praia da enseada.jpg",
                descricao: "A Praia da Enseada atrai também os interessados em esportes náuticos como: a prática de vela e o Windsurf. A partir da praia da Enseada em uma ponta é possível acessar através de uma trilha a Prainha da Enseada, a praia de Fora, entre outras, e finaliza na praia do Godói ou Tapiá. E na outra ponta fica um belíssimo Mirante com vista para o Pico do Corcovado. Alguns desses acessos é muito indicado que sejam feitos com o acompanhamento de monitores e guias experientes."
            },
            {
                nome: "Refúgio Ducha De Prata Hotel",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/Refúgio Ducha De Prata Hotel.jpg",
                descricao: "O Refúgio Ducha De Prata é um apartamento, localizado a apenas 2.8 km do Palácio Boa Vista. Para aqueles que viajam de carro, o apartamento oferece estacionamento grátis no local.<br><br><strong>Localização</strong><br>A acomodação está situada numa viagem de 5 minutos do Parque da Floresta Encantada. O centro da cidade de Campos do Jordão fica a 3 km de distância. Com comida brasileira, o Restaurante Krokodillo I está a aproximadamente 5 minutos de distância. O local desfruta da proximidade do Centro Comercial Cadij. Leva 25 minutos a pé da estação de trem Emílio Ribas.<br><br><strong>Quartos</strong><br>As comodidades do quarto são o pátio, as máquinas de café/chá e o sofá. O banheiro com bidê e chuveiro também é fornecido.<br><br><strong>Comer & Beber</strong><br>Os hóspedes podem fazer uso de microondas, chaleira elétrica e utensílios de cozinha."
            },
            {
                nome: "Pico do Itapeva",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/jockey club capineiro.jpg",
                descricao: "Com uma das vistas mais bonitas da Serra da Mantiqueira, o Pico do Itapeva é um passeio imperdível para os amantes da natureza, pois a paisagem do local é encantadora.<br> O Pico do Itapeva é ideal para se contemplar a natureza, fica a 2.030 metros de altitude, sendo possível avistar 15 cidades, todas da região do Vale do Paraíba, entre elas a mais famosa é a cidade de Aparecida (devido ao grande número de fiéis que visitam a Basílica). Conheça os nomes das cidades: Tremembé, Taubaté, Caçapava, São José dos Campos, Pindamonhangaba, Guaratinguetá, Aparecida, Roseira, Lorena, Potim, Cruzeiro, Piquete, Moreira César, Cachoeira Paulista e Eugênio de Melo."
            },
            {
                nome: "Vila Capivari",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/vila capivari bairro.jpg",
                descricao: "A Vila Capivari é um dos bairros mais famosos de Campos do Jordão - SP, com construções que remetem à Europa, além de bares, restaurantes e outras atrações.<br> Vila Capivari é um bairro nobre da cidade brasileira de Campos do Jordão, SP. Localizado na região central jordanense é um dos principais destinos turísticos do município. Apresenta bares, praças, restaurantes, lojas especializadas em malhas, chocolates, artesanato e souvenirs, e hotéis.<br> A maioria de suas construções são baseadas na arquitetura europeia. O centro do bairro concentra grande parte da vida noturna. Nele situa-se também o teleférico do Morro do Elefante, localizado no Parque de Capivari, que leva os turistas a 1800 metros de altitude. Do cume é possível ter uma visão panorâmica e privilegiada.<br> Há também o Bondinho Urbano que percorre as vilas jordanenses de Capivari, Jaguaribe e Abernéssia, além da Estrada de Ferro de Campos do Jordão liga Campos à Pindamonhangaba, passando por Santo Antônio do Pinhal e a Serra da Mantiqueira."
            },
            {
                nome: "Praça São Benedito",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/vila capivari.jpg",
                descricao: "De acordo com os visitantes, essas são as características do passeio: No local existem várias lojas, a Galeria do Baden Baden e na praça, brinquedos para crianças. Existe a Chocolateria Esquilo na esquina. Há também a bela igreja de São Benedito e ao lado, uma galeria com diversos produtos, com preços acessíveis. Belo passeio.<br> É linda tanto de noite como de dia. Campos do Jordão em si é linda. A cidade é mais movimentada no inverno (Julho,Agosto) pois se encaixa perfeitamente no clima romântico. Aliás, não tem preço ter um pedacinho da Europa perto de casa. A praça não pode ficar fora da sua lista!<br> A praça reúne tudo e todos. Durante o festival de inverno acontecem vários eventos entre shows e concertos. Fácil acesso ao comércio, restaurantes, estacionamentos, uma igreja linda.Ao visitar a cidade e a praça, não deixe de visitar nossa loja!"
            },
            {
                nome: "Parque Amantikir",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/amantikir.jpg",
                descricao: "O Parque Amantikir é fruto da mistura de dois ingredientes: insatisfação e encantamento. Estes ingredientes, aparentemente contraditórios, porém importantíssimos na realização do parque, foram essenciais na história do engenheiro agrônomo e paisagista Walter Vasconcellos. Nascido em Campos do Jordão e apaixonado pela cidade, após viajar por dezenas de parques e jardins na Europa, Estados Unidos e Canadá, voltava das férias sempre com a sensação de que sua cidade merecia um espaço tão encantador quanto aqueles que visitava. Parecia-lhe injusto: nem mesmo os proprietários dos jardins, a quem prestava serviços como Dr. Garden, tinham a oportunidade de desfrutar da plenitude de jardins tão belos.<br> Essa inquietação foi essencial para germinar a semente de um jardim aberto ao público. Construído numa área que antes abrigava o Haras Serra Azul, o sonho ganhou força através do aporte financeiro de amigos e clientes do Dr. Garden. No dia 25 de agosto de 2007, foi criado o Amantikir e após mais de uma década de história, o parque já recebeu milhares de visitantes, de diversas partes do mundo."
            },
            {
                nome: "Palácio Boa vista ",
                municipio: "Campos do Jordão",
                imagem: "aleatorio/palácioBoaVista.jpg",
                descricao: "De residência Oficial do Governador do Estado de São Paulo a museu: no alto da Serra da Mantiqueira, em Campos do Jordão está situado o Palácio Boa Vista. Fica numa área de quase 3 mil metros quadrados, dividida em 35 ambientes e 105 cômodos.<br> O Palácio Boa Vista, ou Palácio do Governador como é conhecido, abriga um acervo com cerca de 2 mil peças, entre mobiliário dos séculos 17, 18, 19 e 20, porcelanas, peças religiosas, pratarias, pinturas e esculturas. O projeto original de 1940, do arquiteto polonês Jorge Przrembel, foi alterado e sua fachada atual tem estilo característico dos castelos europeus.<br> Foi somente a partir do governo Abreu Sodré (1964 a 1969) que o Palácio passou a receber obras de arte para decoração. A aquisição da coleção, em 1969 e no início da década de 1970, sob o comando de Luis Arrobas Martins, privilegiou o modernismo brasileiro na pintura e na escultura e o barroco no mobiliário e nas imagens sacras.<br> No ano de 1970, a realização de um evento nos moldes do Festival de Mozart, em Salsburgo, na Áustria, dá origem ao Festival de Inverno de Campos de Jordão. A partir de 1970, o palácio-museu passa a abrigar obras de arte de grande valor histórico e artístico, especialmente da arte moderna brasileira dos anos de 1910 a 1960, completando todo o percurso do modernismo brasileiro.<br> Além disso, seu acervo conta com uma importante coleção de arte sacra do século 18 e mobiliário artístico brasileiro do século 17 ao 20, exemplares produzidos pelo Liceu de Artes e Ofícios de São Paulo nos anos de 1960. É o caso, especialmente, do belo trabalho de parquet nos pisos de vários ambientes e dos revestimentos internos das paredes, janelas e portas."
            }
        ]
    },
    {
        nome: "Minas Gerais",
        pontos_turistico: [
            {
                nome: "Araxa",
                municipio: "a",
                imagem: "minas_gerais/Araxa.jpg",
                descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum dolore officia nobis consequatur? Corrupti excepturi corporis repudiandae doloremque. Quod sint dolores doloribus veritatis aut veniam animi accusamus neque ullam"
            },
            {
                nome: "Belo Horizonte",
                municipio: "",
                imagem: "minas_gerais/Belo-Horizonte.jpg",
                descricao: "Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer."        
            },
            {
                nome: "Diamantina",
                municipio: "a",
                imagem: "minas_gerais/Diamantina.jpg",
                descricao: "A ser feito"
            }
        ]
    },
    {
        nome: "Pernambuco",
        pontos_turistico: [
            {
                nome: "Fernando de Noronha",
                municipio: "Pernambuco",
                imagem: "pernambuco/fernando-de-noronha.jpg",
                descricao: "É um arquipélago brasileiro do estado de Pernambuco.. Formado por 21 ilhas,, ilhotas e rochedos de origem vulcânica, ocupa uma área total de 26 km²."        
            },
            {
                nome: "Porto de Galinhas",
                municipio: "Ipojuca",
                imagem: "pernambuco/porto-de-galinhas.jpg",
                descricao: "É uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil. A região possui piscinas de águas claras e mornas formadas entre corais, e coqueirais."     
            },
            {
                nome: "Recife",
                municipio: "Recife",
                imagem: "pernambuco/recife.jpg",
                descricao: "É um município brasileiro, capital do estado de Pernambuco, localizado na Região Nordeste do país. Com área territorial de aproximadamente 218 km², é formado por uma planície aluvial, tendo as ilhas, penínsulas e manguezais."
            },
            {
                nome: "Praia de Tamandaré",
                municipio: "Tamandaré",
                imagem: "pernambuco/tamandare.jpg",
                descricao: "É uma das mais lindas praias do litoral nordestino. Possui uma extensa faixa de areia dourada, um mar bastante tranquilo, águas cristalinas e muitos coqueiros."        
            }
        ]
    },
    {
        nome: "Bahia",
        pontos_turistico: [
            {
                nome: "Pelourinho",
                municipio: "Salvador",
                imagem: "bahia/pelourinho.jpg",
                descricao: "Popularmente chamado de Pelô, é um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de Jesus até o Largo do Pelourinho."    
            },
            {
                nome: "São Desidério",
                municipio: "São Desidério",
                imagem: "bahia/sao_desiderio.jpg",
                descricao: "É uma cidadezinha que fica na região oeste da Bahia localizada a 900 km de Salvador, e vem ganhando fama entre os turistas que são apaixonados por natureza."  
            },
            {
                nome: "Elevador Lacerda",
                municipio: "Salvador",
                imagem: "bahia/elevador_lacerda.jpg",
                descricao: "É um sistema de transporte público da cidade de Salvador, capital do estado brasileiro da Bahia. Trata-se do primeiro elevador urbano do mundo."
            },
            {
                nome: "Mercado Modelo",
                municipio: "Salvador",
                imagem: "bahia/mercado_modelo.jpg",
                descricao: "O Mercado Modelo é um mercado de artesanato localizado na cidade de Salvador, estado da Bahia, no Brasil. Foi inaugurado em 2 de fevereiro de 1912, e ocupa, desde 1971, o prédio da antiga Alfândega de Salvador."
            }
        ]
    },
    {
        nome: "Amazonas",
        pontos_turistico: [
            {
                nome: "Teatro de Manaus",
                municipio: "Manaus",
                imagem: "aleatorio/teatro amazonas.jpg",
                descricao: "O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão-postal da cidade de Manaus. Localizado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo."
            },
            {
                nome: "Palácio Rio Negro",
                municipio: "Manaus",
                imagem: "aleatorio/palacio rio negro.jpg",
                descricao: "O Palácio Rio Negro é um edifício histórico localizado em Manaus, Amazonas, Brasil. Ele foi construído para servir como residência oficial do governador do estado do Amazonas e sede do governo estadual. O palácio foi construído em 1903 e é um exemplo da arquitetura neoclássica. Atualmente, o Palácio Rio Negro é um centro cultural que abriga exposições, eventos e atividades culturais.",
            },
            {
                nome: "Encontro das águas",
                municipio: "Manaus",
                imagem: "aleatorio/encontro das aguas.jpg   ",
                descricao: "O encontro das águas é um fenômeno natural facilmente visto em muitos rios da Amazônia. Os fatores para isso ocorrer na região variam desde questões geológicas, climáticas, termais ou até mesmo o tamanho ou a acidez dos rios. O mais famoso encontro das águas está localizado na frente da cidade de Manaus, entre os rios Negro e Solimões, sendo uma das principais atrações turísticas da capital amazonense.",
            },
            {
                nome: "Mercado Municipal Adolpho Lisboa",
                municipio: "Manaus",
                imagem: "aleatorio/mercado municipal adolpho lisboa.jpg",
                descricao: "O Mercado Municipal Adolpho Lisboa, também conhecido como Mercadão,] está localizado às margens do rio Negro, no Centro da cidade de Manaus, capital do estado do Amazonas. Construído durante o ciclo da borracha com material importado da Europa, sua estrutura em ferro fundido foi projetada pelo engenheiro francês Gustave Eiffel, o mesmo que projetou e deu seu nome à famosa Torre Eiffel de Paris.",
            }
        ]
    }
]