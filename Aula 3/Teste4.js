const readlineSync = require ("readline-sync")

let x = readlineSync.question("Digite o 1º valor: ")
let y = readlineSync.question("Digite o 2º valor: ")

if (x > y) {
    console.log(x = " é maior que " + y)
} else if (y > x) {
    console.log(x + " é menor que " + y)
} else {    
    console.log(x + " é igual a " + y)

}