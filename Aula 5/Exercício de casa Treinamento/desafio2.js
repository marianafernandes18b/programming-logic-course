// Cálculo comissão do vendedor

const readlineSync = require('readline-sync');


// Utilizando let para receber as entradas do usuário


let nomeVendedor = readlineSync.question("Digite o nome do vendedor: ");
let valorVendas = readlineSync.questionFloat("Digite o valor total das vendas (R$): ");


// Variáveis para armazenar o percentual e o valor final


let percentualComissao = 0;
let valorComissao = 0;


// Verificando as faixas de comissão


if (valorVendas <= 2000) {
    percentualComissao = 5;
} else if (valorVendas <= 5000) {
    percentualComissao = 8;
} else if (valorVendas <= 10000) {
    percentualComissao = 10;
} else {
    percentualComissao = 12;
}

// Calculando o valor em Reais da comissão


valorComissao = (valorVendas * percentualComissao) / 100;


// Dados finais

console.log("\n--- Resumo do Vendedor ---");
console.log(`Nome: ${nomeVendedor}`);
console.log(`Valor das Vendas: R$ ${valorVendas.toFixed(2)}`);
console.log(`Percentual de Comissão: ${percentualComissao}%`);
console.log(`Valor da Comissão: R$ ${valorComissao.toFixed(2)}`);