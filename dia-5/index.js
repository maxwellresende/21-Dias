//CRIANDO VARIÁVEIS
let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))
let num3 = parseInt(prompt("Escolha a operação que deseja realizar:"
    + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

    //CRIANDO SWITCHECASE
    switch (opcao) {
        case 1:
            console.log(num1 + " + " + num2 + " - " + (num1 + num2))
            break;
         case 2:
            console.log(num1 + " - " + num2 + " - " + (num1 - num2))
            break;
        case 3:
            console.log(num1 + " * " + num2 + " = " + (num1 * num2)) 
            break;
        default:
            console.log(num1 + " / " + num2 + " = " + (num1 / num2)) 
            break;
}