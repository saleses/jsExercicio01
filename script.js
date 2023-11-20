// Operações matémáticas

// Entrada de dados
let number1 = prompt("Digite o primeiro número: ")
let number2 = prompt("Digite o segundo número: ")

// Operações matemáticas
// soma
const sumNumbers = (Number(number1) + Number(number2))
const subNumbers = (Number(number1) - Number(number2))
const multNumbers = (Number(number1) * Number(number2))
const divNumbers = (Number(number1) / Number(number2))
const restNumbers = (Number(number1) % Number(number2))

// Imprime operações matemáaticas
alert(`A soma dos  dois números é ${sumNumbers}`)
alert(`A subtração dos dois números é ${subNumbers}`)
alert(`A multiplicação dos dois números é ${multNumbers}`)
alert(`A divisão dos dois números é ${divNumbers}`)
alert(`O resto da divisão entre os números é ${restNumbers}`)

// verificação se o resultado da soma é um número par
numberZero = (Number(number1) + Number(number2)) % 2

if(numberZero == 0) {
    alert(`
    A soma dos dois números é par: ${sumNumbers}
    `)
} else {
    alert(`
    A soma dos dois números é ímpar: ${sumNumbers}
    `)
}

// Verifica se são números iguais
const equalsNumber = (number1 == number2)

if(equalsNumber) {
    alert(`
    Os números digitados são iguais.`)
} else {
    alert(`
    Os números digitados são diferentes.
    `)
}