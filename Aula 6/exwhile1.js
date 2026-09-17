let continuar = "sim"

while (continuar.toLowerCase() == "sim") {

let opcao = Number(prompt(

    "Menu de Opções: \n\n"+
    "1 - Verificar número(par ou impar)\n"+
    "2- Comparação de Números\n"+
    "3- Calcular o dobro\n"+
    "Digite uma opção:"
)
)
switch(opcao) {
    case 1:
        document.write("Par ou Ímpar")
        let n = Number(prompt("Escolha um número:"))
        if (n%2==0) {
            document.write(n+ "é Par. <br>")
        } else {
            document.write(n+ "é ímpar.<br>")
        }
        break;

        case 2:
            document.write("Comparação de números <br>")
            let n1 = Number(prompt("Escolha o 1° número: "))
            let n2 = Number(prompt("Escolhar o 2° número: "))
            if (n1> n2) {
                document.write(n1 + "é maior que" + n2)
            } else {
                document.write(n1 + "é menor que" + n2)
            }
            break;


            case 3:
                document.write("Dobro do Número<br>");
                let num = Number(prompt("Escolha um número:"));
                let dobro = num * 2
                document.write("O dobro de" + num + "é:" + dobro);
                break;
                default:
                    alert("Opção Inválida")
                    break;
}

    continuar = prompt("Deseja continuar? sim/não")

}
document.write("Final do programa")