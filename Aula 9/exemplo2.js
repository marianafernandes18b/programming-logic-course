let alunos = ["João", "Maria", "Carlos", "Ana", "Pedro"];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

alunos.push("Fernanda"); 
console.log("Vetor atualizado:"); 
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

let aluno = [];
aluno[0] = "João";
console.log("Aluno:", aluno);