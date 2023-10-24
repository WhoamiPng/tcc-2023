//Fazendo alguns textes com javascript para printar na página.
//Ainda não implementado, talvez eu descarte a ideia.

//Uma array com objetos que guarda informações sobre os lugares.
const locais = [
    {
        nome:"Araxa",
        preco:"1.500",
        imagem:"Araxa.jpg",
        descricao:""
    },
    {
        nome:"Belo Horizonte",
        preco:"2.000",
        imagem:"Belo-Horizonte.jpg",
        descricao:""
    }
];
//Essa variavel guarda a quantidade de items na array.
const l = locais.length;




//Função que printa os lugares na página usando um loop.
function loadPlaces(){
    let text = "";
    for(let i = 0;i < l;i++){
        let template = `<a class="links m-3 mt-0" onclick="loadPage('${locais[i].nome}')">
                            <div class="card" style="width: 18rem;">
                                <img src="assets/images/${locais[i].imagem}" class="card-img-top" alt="${locais[i].nome}">
                                <div class="card-body">
                                    <h6 class="card-text mb-1">${locais[i].nome}</h5>
                                    <h6 class="card-subtitle pt-1 text-muted">50 km de distância</h6>
                                    <h6 class="card-subtitle mb-1 text-muted">29 de jan.- 3 de fev.</h6>
                                    <p class="card-text">R$${locais[i].preco}</p>
                                </div>
                            </div>
                        </a>`;
        text += template;
    }
    const x = document.getElementById("locais");
    x.innerHTML = text
}

function loadPage(nome){

}