//new Date(0) -> 01/01/1970 Timestamp unix ou época unix, marco 0
//const umDia = 60 * 60 * 24 * 1000

const data = new Date() //Função construtora
console.log(data.toString()) //Mostrar a data atual

const dataEscolhida = new Date(2019, 3, 20, 15, 14, 27) //a, m, d, h, M,s, ms
console.log(dataEscolhida.toString())

const dataDigitada = new Date('2019-04-20 20:20:59')
console.log(dataDigitada.toString())

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) //Mês começa do 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milésimo de segundo', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) // 0 - domingo, 6 - sábado