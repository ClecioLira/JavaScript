//               012 3456789
let umaString = "Um \"texto\"";

// pesquisar a posiçao do elemento
console.log(umaString.charAt(4));

// concatenar
console.log(umaString.concat(' ', 'em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// saber em qual posição começa o texto
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 4))
console.log(umaString.lastIndexOf('m', 4))

// trocar a palavra da strClécio de Lira Alvesing
console.log(umaString.replace('Um', 'Outro'));

// saber o tamanho da string
console.log(umaString.length);

// mostrar somente a palavra selecionada
console.log(umaString.slice(4, 9));

// retirar a palavra de uma string
console.log(umaString.split('t'));

// deixar a string toda em maiúscula
console.log(umaString.toUpperCase());

// deixar a string toda em minúscula
console.log(umaString.toLowerCase());