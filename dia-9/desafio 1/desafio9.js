//MAXWELL RESENDE
//CRIANDO VARIÁVEIS

let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = prompt("Digite seu peso em kg")
let altura = prompt("Digite sua altura em metros")
let profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é "
+ profissao + ", tem " + altura + " m de altura e pesa " + peso + "kg."
)

//VERIFICANDO IDADE
if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas.")
} else {
    console.log("Sem gelada para você")
}

//DESCOBRINDO IDADE FRACIONADA
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)


let imc = peso / (altura * altura)

if( imc < 18.5) {
    console.log("Magreza")
}else if(imc < 25) {
    console.log("Normal")
}else if (imc <= 30) {
    console.log("Sobrepeso")
}else {
    console.log("Obesidade")
}

let anoNascimento = 2023 - idade
let idadeAgora = 0
console.log("voce nasceu em: " + anoNascimento)

for (let anonasceu = anoNascimento; anonasceu <= 2023; anonasceu++) {
    console.log(anonasceu + " = " + idadeAgora + " anos de idade")
    idadeAgora++
}

//LOOP SDOWHILE
do {
//INSERIR LÓGICA ANTERIOR
 let continuar = prompt("Deseja inserir os dados novamente? (s/n)") 
} while(continuar == "s")