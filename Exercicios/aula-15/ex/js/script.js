const num = Number(prompt('Digite um número:'));
const numero_titulo = document.getElementById('numeroTitulo');
const texto_div = document.getElementById('texto');


numero_titulo.innerHTML = num;

texto_div.innerHTML = '';
texto_div.innerHTML += `<p>Raiz quadrada: <strong>${num ** 0.5}</strong></p>`;
texto_div.innerHTML += `<p><strong>${num}</strong> é inteiro: <strong>${Number.isInteger(num)}</strong></p>`;
texto_div.innerHTML += `<p>É NaN: <strong>${Number.isNaN(num)}</strong></p>`;
texto_div.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(num)}</strong></p>`;
texto_div.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(num)}</strong></p>`;
texto_div.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`;