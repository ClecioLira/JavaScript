const nome = 'Clécio';
const sobrenome = 'Lira';
const idade = 20;
const peso = 60;
const altura = 1.71;
let indiceMassaCorporal = peso / (altura * altura);
let anoAtual = 2022;
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}M de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);