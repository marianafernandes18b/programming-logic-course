function mudarOpcao() {
  let opcao = document.getElementById('opcao').value;
  let entradasDiv = document.getElementById('entradas');
  let resultadoDiv = document.getElementById('resultado');

  entradasDiv.innerHTML = '';
  resultadoDiv.innerText = '';

  if (opcao === '1') {
    entradasDiv.innerHTML = `
      <div class="campo">
        <label>Digite um número:</label>
        <input type="number" id="num1" placeholder="Ex: 4">
      </div>`;
  } else if (opcao === '2') {
    entradasDiv.innerHTML = `
      <div class="campo">
        <label>Primeiro valor:</label>
        <input type="number" id="num1" placeholder="Ex: 10">
      </div>
      <div class="campo">
        <label>Segundo valor:</label>
        <input type="number" id="num2" placeholder="Ex: 20">
      </div>`;
  } else if (opcao === '3') {
    entradasDiv.innerHTML = `
      <div class="campo">
        <label>Digite um valor:</label>
        <input type="number" id="num1" placeholder="Ex: 5">
      </div>`;
  }
}

function executar() {
  let opcao = document.getElementById('opcao').value;
  let resultadoDiv = document.getElementById('resultado');

  let num1Input = document.getElementById('num1');
  let num2Input = document.getElementById('num2');

  if (!opcao) {
    resultadoDiv.innerText = 'Por favor, selecione uma opção.';
    return;
  }

  let val1 = num1Input ? Number(num1Input.value) : null;
  let val2 = num2Input ? Number(num2Input.value) : null;

  switch (Number(opcao)) {
    case 1:
      if (num1Input.value === '') {
        resultadoDiv.innerText = 'Digite um número válido.';
        return;
      }
      if (val1 % 2 === 0) {
        resultadoDiv.innerText = `O número ${val1} é PAR.`;
      } else {
        resultadoDiv.innerText = `O número ${val1} é ÍMPAR.`;
      }
      break;

    case 2:
      if (num1Input.value === '' || num2Input.value === '') {
        resultadoDiv.innerText = 'Digite ambos os valores.';
        return;
      }
      if (val1 > val2) {
        resultadoDiv.innerText = `O maior valor é: ${val1}`;
      } else if (val2 > val1) {
        resultadoDiv.innerText = `O maior valor é: ${val2}`;
      } else {
        resultadoDiv.innerText = 'Os dois valores são iguais.';
      }
      break;

    case 3:
      if (num1Input.value === '') {
        resultadoDiv.innerText = 'Digite um número válido.';
        return;
      }
      let dobro = val1 * 2;
      resultadoDiv.innerText = `O dobro de ${val1} é: ${dobro}`;
      break;

    default:
      resultadoDiv.innerText = 'Opção inválida!';
  }
}