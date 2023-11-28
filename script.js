let listaTarefas = document.getElementById('listaTarefas');
let input1 = document.getElementById('input1');

function addTarefa() {
    const texto = input1.value;
    let novoElemento = document.createElement('li');
    novoElemento.innerHTML =
                    `<p >${texto}</p>
                    <a onclick="removerTarefa(this)"><img src="imagens/lixeira.png" alt=""></a> 
                    <a onclick="concluirTarefa(this)"><img src="imagens/verificar.png" alt=""></a> 
                    <button onclick = 'editarTarefa(this)'>Editar</button>`;
    listaTarefas.appendChild(novoElemento);
    input1.value = "";
}

function removerTarefa(button) {
    listaTarefas.removeChild(button.parentElement);
}

function concluirTarefa(button) {
    const li = button.parentElement;
    li.classList.add("mudaCor");
    li.removeChild(button);
}

function editarTarefa(button) {
    const li = button.parentElement;
    const textoAtual = li.querySelector('p').textContent;

    let novoElemento = document.createElement('input');
    novoElemento.value = textoAtual;

    li.replaceChild(novoElemento, li.querySelector('p'));

    let botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';
    botaoSalvar.onclick = function () {
        const novoTexto = novoElemento.value;
        if (novoTexto.trim() !== "") {
   
            let novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = novoTexto;
            li.replaceChild(novoParagrafo, novoElemento);
        }
        li.removeChild(botaoSalvar);
    };

    li.appendChild(botaoSalvar);
}
d