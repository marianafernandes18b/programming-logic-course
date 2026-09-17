function calculadoraDeOperacoes(simboloInformado) {
  // Criando a variável chamada 'operacao' com let
  let operacao = simboloInformado;

  switch (operacao) {
    case '+':
      console.log("Soma");
      break;
      
    case '-':
      console.log("Subtração");
      break;
      
    case '*':
      console.log("Multiplicação");
      break;
      
    case '/':
      console.log("Divisão");
      break;
      
    default:
      console.log("Operação inválida.");
      break;
  }
}