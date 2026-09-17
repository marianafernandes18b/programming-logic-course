const readline = require("readline-sync");

// 1. Entradas (Nome e Salário Bruto)
let nome = readline.question("Digite o nome do funcionario: ");
let entradaSalario = readline.question("Digite o salario bruto: R$ ");
let salarioBruto = parseFloat(entradaSalario.replace(',', '.'));

// Verifica se o usuário digitou um salário válido (maior ou igual a zero)
if (salarioBruto >= 0) {
    
    // 2. Cálculo do INSS
    let descontoInss = 0;
    if (salarioBruto >= 3000) {
        descontoInss = salarioBruto * 0.11; // 11%
    } else if (salarioBruto >= 2000) {
        descontoInss = salarioBruto * 0.09; // 9%
    } else {
        descontoInss = salarioBruto * 0.08; // 8%
    }

    // 3. Cálculo do Vale Transporte (VT)
    let descontoVt = 0;
    if (salarioBruto >= 2000) {
        descontoVt = salarioBruto * 0.06; // 6%
    } else {
        descontoVt = salarioBruto * 0.05; // 5%
    }

    // 4. Cálculo do Bônus
    let bonus = 0;
    if (salarioBruto >= 3000) {
        bonus = 300;
    } else {
        bonus = 200;
    }

    // 5. Definição do Cargo
    let cargo = "";
    if (salarioBruto >= 3000) {
        cargo = "Acionista";
    } else if (salarioBruto >= 2000) {
        cargo = "Gerente";
    } else {
        cargo = "Vendedor";
    }

    // 6. Cálculo do Salário Líquido
    let salarioLiquido = salarioBruto - (descontoInss + descontoVt) + bonus;

    // 7. Saída de Dados (Resumo final)
    console.log("\n--- RESUMO DO FUNCIONÁRIO ---");
    console.log("Nome: " + nome);
    console.log("Cargo: " + cargo);
    // O comando .toFixed(2) serve para forçar o número a exibir apenas 2 casas decimais, ideal para dinheiro!
    console.log("Salário Bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Desconto INSS: R$ " + descontoInss.toFixed(2));
    console.log("Desconto VT: R$ " + descontoVt.toFixed(2));
    console.log("Bônus: R$ " + bonus.toFixed(2));
    console.log("-----------------------------");
    console.log("SALÁRIO LÍQUIDO: R$ " + salarioLiquido.toFixed(2));
    console.log("-----------------------------\n");

} else {
    console.log("Valor de salário inválido. Por favor, tente novamente.");
}