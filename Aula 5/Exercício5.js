// A função que o botão do HTML vai chamar
function analisarFinanciamento() {
  
  // 1. Pegamos os valores direto das caixinhas de input do HTML (substituindo o readline-sync)
  let nome = document.getElementById("nome").value;
  let salario = Number(document.getElementById("salario").value);
  let valorParcela = Number(document.getElementById("parcela").value);
  let numParcelas = Number(document.getElementById("numParcelas").value);
  
  // Pegamos a div onde o resultado vai aparecer
  let resultadoDiv = document.getElementById("resultado");

  // 2. Calcular o limite de 30% do salário permitido para a parcela
  let limiteParcela = salario * 0.30;

  // 3. Avaliação de condições
  let parcelaValida = valorParcela <= limiteParcela;
  let prazoValido = numParcelas <= 60;

  // Variável para montar o texto que vai aparecer na tela (usamos <br> para pular linha no HTML)
  let textoResultado = `
    <strong>--- ANÁLISE DE FINANCIAMENTO ---</strong><br>
    Cliente: ${nome}<br>
    Salário Base: R$ ${salario.toFixed(2)}<br>
    Limite Máximo de Parcela (30%): R$ ${limiteParcela.toFixed(2)}<br>
    Proposta: ${numParcelas}x de R$ ${valorParcela.toFixed(2)}<br><br>
  `;

  // 4. Exibição do resultado e dos motivos
  if (parcelaValida && prazoValido) {
    let totalPago = valorParcela * numParcelas;
    textoResultado += `<strong>Status: FINANCIAMENTO APROVADO! ✅ </strong><br>`;
    textoResultado += `Valor total a ser pago: R$ ${totalPago.toFixed(2)}`;
    
    // Aplica o estilo verdinho que você criou no CSS
    resultadoDiv.className = "aprovado"; 
    
  } else {
    textoResultado += `<strong>Status: FINANCIAMENTO NEGADO ❌</strong><br>`;
    textoResultado += `Motivo(s):<br>`;
    
    if (!parcelaValida) {
      textoResultado += `- O valor da parcela excede o limite de 30% do salário do cliente.<br>`;
    }
    
    if (!prazoValido) {
      textoResultado += `- O número de parcelas excede o limite máximo permitido (60 vezes).<br>`;
    }
    
    // Aplica o estilo vermelhinho do CSS
    resultadoDiv.className = "negado";
  }

  // 5. Injeta o texto na tela e faz a caixa aparecer
  resultadoDiv.innerHTML = textoResultado;
  resultadoDiv.style.display = "block"; 
}