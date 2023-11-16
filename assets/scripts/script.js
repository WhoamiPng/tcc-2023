//Função que printa os lugares na página usando um loop.
function loadPlaces(){
    for(let i = 0; i < estados.length;i++){
        const h1 = document.createElement('h1'); //cria um h1
        const hr = document.createElement('hr'); //cria um hr
        const div = document.createElement('div'); //cria uma div
        const att1 = document.createAttribute('id'); //cria um atributo
        const att2 = document.createAttribute('class'); //msm coisa de cima
        const estado = document.createTextNode(estados[i].nome); //cria um texto
        const x = document.getElementById("locais"); // pega o id do elemento

        att1.value = estados[i].nome; //fornece um valor ao atributo
        div.setAttributeNode(att1); //coloca o atributo na div

        att2.value = "container-fluid d-flex justify-content-start flex-wrap";
        div.setAttributeNode(att2);

        h1.appendChild(estado); //coloca texto no h1
        x.appendChild(h1); //coloca o h1 na div com id "locais"
        x.appendChild(hr); //coloca hr
        x.appendChild(div); //coloca uma div

        let text = "";

        for(let y = 0; y < estados[i]["pontos_turistico"].length;y++){
            let template = `<div class="card m-2 mt-0" style="width: 18rem;">
                                <img src="assets/images/${estados[i].pontos_turistico[y].imagem}" class="card-img-top" alt="${estados[i].pontos_turistico[y].nome}">
                                <div class="card-body">
                                    <h6 class="card-text mb-1">${estados[i].pontos_turistico[y].nome}</h5>
                                    <h6 class="card-subtitle pt-1 mb-3 text-muted">Município: <strong>${estados[i].pontos_turistico[y].municipio}</strong></h6>
                                    <div class="d-grid col-12 mx-auto">
                                        <button class="btn btn-outline-success btn-lg" type="button" onclick="loadPage('${estados[i].pontos_turistico[y].nome}','${estados[i].nome}')" data-bs-dismiss="modal">Saiba mais</button>
                                    </div>
                                </div>
                            </div>`;
            text +=template;
        }
        
        const a = document.getElementById(estados[i].nome);
        a.innerHTML = text;

    }
}


//Função que printa a pagina principal do lugar, o lado ruim é que se recarregar a página ele volta para pagina principal.
function loadPage(nome, estado) {
    //Um loop para a array "locais"
    for (let i = 0; i < estados.length; i++) {
        //Se encontrar o nome do objeto na array ele executa o código.
        if (estados[i].nome === estado) {
            for(let y = 0; y < estados[i].pontos_turistico.length;y++){
                if(estados[i].pontos_turistico[y].nome === nome){
                    //Template de como printar o html.
                    //Tem que testar melhores templates
                    let template = `<div id="lugar" class="lugar container d-grid w-50 mb-2 mt-1">  
                                        <img src="assets/images/${estados[i].pontos_turistico[y].imagem}" class="img-fluid w-100 d-block mx-auto mb-2 g-col-4 rounded" alt="${estados[i].pontos_turistico[y].nome}">
                                        <div class="d-grid gap-2 col-6 mx-auto mt-1 ">
                                            <button class="btn btn-primary" onclick="fecharJanela('/index.html')">Fechar Janela</button>
                                        </div>
                                        <hr>
                                        <p class="text-bg-success text-center fs-1 d-block mb-0">${estados[i].pontos_turistico[y].nome}</p>
                                        <div id="descricao" class="text-bg-warning p-3">
                                            <p>${estados[i].pontos_turistico[y].descricao}</p>
                                        </div>
                                    </div>`;
                    const x = document.getElementById("demo");
                    x.innerHTML = template;
                }
            }
        };
    }
}

function fecharJanela(url) {
    window.location.href = url
}

