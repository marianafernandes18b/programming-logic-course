const readlineSync = require('readline-sync');

// Entrada de usuário

let nomeCliente = readlineSync.question("Digite o nome do cliente: ");
let consumoKwh = readlineSync.questionFloat("Digite o consumo em kWh: ");

// Armazenamento de valor da tarifa e total

let valorTarifa = 0;
let valorTotal = 0;

//  Faixa de consumo para definir o valor da tarifa por kWh

if (consumoKwh <= 100) {
    valorTarifa = 0.50;
} else if (consumoKwh <= 200) {
    valorTarifa = 0.65;
} else if (consumoKwh <= 300) {
    valorTarifa = 0.80;
} else {
    valorTarifa = 1.00;
}

// Cálculo valor total da conta

valorTotal = consumoKwh * valorTarifa;

// Console.log

console.log("\n--- Fatura de Energia ---");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Consumo registrado: ${consumoKwh} kWh`);
console.log(`Tarifa aplicada: R$ ${valorTarifa.toFixed(2)} por kWh`);
console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);