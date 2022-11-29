//criação de objeto na forma literal
const pessoa1 = {
    nome: 'Clécio',
    sobrenome: 'Lira',
    idade: 20
};
console.log(pessoa1);

//criaçao de objeto com função
function criaPessoa(nome, sobrenome, idade) {
    return { //maquina de criar objetos
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
/**FORMA RESUMIDA / CLEAN
 * function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
   }
 */
const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa3 = criaPessoa('Clécio', 'Lira', 20);
const pessoa4 = criaPessoa('Mayrla', 'Mendes', 18);
const pessoa5 = criaPessoa('Cauã', 'Lira', 11);
console.log(pessoa2, pessoa3, pessoa4, pessoa5);