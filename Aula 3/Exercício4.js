const readilne = require("readline-sync");
let entrada = readline.question ("Digite o valor da compra: R$")
console.log ("O valor da compra é: R$" + entrada)
let valor = parseFloat (entrada.replace(",", "."))
console.log ("O valor da compra é: R$" + valor.toFixed(2))
if (valor >= 100) {
    console.log ("Parabéns! Sua compra atingiu o valor R$100,00 e você ganhou um desconto de 10%!")
} else if (valor < 100) {
    console.log ("Sua compra não atingiu o valor R$100,00. Você não ganhou desconto.")
} else {
    console.log ("Entrada inválida. Por favor, digite um valor válido.")
}