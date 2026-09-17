const readlineSync = require ("readline-sync")

let entrada = readlineSync.question("Digite a nota do aluno(a):")
let nota = parseFloat (entrada.replace ("," , "."));

if (nota>= 7) {
console.log("Situação: Aprovado(a)")
} else if (nota>= 5 && nota < 7) {
console.log("Situação: Em Recuperação");
} else if (nota >= 0 && nota < 7)[
    console.log("Situação: REPROVADO(A)!")
]

