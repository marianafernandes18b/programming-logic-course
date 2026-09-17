
const readlineSync = require('readline-sync');


let nomeCliente = readlineSync.question("Digite o nome do cliente: ");
console.log("\nTipos de Veículo:");
console.log("1 - Moto");
console.log("2 - Carro");
console.log("3 - Caminhonete");
console.log("4 - Caminhão");
let tipoVeiculo = readlineSync.questionInt("Escolha o tipo de veiculo (1 a 4): ");
let horasEstacionadas = readlineSync.questionFloat("Digite a quantidade de horas estacionadas: ");


let nomeVeiculo = "";
let valorHora = 0;


switch (tipoVeiculo) {
    case 1:
        nomeVeiculo = "Moto";
        valorHora = 5.00;
        break;
    case 2:
        nomeVeiculo = "Carro";
        valorHora = 8.00;
        break;
    case 3:
        nomeVeiculo = "Caminhonete";
        valorHora = 10.00;
        break;
    case 4:
        nomeVeiculo = "Caminhão";
        valorHora = 15.00;
        break;
    default:
        nomeVeiculo = "Veículo Inválido";
        valorHora = 0;
        break;
}

if (valorHora > 0) {
 
    let valorTotal = valorHora * horasEstacionadas;
    let valorDesconto = 0;

   
    if (horasEstacionadas > 8) {
        valorDesconto = valorTotal * 0.10; 
        valorTotal = valorTotal - valorDesconto; 
    }

    console.log("\n--- Recibo de Estacionamento ---");
    console.log(`Cliente: ${nomeCliente}`);
    console.log(`Veículo: ${nomeVeiculo}`);
    console.log(`Tempo estacionado: ${horasEstacionadas} hora(s)`);
    console.log(`Valor por hora: R$ ${valorHora.toFixed(2)}`);
    
   
    if (valorDesconto > 0) {
        console.log(`Desconto aplicado (10%): - R$ ${valorDesconto.toFixed(2)}`);
    }
    
    console.log(`Valor Total a pagar: R$ ${valorTotal.toFixed(2)}`);

} else {

    console.log(`\nErro: Código de veículo inválido. Não foi possível calcular a tarifa.`);
}

// CONSIDERAÇÃO FINAL: MORRI 🧟‍♀️ 👻