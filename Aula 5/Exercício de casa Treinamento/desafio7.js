const readlineSync = require('readline-sync');

// Let para entradas

let nomeMotorista = readlineSync.question("Digite o nome do motorista: ");
let codigoVeiculo = readlineSync.questionInt("Digite o codigo do tipo de veiculo (1 a 5): ");

// Variável 

let tipoVeiculo = "";

// Estrutura case (switch) 

switch (codigoVeiculo) {
    case 1:
        tipoVeiculo = "Motocicleta";
        break;
    case 2:
        tipoVeiculo = "Carro";
        break;
    case 3:
        tipoVeiculo = "Caminhonete";
        break;
    case 4:
        tipoVeiculo = "Caminhão";
        break;
    case 5:
        tipoVeiculo = "Ônibus";
        break;
    default:
        tipoVeiculo = "Código inválido (Veículo não identificado)";
        break;
}

// Final

console.log("\n--- Registro do Motorista ---");
console.log(`Nome: ${nomeMotorista}`);
console.log(`Tipo de Veículo: ${tipoVeiculo}`);