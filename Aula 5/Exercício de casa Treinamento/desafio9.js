// a partir daqui, esse é o último "//" (🤯🫩)]

const readlineSync = require('readline-sync');


let nomeUsuario = readlineSync.question("Digite o nome do usuario: ");
let codigoAcesso = readlineSync.questionInt("Digite o codigo do nivel de acesso (1 a 5): ");


let nivelAcesso = "";
let mensagemPermissao = "";


switch (codigoAcesso) {
    case 1:
        nivelAcesso = "Administrador";
        mensagemPermissao = "Acesso total ao sistema, gerenciamento de usuários e configurações avançadas.";
        break;
    case 2:
        nivelAcesso = "Gerente";
        mensagemPermissao = "Acesso a relatórios financeiros, aprovações e gestão de equipe.";
        break;
    case 3:
        nivelAcesso = "Supervisor";
        mensagemPermissao = "Acesso a relatórios operacionais e monitoramento das rotinas de trabalho.";
        break;
    case 4:
        nivelAcesso = "Funcionário";
        mensagemPermissao = "Acesso às tarefas diárias do setor e atualização de cadastro próprio.";
        break;
    case 5:
        nivelAcesso = "Visitante";
        mensagemPermissao = "Acesso restrito apenas para visualização de informações públicas.";
        break;
    default:
        nivelAcesso = "Código Inválido";
        mensagemPermissao = "Nenhuma ação permitida. Por favor, informe um código de 1 a 5.";
        break;
}

console.log("\n--- Painel de Controle de Acesso ---");
console.log(`Usuário: ${nomeUsuario}`);
console.log(`Nível de Acesso: ${nivelAcesso}`);
console.log(`Permissões do perfil: ${mensagemPermissao}`);