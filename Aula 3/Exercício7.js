const readline = require("readline-sync")

let entrada = readline.question("Digite a temperatudo em graus Celsius:");
    
let temperatura = parseFloat(entrada.replace(",", "."));

if (temperatura < 15) {
    console.log("O clima está FRIO.");
} else if (temperatura >= 15 && temperatura <= 30) {
    console.log("O clima está AGRADÁVEL.")
} else if (temperatura >= 30){
    console.log("O clima está QUENTE");
} else {
    console.log("Temperatura inválida. Por favor, digite um número válido");
}
    
    

