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
