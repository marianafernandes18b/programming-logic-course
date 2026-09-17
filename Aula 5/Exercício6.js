const readline = require('readline-sync');

// 1. Solicita os dois números
let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");

// 2. Apresenta o menu de opções
console.log("\n--- MENU DE OPERAÇÕES ---");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
console.log("5 - Resto da divisão");

let opcao = readline.questionInt("\nEscolha uma operacao (1 a 5): ");

let resultado;

console.log("\n--- RESULTADO ---");

// 3. Executa a operação correspondente
switch (opcao) {
  case 1:
    resultado = numero1 + numero2;
    console.log(`A soma de ${numero1} + ${numero2} é = ${resultado}`);
    break;

  case 2:
    resultado = numero1 - numero2;
    console.log(`A subtração de ${numero1} - ${numero2} é = ${resultado}`);
    break;

  case 3:
    resultado = numero1 * numero2;
    console.log(`A multiplicação de ${numero1} * ${numero2} é = ${resultado}`);
    break;

  case 4:
    // Validação para não permitir divisão por zero
    if (numero2 === 0) {
      console.log("Erro: Não é possível realizar divisão por zero!");
    } else {
      resultado = numero1 / numero2;
      console.log(`A divisão de ${numero1} por ${numero2} é = ${resultado}`);
    }
    break;

  case 5:
    // Validação para não permitir divisão por zero também no resto
    if (numero2 === 0) {
      console.log("Erro: Não é possível calcular o resto com divisão por zero!");
    } else {
      resultado = numero1 % numero2;
      console.log(`O resto da divisão de ${numero1} por ${numero2} é = ${resultado}`);
    }
    break;

  default:
    console.log("Erro: Opção inválida! Escolha um número de 1 a 5.");
}

console.log("-----------------");