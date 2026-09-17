const readline = require ("readline-sync");
let entrada = readline.question("Digite um número: ");
let numero = parseFloat(entrada);
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
}else if (numero === 0) {
    console.log("O número é zero.");
}else {
    console.log("Entrada inválida. Por favor, digite um número válido.");
}