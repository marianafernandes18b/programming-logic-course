const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

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
    console.log(`Salário: R$ ${this.salario.toFixed(2).replace('.', ',')}`);
    console.log(`Meses Trabalhados: ${this.mesesTrabalhados}`);
  }
}

async function iniciarSistema() {
  const rl = readline.createInterface({ input, output });

  console.log("--- Sistema de Cadastro (Máximo de 5 funcionários) ---");

  let contador = 1;
  const maxFuncionarios = 5;

  // Loop para cadastrar até 5 funcionários
  while (contador <= maxFuncionarios) {
    console.log(`\n--- Cadastro do Funcionário ${contador} de ${maxFuncionarios} ---`);

    let nome = await rl.question("Digite o nome do funcionário (ou 'sair'): ");
    
    if (nome.toLowerCase() === 'sair') {
      break;
    }

    let salarioInput = await rl.question("Digite o salário: ");
    let mesesInput = await rl.question("Digite a quantidade de meses trabalhados: ");

    let salario = parseFloat(salarioInput.replace(',', '.'));
    let mesesTrabalhados = parseInt(mesesInput);

    let funcionario = new Funcionario(nome, salario, mesesTrabalhados);
    
    console.log("\n--- Resultado ---");
    funcionario.mostrarFuncionario();
    
    let totalFormatado = funcionario.calcularSalarioTotal().toFixed(2).replace('.', ',');
    console.log(`Salário total de ${funcionario.nome} após ${funcionario.mesesTrabalhados} meses: R$ ${totalFormatado}`);

    contador++;
  }

  rl.close();
  console.log("\nSistema encerrado!");
}

iniciarSistema();