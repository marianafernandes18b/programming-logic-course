//armazenar 10 números sem vetor
//mostrar os numeros
//realizar um somatório dos números inseridos.
const readlineSync = require('readline-sync');
let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = Number(readlineSync.question(`Digite um número: `));
    numeros.push(numero);
}
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Vetor:", numeros);
console.log("Maior número entre eles: " + maior);
console.log("Posição do maior número no vetor: " + numeros.indexOf(maior));

