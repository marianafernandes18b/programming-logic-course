// Conta bancária com com classe de construtor e métodos para depósito, saque e exibição de saldo, nome do titular e saldo inicial.

const readlineSync = require('readline-sync');

class ContaBancaria {
  constructor(titular, numero, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("\n[Aviso] Saldo insuficiente para realizar o saque.");
    }
  }

  mostrarConta() {
    console.log("\n Dados Atualizados da Conta:");
    console.log(`Titular: ${this.titular}`);
    console.log(`Número da Conta: ${this.numero}`);
    console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2).replace('.', ',')}`);
  }
}

console.log("Sistema Bancário");

// Loop para cadastrar e operar contas bancárias
for (let i = 0; i < 3; i++) {
  console.log(`\n=== Cadastro e Operações da Conta ${i + 1} de 3 ===`);
  
  let titular = readlineSync.question("Digite o nome do titular: ");
  let numero = readlineSync.question("Digite o número da conta: ");
  let saldoInicial = parseFloat(readlineSync.question("Digite o saldo inicial: ").replace(',', '.'));

  let conta = new ContaBancaria(titular, numero, saldoInicial);

  let valorDeposito = parseFloat(readlineSync.question("Digite o valor para depósito: ").replace(',', '.'));
  conta.depositar(valorDeposito);

  let valorSaque = parseFloat(readlineSync.question("Digite o valor para saque: ").replace(',', '.'));
  conta.sacar(valorSaque);

  conta.mostrarConta();
}

console.log("\n Todas as 3 contas foram processadas com sucesso!");
