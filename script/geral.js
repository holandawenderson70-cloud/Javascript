function exercicios1() {
    const produto = prompt("Qual o nome do seu produto")
    const preço = prompt("Me fale o preço do seu produto")

    alert("o " + produto + " custa " + preço + " reais")

}

const buttonExercicio1 = document.getElementById("exercicios1")
buttonExercicio1.addEventListener('click', () => { exercicios1() })

function exercicio2() {
    const comprimento = Number(prompt("Me fala o comprimento que deseja medir"))
    const largura = Number(prompt("Me fale a largura que deseja medir"))
    const resultado = comprimento * largura

    alert("Você tem " + resultado + " metros quadrados na sua sala")

}

const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })


function exercicio3() {
    const compra = prompt("número da sua compra ")
    const parcela = prompt("Qual a sua parcela ")
    const resultado = compra / parcela

    alert("essas são as suas parcelas " + resultado)

}

const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

function exercicios4() {
    const dias = prompt("Quantos dias você viajou ")
    const resultado = dias * 24

    alert("Você viajou " + resultado + " horas")

}

const buttonExercicios4 = document.getElementById("exercicios4")
buttonExercicios4.addEventListener('click', () => [exercicios4()])

function exercicio5() {
    const deposito = prompt("Quanto você precisar despositar? ")
    const resultado = deposito * (1 + 2 / 100)

    alert("O seu saldo bancário é " + resultado)

}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

function exercicios6() {
    const quatidade_de_litro = prompt("Quantos litros de gasolina foi consumido??")
    const distancia = prompt("quantas distancia você pecorreu?")

    const resultado = distancia / quatidade_de_litro

    alert("Você precisaria de " + resultado + " de combustivel")

}

const buttonexercicios6 = document.getElementById("exercicios6")
buttonexercicios6.addEventListener('click', () => { exercicios6() })

function exercicios7() {
    const NUMERO = prompt("me de um número")
    const antecessor = NUMERO - 1
    const sucessor = (NUMERO + 1)

    alert("O antecessor " + antecessor + " Sucrssor " + sucessor)
}
const buttonexercicios7 = document.getElementById("exercicios7")
buttonexercicios7.addEventListener('click', () => { exercicios7() })

function exercicio8() {

    const anos = prompt("Quantos anos você tem??")
    const calculo = anos * 52

    alert("Você tem " + calculo)
}

const butterexercicio8 = document.getElementById("exercicio8")
butterexercicio8.addEventListener('click', () => { exercicio8() })

function desafio0() {
    const numero = prompt("me de um número decimal:")
    const cima = numero - (numero % 1)
    const baixo = numero + 1
    const duascasas = numero.toFixad(2)
}
const butterdesafio0 = document.getElementById("desafio0")
butterdesafio0.addEventListener('click', () => { desafio0() })