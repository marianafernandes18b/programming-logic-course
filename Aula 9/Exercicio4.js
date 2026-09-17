//Mostrar números pares que leia 10 números e armazene em um vetor, apenas números pares.

const readlineSync = require('readline-sync');
let numerosPares = [];
for (let i = 0; i < 10; i++) {
    let numero = Number(readlineSync.question(`Digite um número: `));
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
}
console.log(`Números pares: ${numerosPares.join(', ')}`);