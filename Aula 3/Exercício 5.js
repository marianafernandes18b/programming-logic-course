const readlineSync = require ("readline-sync")

let entrada = readlineSync.question("Digite sua idade:")
let idade = parseInt (entrada);

if (idade >= idade < 18){
    console.log("Você é menor de idade");
   
} else if (idade >= 18 && idade <= 59){
    console.log("Você é adulto(a)");
} else if (idade >= 60){ 
    console.log("Você é idoso(a)");
} else {
    console.log("Idade inválida. Por favor, digite um número válido")
}