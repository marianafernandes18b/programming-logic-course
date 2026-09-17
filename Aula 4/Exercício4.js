function identificarTurno(turnoInformado) {
  // Converte a letra para maiúscula para aceitar tanto 'm' quanto 'M'
  let turno = turnoInformado.toUpperCase();

  switch (turno) {
    case 'M':
      console.log("Bom dia!");
      break; // O break serve para parar a execução e não rodar os casos de baixo
      
    case 'T':
      console.log("Boa tarde!");
      break;
      
    case 'N':
      console.log("Boa noite!");
      break;
      
    default:
      // O default é o "caso contrário", acionado se nenhuma das opções acima for escolhida
      console.log("Turno inválido!");
      break;
  }
}

