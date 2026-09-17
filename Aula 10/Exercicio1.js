const readline = require('readline');

class Funcionario {
  constructor(nome, salario, mesesTrabalhados) {
    this.nome = nome;
    this.salario = salario;
    this.mesesTrabalhados = mesesTrabalhados;
  }

  calcularSalarioTotal() {
    return this.salario * this.mesesTrabalhados;
  }

  mostrarFuncionario() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário: R$ ${this.salario}`);
    console.log(`Meses Trabalhados: ${this.mesesTrabalhados}`);
  }
}

const funcionario1 = new Funcionario("João", 2500, 6);
funcionario1.mostrarFuncionario();
console.log(`Salário total de ${funcionario1.nome} após ${funcionario1.mesesTrabalhados} meses: R$ ${funcionario1.calcularSalarioTotal()}`);















