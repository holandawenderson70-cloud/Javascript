function exercicios4() {
    const dias = prompt("Quantos dias você viajou " )
    const resultado = dias * 24
    
    alert("Você viajou " +resultado+ " horas")

}

const buttonExercicios4 = document.getElementById("exercicios4")
buttonExercicios4.addEventListener('click', () => [ exercicios4 () ])

//Peça a quantidade de dias que uma pessoa viajou. Mostre quantas horas isso representa.