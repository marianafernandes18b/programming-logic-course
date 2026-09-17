const readline = require('readline-sync');

let notas = [];
let somaNotas = 0;

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(readline.question(`Digite a nota do ${i+1}º aluno: `));
    notas.push(nota);
    somaNotas += nota;
}

let media = somaNotas / 5;

console.log(`\nTodas as notas informadas: ${notas.join(', ')}`);
console.log(`A média da turma é: ${media.toFixed(2)}`);

console.log("\nNotas que estão acima da média:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        console.log(`Aluno ${i+1}: ${notas[i]}`);
    }
}