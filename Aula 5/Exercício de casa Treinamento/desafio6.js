const readlineSync = require('readline-sync');

// Let para receber a entrada do usuário
let numeroDia = readlineSync.questionInt("Digite um numero de 1 a 7: ");

// Variável 
let diaDaSemana = "";

// Estrutura case (switch) 
switch (numeroDia) {
    case 1:
        diaDaSemana = "Domingo";
        break;
    case 2:
        diaDaSemana = "Segunda-feira";
        break;
    case 3:
        diaDaSemana = "Terça-feira";
        break;
    case 4:
        diaDaSemana = "Quarta-feira";
        break;
    case 5:
        diaDaSemana = "Quinta-feira";
        break;
    case 6:
        diaDaSemana = "Sexta-feira";
        break;
    case 7:
        diaDaSemana = "Sábado";
        break;
    default:
        diaDaSemana = "Dia inválido";
        break;
}

// O resultado
console.log(`\nResultado: ${diaDaSemana}`);