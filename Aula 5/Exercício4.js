const readline = require('readline-sync');

// 1. Solicita os dados do usuário
let nome = readline.question("Nome: ");
let idade = readline.questionInt("Idade: ");
let possuiIngresso = readline.question("Possui ingresso (sim ou nao)? ");
let ehEstudante = readline.question("É estudante (sim ou nao)? ");

// 2. Padroniza as respostas para letras minúsculas
let ingressoValido = possuiIngresso.toLowerCase() === "sim";
let estudanteValido = ehEstudante.toLowerCase() === "sim";

console.log("\n--- CONTROLE DE ACESSO ---");
console.log(`Visitante: ${nome}`);

// 3. Verifica a regra principal de entrada: ter ingresso E ser maior de idade
if (ingressoValido && idade >= 18) {
  console.log("Status: ENTRADA AUTORIZADA ✅");
  
  // 4. Verifica a condição do estudante
  if (estudanteValido) {
    console.log("Aviso: Dirija-se à FILA PREFERENCIAL para estudantes!");
  }
  
} else {
  console.log("Status: ENTRADA NEGADA ❌");
  
  // Detalhando o motivo para o usuário entender o bloqueio
  if (!ingressoValido) {
    console.log("Motivo: Sem ingresso.");
  } else if (idade < 18) {
    console.log("Motivo: Menor de 18 anos.");
  }
}
console.log("--------------------------");