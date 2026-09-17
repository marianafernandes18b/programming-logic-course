// Lista com as 5 entradas de dados
const alunos = [
    { nome: "Ana", prova01: 8.5, prova02: 7.0, prova03: 9.0 },
    { nome: "Bruno", prova01: 5.0, prova02: 6.5, prova03: 4.0 },
    { nome: "Carlos", prova01: 3.0, prova02: 4.5, prova03: 2.0 },
    { nome: "Daniela", prova01: 7.0, prova02: 7.5, prova03: 7.0 },
    { nome: "Eduardo", prova01: 6.0, prova02: 5.0, prova03: 5.5 }
];

// Cria um título na página HTML antes de listar os alunos
document.write("<h1>Resultado do Controle de Notas</h1>");

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let media = (aluno.prova01 + aluno.prova02 + aluno.prova03) / 3;
    
    if (media >= 7) {
        let situacao = "Aprovado(a)";
        // document.write escreve o texto direto na página do navegador. O <p> pula linha.
        document.write(`<p>Aluno(a): ${aluno.nome} | Média: ${media.toFixed(1)} | Situação: <strong>${situacao}</strong></p>`);
    } 
    else if (media >= 5) {
        let situacao = "Recuperação";
        document.write(`<p>Aluno(a): ${aluno.nome} | Média: ${media.toFixed(1)} | Situação: <strong>${situacao}</strong></p>`);
    } 
    else {
        let situacao = "Reprovado(a)";
        document.write(`<p>Aluno(a): ${aluno.nome} | Média: ${media.toFixed(1)} | Situação: <strong>${situacao}</strong></p>`);
    }
}
