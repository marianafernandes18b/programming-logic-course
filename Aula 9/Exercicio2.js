// Calcular a média de 5 números

const readlineSync = require('readline-sync');
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(readlineSync.question(`Digite um número: `));
    numeros.push(numero);
}
let soma = numeros.reduce((acc, curr) => acc + curr, 0);
let media = soma / numeros.length;
console.log(`A média dos números é: ${media}`);
