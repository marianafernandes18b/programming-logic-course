const readlineSync = require('readline-sync');

// Utilizando let para receber as entradas do usuário
let nomeFuncionario = readlineSync.question("Digite o nome do funcionario: ");
let notaDesempenho = readlineSync.questionFloat("Digite a nota de desempenho (0 a 10): ");
let numeroFaltas = readlineSync.questionInt("Digite o numero de faltas: ");

// Variável para armazenar a classificação final
let classificacao = "";

// Verificando as condições usando operadores lógicos (&&)
if (notaDesempenho >= 9 && numeroFaltas <= 2) {
    classificacao = "Excelente";
} else if (notaDesempenho >= 7 && numeroFaltas <= 5) {
    classificacao = "Bom";
} else if (notaDesempenho >= 5) {
    // Para "Regular", a regra pede apenas que a nota seja maior ou igual a 5
    classificacao = "Regular";
} else {
    classificacao = "Insatisfatório";
}

// Resultados
console.log("\n--- Resultado da Avaliação ---");
console.log(`Funcionário: ${nomeFuncionario}`);
console.log(`Nota de Desempenho: ${notaDesempenho}`);
console.log(`Número de Faltas: ${numeroFaltas}`);
console.log(`Classificação: ${classificacao}`);