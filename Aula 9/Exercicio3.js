// Contar números positivos e negativos em um vetor de 5 números

const readlineSync = require('readline-sync');
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(readlineSync.question(`Digite um número: `));
    numeros.push(numero);
}
// Contar números positivos e negativos
let positivos = 0;
let negativos = 0;

for (let numero of numeros) {
    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    }
}
// Exibir resultados
console.log(`Quantidade de números positivos: ${positivos}`);
console.log(`Quantidade de números negativos: ${negativos}`);