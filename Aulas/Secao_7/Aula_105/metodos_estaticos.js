//Metodos estaticas dentro da classe
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }

    //Metodo de instancia
    aumentarVolume() {
        if(this.volume >= 100) return false
        this.volume += 2
    }

    diminuirVolume() {
        if(this.volume <= 0) return false
        this.volume -= 2
    }

    //Metodo estatico
    static trocaPilha() {
        console.log('trocando')
    }
}

const c1 = new ControleRemoto('Roku')
c1.aumentarVolume()
ControleRemoto.trocaPilha() //So da para usar pela classe pai
console.log(c1)