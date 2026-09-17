const readline = require ("readline-sync");
let entrada = readline.question("Digite a nota do aluno: ");
let nota = parseFloat(entrada);
if (nota >= 6) {
    console.log("O aluno foi aprovado.");
} else if (nota < 6) {
    console.log("O aluno foi reprovado.");
}