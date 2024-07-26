export const nome = 'Clécio'
export const sobrenome = 'Lira'
export const idade = 22

export function soma(x,y) {
    return x + y
}

export default class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

// export {nome as nome2, sobrenome, idade, soma}

// export {nome as default}
