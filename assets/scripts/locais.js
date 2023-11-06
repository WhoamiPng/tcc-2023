//Fazendo alguns textes com javascript para printar na página.
//Ainda não implementado, talvez eu descarte a ideia.

//Uma array com objetos que guarda informações sobre os lugares.
const locais = [
    {
        estado: "Minas Gerais",
        nome: "Araxa",
        imagem: "Araxa.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum dolore officia nobis consequatur? Corrupti excepturi corporis repudiandae doloremque. Quod sint dolores doloribus veritatis aut veniam animi accusamus neque ullam"
    },
    {
        estado: "Minas Gerais",
        nome: "Belo Horizonte",
        imagem: "Belo-Horizonte.jpg",
        descricao: "Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer."
    },
    {
        estado: "Minas Gerais",
        nome: "Diamantina",
        preco: "3.000",
        imagem: "Diamantina.jpg",
        descricao: "A ser feito"
    },
    {
        estado: "Pernambuco",
        nome: "Fernando de Noronha",
        imagem: "pernambuco-fernando-de-noronha.jpg",
        descricao: "É um arquipélago brasileiro do estado de Pernambuco.. Formado por 21 ilhas,, ilhotas e rochedos de origem vulcânica, ocupa uma área total de 26 km²."
    },
    {
        estado: "Pernambuco",
        nome: "Porto de Galinhas",
        imagem: "pernambuco-porto-de-galinhas.jpg",
        descricao: "É uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil. A região possui piscinas de águas claras e mornas formadas entre corais, e coqueirais."
    },
    {
        estado: "Pernambuco",
        nome: "Recife",
        imagem: "pernambuco-recife.jpg",
        descricao: "É um município brasileiro, capital do estado de Pernambuco, localizado na Região Nordeste do país. Com área territorial de aproximadamente 218 km², é formado por uma planície aluvial, tendo as ilhas, penínsulas e manguezais."
    },
    {
        estado: "Pernambuco",
        nome: "Tamandaré",
        imagem: "pernambuco-tamandare.jpg",
        descricao: "É uma das mais lindas praias do litoral nordestino. Possui uma extensa faixa de areia dourada, um mar bastante tranquilo, águas cristalinas e muitos coqueiros."
    },
    {
        estado: "Bahia",
        nome: "Pelourinho",
        imagem: "bahia/pelourinho.jpg",
        descricao: "Popularmente chamado de Pelô, é um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de Jesus até o Largo do Pelourinho."
    },
    {
        estado: "Bahia",
        nome: "São Desidério",
        imagem: "bahia/sao_desiderio.jpg",
        descricao: "É uma cidadezinha que fica na região oeste da Bahia localizada a 900 km de Salvador, e vem ganhando fama entre os turistas que são apaixonados por natureza."
    },
    {
        estado: "Bahia",
        nome: "Elevador Lacerda",
        imagem: "bahia/elevador_lacerda.jpg",
        descricao: "É um sistema de transporte público da cidade de Salvador, capital do estado brasileiro da Bahia. Trata-se do primeiro elevador urbano do mundo."
    },
    {
        estado: "Bahia",
        nome: "Mercado Modelo",
        imagem: "bahia/mercado_modelo.jpg",
        descricao: ""
    },
    {
        estado: "São Paulo",
        nome: "Avenida Paulista",
        imagem: "sao_paulo/avenida_paulista.jpg",
        descricao: "Avenida Paulista é um logradouro do município de São Paulo (a capital do estado homônimo). Está localizada no limite entre as zonas Centro-Sul, Central e Oeste; e em uma das regiões mais elevadas da cidade, chamada de Espigão da Paulista."
    },
    {
        estado: "São Paulo",
        nome: "Catedral da Sé",
        imagem: "sao_paulo/catedral_da_se.jpg",
        descricao: "Catedral Metropolitana Nossa Senhora da Assunção e São Paulo, informalmente conhecida como Catedral da Sé, é o principal templo católico da cidade de São Paulo, Brasil. Localiza-se na Praça da Sé, na Zona Central do município."
    },
    {
        estado: "São Paulo",
        nome: "Museu Futebol",
        imagem: "sao_paulo/museu_futebol.jpg",
        descricao: "Museu do Futebol é um espaço voltado para os mais diferentes assuntos envolvendo a prática, a história e curiosidades do futebol brasileiro e mundial."
    },
    {
        estado: "São Paulo",
        nome: "Parque Ibirapuera",
        imagem: "sao_paulo/parque_ibirapuera.jpg",
        descricao: "É um parque urbano localizado na cidade de São Paulo, Brasil. Em 2017, foi o parque mais visitado da América Latina, com aproximadamente 14 milhões de visitas,  além de ser um dos locais mais fotografados do mundo."
    }
];


//Essa variavel guarda a quantidade de items que tem na array "locais".
const l = locais.length;










//Função que printa os lugares na página usando um loop.
function loadPlaces() {
    //A variavel "text" guarda todo o html.
    let text = "";
    //Loop que cria o html necessário para cada elemento e guarda na variavel "text".
    for (let i = 0; i < l; i++) {
        let template = `<div class="card m-3 mt-0" style="width: 18rem;">
                                <img src="assets/images/${locais[i].imagem}" class="card-img-top" alt="${locais[i].nome}">
                                <div class="card-body">
                                    <h6 class="card-text mb-1">${locais[i].nome}</h5>
                                    <h6 class="card-subtitle pt-1 mb-3 text-muted">Estado: <strong>${locais[i].estado}</strong></h6>
                                    <div class="d-grid col-12 mx-auto">
                                        <button class="btn btn-outline-success btn-lg" type="button" onclick="loadPage('${locais[i].nome}')" data-bs-dismiss="modal">Saiba mais</button>
                                    </div>
                                </div>
                            </div>`;

        text += template;
    }
    //Insere todo o html guardado na "variavel text no elemento com id de "locais".
    const x = document.getElementById("locais");
    x.innerHTML = text;
}


//Função que printa a pagina principal do lugar, o lado ruim é que se recarregar a página ele volta para pagina principal.
function loadPage(nome) {
    //Um loop para a array "locais"
    for (let i = 0; i < l; i++) {
        //Se encontrar o nome do objeto na array ele executa o código.
        if (locais[i].nome === nome) {
            //Template de como printar o html.
            //Tem que testar melhores templates
            let template = `<div id="lugar" class="lugar container d-grid w-50 mb-2 mt-1">  
                                <img src="assets/images/${locais[i].imagem}" class="img-fluid w-100 d-block mx-auto mb-2 g-col-4 rounded" alt="${locais[i].nome}">
                                <div class="d-grid gap-2 col-6 mx-auto mt-1 ">
                                    <button class="btn btn-primary" onclick="fecharJanela('/index.html')">Fechar Janela</button>
                                </div>
                                <hr>
                                <p class="text-bg-success text-center fs-1 d-block mb-0">${locais[i].nome}</p>
                                <div id="descricao" class="text-bg-warning p-3">
                                    <p>${locais[i].descricao}</p>
                                </div>
                            </div>`;
            const x = document.getElementById("demo");
            x.innerHTML = template;
        };
    }
}

function fecharJanela(url) {
    window.location.href = url
}
