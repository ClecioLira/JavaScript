export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function() {
                return cpfEnviado.replace(/\D+/g, '')
            }
        })
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.criaDigito(cpfParcial)
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf === this.cpfLimpo

    }

    static criaDigito(cpfParcial) {
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

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}
