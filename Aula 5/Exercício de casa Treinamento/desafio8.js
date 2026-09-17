const readlineSync = require('readline-sync');

// Let
let numeroMes = readlineSync.questionInt("Digite o numero do mes (1 a 12): ");

// Variáveis para armazenar as informações do mês
let nomeMes = "";
let qtdDias = 0;

// Swich case (a essa altura meu cérebro já está queimado 😭)
switch (numeroMes) {
    case 1:
        nomeMes = "Janeiro";
        qtdDias = 31;
        break;
    case 2:
        nomeMes = "Fevereiro";
        qtdDias = 28; 
        break;
    case 3:
        nomeMes = "Março";
        qtdDias = 31;
        break;
    case 4:
        nomeMes = "Abril";
        qtdDias = 30;
        break;
    case 5:
        nomeMes = "Maio";
        qtdDias = 31;
        break;
    case 6:
        nomeMes = "Junho";
        qtdDias = 30;
        break;
    case 7:
        nomeMes = "Julho";
        qtdDias = 31;
        break;
    case 8:
        nomeMes = "Agosto";
        qtdDias = 31;
        break;
    case 9:
        nomeMes = "Setembro";
        qtdDias = 30;
        break;
    case 10:
        nomeMes = "Outubro";
        qtdDias = 31;
        break;
    case 11:
        nomeMes = "Novembro";
        qtdDias = 30;
        break;
    case 12:
        nomeMes = "Dezembro";
        qtdDias = 31;
        break;
    default:
        nomeMes = "Mês inválido";
        qtdDias = 0;
        break;
}

// Apresentando os resultados

console.log("\n--- Informações do Mês ---");

// Verificação rápida

if (qtdDias > 0) {
    console.log(`Nome do mês: ${nomeMes}`);
    console.log(`Quantidade de dias: ${qtdDias}`);
} else {
    console.log(`Erro: ${nomeMes}. Por favor, digite um número entre 1 e 12.`);
}