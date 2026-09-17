const readline = require('readline-sync');

// Classe Aluno com construtor, métodos para calcular média, verificar situação e exibir informações do aluno
class Aluno {
    constructor(nome, cpf, prova1, prova2) {
        this.nome = nome;
        this.cpf = cpf;
        this.prova1 = prova1;
        this.prova2 = prova2;
    }

    calcularMedia() {
        return (this.prova1 + this.prova2) / 2;
    }

    verificarSituacao() {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "APROVADO";
        } else if (media >= 5 && media < 7) {
            return "RECUPERAÇÃO";
        } else {
            return "REPROVADO";
        }
    }

    mostrarAluno() {
        console.log(`\n---------------------------------`);
        console.log(`Nome: ${this.nome} | CPF: ${this.cpf}`);
        console.log(`Notas: [${this.prova1.toFixed(1)}] e [${this.prova2.toFixed(1)}]`);
        console.log(`Média: ${this.calcularMedia().toFixed(1)} -> Situação: ${this.verificarSituacao()}`);
        console.log(`---------------------------------`);
    }
}

 // Exibimos o cabeçalho do sistema
console.log("=== SISTEMA DE CADASTRO ESCOLAR ===");

// Criamos um Array vazio para guardar a lista de alunos
const listaDeAlunos = [];
let continuarCadastrando = true;

// Loop para cadastrar alunos enquanto o usuário desejar
while (continuarCadastrando) {
    console.log(`\n--- Cadastrando o ${listaDeAlunos.length + 1}º Aluno ---`);
    
    const nomeDigitado = readline.question("Digite o nome do aluno: ");
    const cpfDigitado = readline.question("Digite o CPF do aluno: ");
    const nota1Digitada = readline.questionFloat("Digite a nota da Prova 1: ");
    const nota2Digitada = readline.questionFloat("Digite a nota da Prova 2: ");

    // Criamos um novo objeto Aluno com os dados digitados
    const novoAluno = new Aluno(nomeDigitado, cpfDigitado, nota1Digitada, nota2Digitada);
    listaDeAlunos.push(novoAluno);

    // Perguntamos se o usuário deseja continuar cadastrando
    console.log("\n"); 
    const resposta = readline.question("Deseja cadastrar outro aluno? (S/N): ");
    
    // Se a resposta não for 'S' ou 's', paramos o loop
    if (resposta.toUpperCase() !== 'S') {
        continuarCadastrando = false;
    }
}

// Exibimos o relatório final da turma
console.log("\n\n=================================");
console.log("   RELATÓRIO FINAL DA TURMA      ");
console.log("=================================");

// 6. Iteramos sobre a lista de alunos e chamamos o método mostrarAluno() para cada um
for (const aluno of listaDeAlunos) {
    aluno.mostrarAluno();
}

console.log(`\nTotal de alunos cadastrados: ${listaDeAlunos.length}`);