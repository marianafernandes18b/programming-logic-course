const readline = require("readline-sync");

// 1. Solicite o nome e as notas do Aluno(a).

let nome = readline.question("Digite o nome do(a) aluno(a)");
let nota1 = Number(readline.question("Digite a primeira nota:"));
let nota2 = Number(readline.question("Digite a segunda nota:"));
let nota3 = Number(readline.question("Digite a terceira nota:"));

// 2. Cálculo da média das notas.

let média = (nota1 + nota2 + nota3) / 3; 

// 3. Situação do Aluno(a).

let situação = "";

if (média >= 7) {
    situação = "Aprovado(a)";
} else if (média >= 5 && média < 7) {
    situação = "Recuperação";
} else (média < 5); {
situação = "Reprovado(a)!"
}

// 4. Resultado Final

console.log("\n--- BOLETIM DO(A) ALUNO(A) ---");
console.log("`Nome: ${nome}`");
console.log("`Notas: ${nota1}, ${nota2}, ${nota3}");

console.log(`Média: ${media.toFixed(1)}`); 
console.log(`Situação: ${situacao}`);
console.log("------------------------");
