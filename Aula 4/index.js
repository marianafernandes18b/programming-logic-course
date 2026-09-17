function classificarAtleta() {
  // 1. Pegando os valores que o usuário digitou na tela do HTML
  let inputEsporte = document.getElementById("esporte").value;
  let inputIdade = document.getElementById("idade").value;

  // Transformando em números
  let esporte = parseInt(inputEsporte);
  let idade = parseInt(inputIdade);
  
  let categoria = "";
  let mensagem = ""; // Variável para montar a resposta na tela

  // 2. Classificando o esporte com switch/case
  switch (esporte) {
    case 1:
      mensagem = "Esporte: Natação <br>";
      if (idade < 10) {
        categoria = "Categoria: Mirim";
      } else if (idade <= 14) {
        categoria = "Categoria: Infantil";
      } else if (idade > 14) {
        categoria = "Categoria: Juvenil";
      }
      break;

    case 2:
      mensagem = "Esporte: Corrida <br>";
      if (idade < 16) {
        categoria = "Categoria: Júnior";
      } else if (idade >= 16) {
        categoria = "Categoria: Adulto";
      }
      break;

    case 3:
      mensagem = "Esporte: Ciclismo <br>";
      if (idade >= 18) {
        categoria = "Categoria: Profissional";
      } else if (idade < 18) {
        categoria = "Categoria: Amador";
      }
      break;

    default:
      mensagem = "Opção inválida! Escolha 1, 2 ou 3.";
      break;
  }

  // 3. Juntando as informações se a categoria foi encontrada
  if (categoria !== "") {
    mensagem += "Idade: " + idade + " anos <br>";
    mensagem += categoria;
  }

  // 4. Injetando o texto final de volta na tela do HTML
  document.getElementById("resultado").innerHTML = mensagem;
}