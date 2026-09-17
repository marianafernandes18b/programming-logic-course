const readlineSync = require('readline-sync');

// Entradas do usuário com let

let nome = readlineSync.question("Digite o nome do cliente: ");
let salario = readlineSync.questionFloat("Digite o valor do salario (R$): ");
let idade = readlineSync.questionInt("Digite a idade do cliente: ");
let valorSolicitado = readlineSync.questionFloat("Digite o valor do emprestimo solicitado (R$): ");
let qtdParcelas = readlineSync.questionInt("Digite a quantidade de parcelas desejada: ");

// Valor da parcela e o limite de 30% do salário

let valorParcela = valorSolicitado / qtdParcelas;
let limiteParcela = salario * 0.30; 

// Armazenamento de status do empréstimo

let statusEmprestimo = "";

// Condições

if (idade >= 21 && idade <= 60 && valorParcela <= limiteParcela && valorSolicitado <= 50000) {
    statusEmprestimo = "Aprovado";
} else {
    statusEmprestimo = "Negado";
}

console.log("\n--- Análise de Empréstimo ---");
console.log(`Cliente: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Valor Solicitado: R$ ${valorSolicitado.toFixed(2)} em ${qtdParcelas}x`);
console.log(`Valor da Parcela: R$ ${valorParcela.toFixed(2)}`);
console.log(`Limite da Parcela (30% do salário): R$ ${limiteParcela.toFixed(2)}`);
console.log(`Status do Empréstimo: ${statusEmprestimo}`);