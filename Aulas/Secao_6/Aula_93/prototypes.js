// Javascript é baseado em prototipos para passar propriedades e metodos de um objeto para outro.

// Definição de prototipos:
// Prototipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

// Os objetos tem uma referencia interna para um prototipo (__proto__) quem vem da propriedade prototype da funcao construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.

// construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome()
}

// instancia
const pessoa1 = new Pessoa('Luiz', 'O')
const pessoa2 = new Pessoa('Maria', 'A')