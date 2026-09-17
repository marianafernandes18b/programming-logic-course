const readline = require('readline-sync');

// 1. Solicita os dados do funcionário
let nome = readline.question("Digite o nome do funcionário: ");
let salario = readline.questionFloat("Digite o salário atual (R$): ");
let tempoEmpresa = readline.questionFloat("Digite o tempo de empresa em anos: ");

// 2. Variáveis para o cálculo
let percentualBonus = 0;
let valorBonus = 0;
let salarioFinal = 0;

// 3. Verifica a condição do bônus
if (tempoEmpresa < 2) {
  percentualBonus = 0.05; // 5%
} else if (tempoEmpresa >= 2 && tempoEmpresa <= 5) {
  percentualBonus = 0.10; // 10%
} else {
  percentualBonus = 0.15; // 15%
}

// 4. Realiza os cálculos
valorBonus = salario * percentualBonus;
salarioFinal = salario + valorBonus;

// 5. Apresenta o resultado formatado
console.log("\n--- RESUMO DE PAGAMENTO ---");
console.log(`Funcionário: ${nome}`);
console.log(`Tempo de Empresa: ${tempoEmpresa} anos`);

console.log(`Salário Base: R$ ${salario.toFixed(2)}`);
console.log(`Bônus Aplicado: ${percentualBonus * 100}% (R$ ${valorBonus.toFixed(2)})`);
console.log(`Salário Final: R$ ${salarioFinal.toFixed(2)}`);
console.log("---------------------------");