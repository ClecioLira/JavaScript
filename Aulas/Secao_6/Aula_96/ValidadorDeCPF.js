// PRIMEIRO DIGITO
// Pega os 9 primeiros digitos do CPF e multiplica cada valor de 10 a 0
// 705.484.450
// 7 x 10 = 70
// 0 x 9 = 0
// 5 x 8 = 40
// 4 x 7 = 28
// 8 x 6 = 48
// 4 x 5 = 20
// 4 x 4 = 16
// 5 x 3 = 15
// 0 x 2 = 0

// Agora soma todos os resultado
// total = 237

// Agora tentar pegar o primeiro digito
// 11 - (total % 11) = primeiro digito -> caso esse numero seja maior que 9 o valor dele é 0
// 11 - (237 % 11) = 5

// SEGUNDO DIGITO
// Pega os 10 primeiros digitos do CPF e multiplica cada valor de 11 a 0
// 7 x 11 = 77
// 0 x 10 = 0
// 5 x 9 = 45
// 4 x 8 = 32
// 8 x 7 = 56
// 4 x 6 = 24
// 4 x 5 = 20
// 5 x 4 = 20
// 0 x 3 = 0
// 5 x 2 = 10

// Agora soma todos os resultado
// total = 284

// Agora tentar pegar o segundo digito
// 11 - (total % 11) = segundO digito -> caso esse numero seja maior que 9 o valor dele é 0
// 11 - (284 % 11) = 2

// 705.484.450-52

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length < 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2
    
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor))
        regressivo --
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')

if(cpf.valida()) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}
