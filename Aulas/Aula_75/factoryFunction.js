function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(nome) {
            this.nome = nome
        }
    }
}
const p1 = criaPessoa('clecio', 'lira', 65, 1.71)
p1.nomeCompleto = 'maria'
console.log(p1.nomeCompleto)