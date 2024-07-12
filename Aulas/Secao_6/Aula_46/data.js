// EPOCA INUX 01/01/1970
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000

// const data = new Date(2019, 0, 3); // ano mes dia
// const data = new Date(2019, 0, 3, 15, 14, 27); // ano mes dia hora minuto segundo milissegundo
// O MES COMEÇA NO VALOR 0

// const data = new Date("2019-01-01 20:20:59"); // formato mais utilizado

const data = new Date();
console.log("Dia ", data.getDate());
console.log("Mes ", data.getMonth() + 1); // mes comeca do zero
console.log("Ano ", data.getFullYear());
console.log("Hora ", data.getHours());
console.log("Minuto ", data.getMinutes());
console.log("Segundo ", data.getSeconds());
console.log("Milissegundo ", data.getMilliseconds());
console.log("Dia semana ", data.getDay()); // 0 domingo - 6 sabado
console.log(data.toString());