const readline = require('readline-sync');

let numeros = [];
let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 0; i < 5; i++) {
    let num = parseFloat(readline.question(`Digite o ${i+1}º número: `));
    numeros.push(num);
    
    if (num > 0) {
        positivos++;
    } else if (num < 0) {
        negativos++;
    } else {
        zeros++;
    }
}

console.log(`\nNúmeros informados: ${numeros.join(', ')}`);
console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Iguais a zero: ${zeros}`);