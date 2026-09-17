const readlineSync = require("readline-sync");

// Dados e resultados

let nome = readlineSync.question("Digite o seu nome:");
let entrada  = readlineSync.question("Digite sua idade:");
let idade = parseInt (entrada);

if (idade >= 0 && idade < 12) {
    console.log ("Você é uma criança!🙂");

} else if (idade >= 12 && idade <= 17 ) {
    console.log("Você é adolescente!😁");

} else if (idade >= 18 && idade <= 59) {
    console.log("Você é um(a) adulto(a)🥰!");

} else if (idade >= 60) {
    console.log("Você é idoso(a)!🤍"); 
    
}
