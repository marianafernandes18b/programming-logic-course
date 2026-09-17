const readline = require('readline-sync');

// Solicita o salário ao usuário
let entrada = readline.question("Digite o valor do salario (sem pontos de milhar): R$ ");

// Substitui a vírgula por ponto (ex: 2500,50 vira 2500.50) e converte para decimal
let salario = parseFloat(entrada.replace(',', '.'));

// Verifica a classificação do salário
if (salario >= 0 && salario < 2000) {
    console.log("Classificação: Salário BAIXO.");
} else if (salario >= 2000 && salario <= 5000) {
    console.log("Classificação: Salário MÉDIO.");
} else if (salario > 5000) {
    console.log("Classificação: Salário ALTO.");
} else {
    // Tratamento caso o usuário digite letras ou números negativos
    console.log("Valor inválido. Por favor, digite um número válido.");
}