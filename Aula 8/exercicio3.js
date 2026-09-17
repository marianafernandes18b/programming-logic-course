function calcular() {
    // Pega os valores dos inputs e converte para número
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    
    let divResultado = document.getElementById("resultado");
    let resultado = 0;
    let nomeOperacao = "";

    // Valida se os inputs foram preenchidos
    let input1Valido = document.getElementById("num1").value !== "";
    let input2Valido = document.getElementById("num2").value !== "";

    if (input1Valido && input2Valido) {
        
        // Executa a operação selecionada pelo usuário
        if (operacao === "1") {
            resultado = num1 + num2;
            nomeOperacao = "Soma";
        } else if (operacao === "2") {
            resultado = num1 - num2;
            nomeOperacao = "Subtração";
        } else if (operacao === "3") {
            resultado = num1 * num2;
            nomeOperacao = "Multiplicação";
        } else if (operacao === "4") {
            // Validação para evitar divisão por zero
            if (num2 === 0) {
                divResultado.innerHTML = "<span style='color: red;'>Não é possível dividir por zero!</span>";
                divResultado.style.display = "block";
                return; 
            }
            resultado = num1 / num2;
            nomeOperacao = "Divisão";
        }

        // Exibe o resultado da operação no divResultado
        divResultado.innerHTML = `Operação: <strong>${nomeOperacao}</strong> <br> Resultado: <strong>${resultado.toFixed(2)}</strong>`;
        divResultado.style.display = "block";

    } else {
        // Exibe uma mensagem de erro caso algum dos inputs não tenha sido preenchido
        divResultado.innerHTML = "<span style='color: red;'>Por favor, preencha ambos os números.</span>";
        divResultado.style.display = "block";
    }
}