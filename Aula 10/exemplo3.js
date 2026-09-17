class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

//Criar um método chamado mostrar 

  mostrar() {
    console.log(`Nome: ${this.nome}, Salário: ${this.salario}`);



  }

}

let funcionario1 = new Funcionario("João", 3980);
funcionario1.mostrar();













