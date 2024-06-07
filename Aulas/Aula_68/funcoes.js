// Function Hoisting
falaOi();
function falaOi() {
    console.log("oi");
}

// Function expression
const souUmDado = function() {
    console.log("Sou um dado.");
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    nome: "clecio",
    falar() {
        console.log("oi")
    }
}
obj.falar();

