

const readlineSync = require('readline-sync'); 

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularTotal() {
    return this.preco * this.quantidade;
  }

  mostrarProduto() {
    console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}, Quantidade: ${this.quantidade}`);
  }
}

console.log("--- Cadastro de Produtos ---");

for (let i = 0; i < 2; i++) {
  console.log(`\nCadastro do Produto ${i + 1}:`);
  
  let nome = readlineSync.question("Digite o nome do produto: ");
  let preco = parseFloat(readlineSync.question("Digite o preco: "));
  let quantidade = parseInt(readlineSync.question("Digite a quantidade: "));

  let produto = new Produto(nome, preco, quantidade);
  
  console.log("\n--- Resultado ---");
  produto.mostrarProduto();
  console.log(`Total em estoque: R$ ${produto.calcularTotal().toFixed(2)}`);
}












