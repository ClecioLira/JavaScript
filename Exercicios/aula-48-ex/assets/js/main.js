const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { //Cria uma lista
    let li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) { // Adiciona a lista no html
    let li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoFeito(li)
    criaBotaoApagar(li)
    salvarTarefas()
}

function criaBotaoApagar(li) { // Cria o botao apagar tarefa
    li.innerHTML += '  '
    let botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function limpaInput() { // Limpa a barra do input após eu adicionar a tarefa
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoFeito(li) { // Cria o botão para o cliente marcar se já fez a tarefa
    li.innerHTML += ' '
    let botaoCheck = document.createElement('button')
    botaoCheck.innerText = 'V'
    botaoCheck.setAttribute('class', 'feito')
    botaoCheck.setAttribute('title', 'Clique caso já tenha feito a tarefa')
    li.appendChild(botaoCheck)
}

function salvarTarefas() { // Deixa as tarefas a salvo dentro de um mini banco de dados que existe dentro do navegador
    let liTarefas = tarefas.querySelectorAll('li')
    let listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        tarefaTexto = tarefaTexto.replace('V', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    let tarefaJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefaJSON)
}

function adicionaTarefaSalva() { // Deixa a tarefa salva no banco de dados do navegador
    if (!localStorage.getItem('tarefas')) return
    let tarefas = localStorage.getItem('tarefas')
    let listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefaSalva()

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
    let el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

document.addEventListener('click', function(e) {
    let el = e.target
    if (el.classList.contains('feito')) {
        el.innerText = 'Feito'
    }
})