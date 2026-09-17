function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    
    let divResultado = document.getElementById("resultado");

    // Verifica se os valores de peso e altura são válidos (maiores que zero)
    if (peso > 0 && altura > 0) {
        
        // Calcula o IMC usando a fórmula: IMC = peso / (altura * altura)
        let imc = peso / (altura * altura);
        let classificacao = "";
        
     // Classifica o IMC de acordo com os valores estabelecidos pela Organização Mundial da Saúde (OMS)
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else if (imc < 35) {
            classificacao = "Obesidade Grau I";
        } else if (imc < 40) {
            classificacao = "Obesidade Grau II";
        } else {
            classificacao = "Obesidade Grau III (Mórbida)";
        }
        
        // Exibe o resultado do IMC e a classificação na div de resultado
        divResultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong> <br> Classificação: <strong>${classificacao}</strong>`;
        divResultado.style.display = "block"; 
        
    } else {
        // Exibe uma mensagem de erro caso os valores de peso ou altura sejam inválidos
        divResultado.innerHTML = "<span style='color: red;'>Por favor, preencha o peso e a altura corretamente.</span>";
        divResultado.style.display = "block";
    }
}