const readline = require("readline-sync")
let entrada = readline.question("Digite sua senha: ")
let senha = parseFloat(entrada)
if (senha === 1234) {
    console.log("Acesso permitido.")
} else {
    console.log("Acesso negado.")
}