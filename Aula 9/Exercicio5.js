const readline = require('readline-sync');

let matriz = [
    [], 
    [], 
    []
];

console.log("--- Vamos preencher a matriz de usuários ---");

for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        let nomeUsuario = readline.question(`Digite o usuario para a posicao [${linha}][${coluna}]: `);
        matriz[linha][coluna] = nomeUsuario;
    }
}

console.log("\n--- Mostrando a matriz como tabela ---");

// HORA DE TIRAR O COELHO DA CARTOLA!!!!!!!!!!!
console.table(matriz);