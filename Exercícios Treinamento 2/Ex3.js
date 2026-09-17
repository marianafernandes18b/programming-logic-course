const readline = require('readline-sync');

let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let num = parseFloat(readline.question(`Digite o ${i+1}º número: `));
    numeros.push(num);
    soma += num;
}

let media = soma / 5;

console.log(`\nNúmeros informados: ${numeros.join(', ')}`);
console.log(`A média dos números é: ${media.toFixed(2)}`);