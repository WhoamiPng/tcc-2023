//Fazendo alguns textes com javascript para printar na página.
//Ainda não implementado, talvez eu descarte a ideia.

//Uma array com objetos que guarda informações sobre os lugares.
const locais = [
    {
        estado:"A ser feito",
        nome:"Araxa",
        imagem:"Araxa.jpg",
        descricao:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum dolore officia nobis consequatur? Corrupti excepturi corporis repudiandae doloremque. Quod sint dolores doloribus veritatis aut veniam animi accusamus neque ullam",
            "outra coisa"
        ]
    },
    {
        estado:"A ser feito",
        nome:"Belo Horizonte",
        imagem:"Belo-Horizonte.jpg",
        descricao:["A ser feito"]
    },
    {
        estado:"A ser feito",
        nome:"Diamantina",
        preco:"3.000",
        imagem:"Diamantina.jpg",
        descricao:["A ser feito"]
    },
    {
        estado:"Pernambuco",
        nome:"Fernando de Noronha",
        imagem:"pernambuco-fernando-de-noronha.jpg",
        descricao:["A ser feito"]
    },
    {
        estado:"Pernambuco",
        nome:"Porto de Galinhas",
        imagem:"pernambuco-porto-de-galinhas.jpg",
        descricao:["A ser feito"]
    },
    {
        estado:"Pernambuco",
        nome:"Recife",
        imagem:"pernambuco-recife.jpg",
        descricao:["A ser feito"]
    },
    {
        estado:"Pernambuco",
        nome:"Tamandare",
        imagem:"pernambuco-tamandare.jpg",
        descricao:["A ser feito"]
    },
];


//Essa variavel guarda a quantidade de items que tem na array "locais".
const l = locais.length;










//Função que printa os lugares na página usando um loop.
function loadPlaces(){
    //A variavel "text" guarda todo o html.
    let text = "";
    //Loop que cria o html necessário para cada elemento e guarda na variavel "text".
    for(let i = 0;i < l;i++){
        let template = `<div class="card m-3 mt-0" style="width: 18rem;">
                                <img src="assets/images/${locais[i].imagem}" class="card-img-top" alt="${locais[i].nome}">
                                <div class="card-body">
                                    <h6 class="card-text mb-1">${locais[i].nome}</h5>
                                    <h6 class="card-subtitle pt-1 mb-3 text-muted">Estado: <strong>${locais[i].estado}</strong></h6>
                                    <div class="d-grid col-12 mx-auto">
                                        <button class="btn btn-outline-success btn-lg" type="button" onclick="loadPage('${locais[i].nome}')">Saiba mais</button>
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
function loadPage(nome){
    //Um loop para a array "locais"
    for(let i = 0;i < l;i++){
        //Se encontrar o nome do objeto na array ele executa o código.
        if(locais[i].nome === nome){
            //Template de como printar o html.
            //Tem que testar melhores templates
            let template = `<div id="lugar" class="lugar container d-grid w-50 mb-2 mt-1">
                                <img src="assets/images/${locais[i].imagem}" class="img-fluid w-100 d-block mx-auto g-col-4" alt="${locais[i].nome}">
                                <p class="text-center fs-1 d-block">${locais[i].nome}</p>
                            </div>`;
            const x = document.getElementById("demo");
            x.innerHTML = template;
            //Outro loop que cria um elemento "p" para cada linha na descricao.
            //Talvez eu remova isso.
            for (let z = 0;z < locais[i].descricao.length;z++){
                let para = document.createElement("p");
                let node = document.createTextNode(locais[i]["descricao"][z]);
                para.appendChild(node);
    
                let element = document.getElementById("lugar");
                element.appendChild(para);
            }
        };
    }
}