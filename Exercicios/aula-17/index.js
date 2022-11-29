// função clássica
function soma(x, y) {
    const resultado = x + y;
    return resultado;
    console.log('Olá mundo!');
}
console.log(soma(2, 2));

//função anônima
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//função moderna = arrowfunction
const raizQuadrada = (n) => n ** 0.5;
console.log(raizQuadrada(25));