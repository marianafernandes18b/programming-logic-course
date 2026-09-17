function calcular() {
    let continua = true;

    // Laço while para repetir o programa conforme o enunciado pediu
    while (continua) {
        
        // 1. Solicita o número utilizando o prompt() obrigatório
        let entrada = prompt("Digite um número:");
        
        // Se o usuário clicar em "Cancelar", o loop é encerrado
        if (entrada === null) {
            break;
        }

        let numero = Number(entrada);

        // 2. Calcula o dobro
        let dobro = numero * 2;
        
        // Preenche o input do dobro automaticamente (readonly)
        document.getElementById("dobro").value = dobro;
        
        // Preenche também o input do número para atualizar a tela
        document.getElementById("numero").value = numero;

        // Limpa os checkboxes antes da verificação
        document.getElementById("positivo").checked = false;
        document.getElementById("negativo").checked = false;
        document.getElementById("zero").checked = false;

        let situacao = "";

        // 3. Estrutura if else if else obrigatória para marcar o checkbox e a situação
        if (dobro > 0) {
            document.getElementById("positivo").checked = true;
            situacao = "POSITIVO";
        } else if (dobro < 0) {
            document.getElementById("negativo").checked = true;
            situacao = "NEGATIVO";
        } else {
            document.getElementById("zero").checked = true;
            situacao = "ZERO";
        }

        // 4. Exibe o resultado na div utilizando innerHTML
        document.getElementById("resultado").innerHTML = 
            "O número digitado é " + numero + ", o seu dobro é " + dobro + " e o resultado é <strong>" + situacao + "</strong>.";

        // 5. Pergunta se deseja continuar (S / N)
        let opcao = prompt("Deseja realizar outra operação? Digite S para continuar ou N para sair.");

        if (opcao === null) {
            continua = false;
            break;
        }

        // Transforma em maiúsculo para aceitar 's' ou 'S'
        opcao = opcao.toUpperCase();

        if (opcao === "S") {
            continue; // Continua o while
        } else if (opcao === "N") {
            alert("Programa encerrado.");
            continua = false;
        } else {
            alert("Opção inválida! O programa será encerrado.");
            continua = false;
        }
    }
}