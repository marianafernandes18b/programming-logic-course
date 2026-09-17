const readline = require('readline-sync');

let numeros = [];
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(readline.question(`Digite o ${i+1}º número: `));
    numeros.push(num);
    
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`\nNúmeros digitados: ${numeros.join(', ')}`);
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);