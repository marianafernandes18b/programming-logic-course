function calcularCompra(nomeProduto, precoProduto, quantidadeVendida) {
  // 1. Cálculo do valor inicial da compra
  const valorCompra = precoProduto * quantidadeVendida;

  // 2. Cálculo do desconto
  let percentualDesconto = 0;
  
  if (valorCompra >= 1000) {
    percentualDesconto = 0.15; // 15% de desconto
  } else if (valorCompra >= 500) {
    percentualDesconto = 0.10; // 10% de desconto
  } else if (valorCompra < 500) {
    percentualDesconto = 0.05; // 5% de desconto (Condição < 500 explícita)
  }
  
  const valorDesconto = valorCompra * percentualDesconto;

  // 3. Cálculo do frete
  let valorFrete = 0;
  
  if (valorCompra >= 800) {
    valorFrete = 0; // Frete grátis
  } else {
    valorFrete = 50; // Frete fixo de R$ 50
  }

  // 4. Definição da Categoria da compra
  let categoria = "";
  
  if (valorCompra >= 1000) {
    categoria = "Compra Grande";
  } else if (valorCompra >= 500) {
    categoria = "Compra Média";
  } else if (valorCompra < 500) {
    categoria = "Compra Pequena"; 
  }

  // 5. Cálculo do valor final
  const valorFinal = (valorCompra - valorDesconto) + valorFrete;

  // 6. Exibição dos resultados formatados (Aplicando o REPLACE)
  console.log(`=== RESUMO DA COMPRA ===`);
  console.log(`Produto: ${nomeProduto}`);
  console.log(`Quantidade: ${quantidadeVendida}x`);
  console.log(`Categoria: ${categoria}`);
  console.log(`------------------------`);
  
  // Usando .replace('.', ',') para trocar o ponto pela vírgula
  console.log(`Valor da Compra: R$ ${valorCompra.toFixed(2).replace('.', ',')}`);
  console.log(`Desconto (${percentualDesconto * 100}%): - R$ ${valorDesconto.toFixed(2).replace('.', ',')}`);
  console.log(`Frete: R$ ${valorFrete.toFixed(2).replace('.', ',')}`);
  
  console.log(`------------------------`);
  console.log(`VALOR FINAL: R$ ${valorFinal.toFixed(2).replace('.', ',')}`);
  console.log(`========================\n`);
}

