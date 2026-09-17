const readlineSync = require('readline-sync');

// 1. Solicita os dados do cliente
let nome = readline.question("Nome do cliente: ");
let valorCompra = readline.questionFloat("Valor da compra (R$): ");
let formaPagamento = readline.question("Forma de pagamento (Pix, Cartao, Dinheiro): ");

// 2. Variáveis de cálculo
let percentualDesconto = 0;
let percentualPix = 0;

// 3. Verifica o desconto pelo valor da compra
if (valorCompra > 500) {
  percentualDesconto = 0.15; // 15%
} else if (valorCompra >= 200 && valorCompra <= 500) {
  percentualDesconto = 0.10; // 10%
} else {
  percentualDesconto = 0.05; // 5%
}

// 4. Verifica o desconto extra por PIX
// Usamos toUpperCase() para garantir que "pix", "Pix" ou "PIX" sejam aceitos
if (formaPagamento.toUpperCase() === "PIX") {
  percentualPix = 0.05; // Mais 5%
}

// 5. Cálculos finais
let descontoTotalPercentual = percentualDesconto + percentualPix;
let valorDesconto = valorCompra * descontoTotalPercentual;
let valorFinal = valorCompra - valorDesconto;

// 6. Apresenta o resultado formatado
console.log("\n--- RESUMO DA COMPRA ---");
console.log(`Cliente: ${nome}`);
console.log(`Forma de Pagamento: ${formaPagamento.toUpperCase()}`);
console.log(`Valor Original: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto da Compra: ${percentualDesconto * 100}%`);

if (percentualPix > 0) {
  console.log(`Desconto Extra (PIX): ${percentualPix * 100}%`);
}

console.log(`Desconto Total: ${descontoTotalPercentual * 100}% (R$ ${valorDesconto.toFixed(2)})`);
console.log(`Valor Final a Pagar: R$ ${valorFinal.toFixed(2)}`);
console.log("------------------------");