function calcularSalario() {
    let nomeFuncionario = document.getElementById("nome").value;
    let salarioBruto= Number(document.getElementById("salarioBase").value);


    let inss
    let vale
    let salarioLiquido

    //inss
    if (salarioBruto >= 3000) {
        inss = salarioBruto * 0.11;
    } else {
        inss = salarioBruto * 0.08;
    }

    //vale transporte
    vale = salarioBruto * 0.05;

    //salário líquido
    salarioLiquido = salarioBruto - inss - vale;

    document.getElementById("resultado").innerHTML =
    "<h3>Resultado</h3>" +
    "Nome do funcionário: " + nomeFuncionario + "<br>" +
    "Salário Bruto: R$ " + salarioBruto.toFixed(2) + "<br>" +
    "Desconto INSS: R$ " + inss.toFixed(2) + "<br>" +
    "Desconto Vale Transporte: R$ " + vale.toFixed(2) + "<br>" +
    "Salário Líquido: R$ " + salarioLiquido.toFixed(2);

}