import GeraCpf from './modules/GeraCpf'

import './assets/css/style.css'

const btnGera = document.querySelector('.btn-gera')

btnGera.addEventListener('click', () => {
    (function() {
        const gera = new GeraCpf()
        const cpfGerado = document.querySelector('.cpf-gerado')
        cpfGerado.innerHTML = gera.geraNovoCpf()
    })()
})