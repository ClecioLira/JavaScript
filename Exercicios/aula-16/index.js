//indexáveis      0        1       2
const alunos = ['Luiz', 'Maria', 'João'];

//mostrar o array completo
console.log(alunos);

//mostrar apenas o escolhido
console.log(alunos[1]);

//editar o valor do array
alunos[0] = 'Eduardo';
console.log(alunos[0]);

//adicionar um novo valor
alunos[3] = 'Luiza'
console.log(alunos);
// ou
alunos[alunos.length] = 'Caio';
alunos[alunos.length] = 'Fábio';
console.log(alunos);

//adicionar um novo valor no final da array
alunos.push('Otávio');
console.log(alunos);

//adicionar um novo valor no inicio da array
alunos.unshift('Luana');
console.log(alunos);

//remover um valor da array no final
alunos.pop();
console.log(alunos);

//remover um valor da array no inicio
alunos.shift();
console.log(alunos);

//saber o tipo do array
console.log(typeof alunos);
console.log(alunos instanceof Array);

//fatiamento do array
console.log(alunos.slice(0, -5));