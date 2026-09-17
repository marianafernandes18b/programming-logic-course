// número escolhido pelo usuário e gera uma tabuada de multiplicar do contador de 0 a 10

const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question("Digite um número:"))

for (let i = 0; i <= 10; i++) {
    let resultado = numero * i
	console.log(`${numero} x ${i} = ${numero * i}`);
}