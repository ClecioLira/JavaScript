const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { //Cria uma lista
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) { // Adiciona a lista no html
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
}

function criaBotaoApagar(li) { // Cria o botao apagar tarefa
    li.innerHTML += '  '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function limpaInput() { // Limpa a barra do input após eu adicionar a tarefa
    inputTarefa.value = ''
    inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e) { // Pressionar a tecla enter para adicionar a lista
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

btnTarefa.addEventListener('click', function() { // Configura o click no botao para adicionar a lista
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) { // Seleciona o botao apagar e faz ele apagar a tarefa da lista
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})