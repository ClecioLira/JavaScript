class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log('Ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log('Desligado')
            return
        }
        this.desligado = false
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome) //executa todo o codigo da classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Motorola', 'preto', 'G84')
s1.ligar()
console.log(s1)
