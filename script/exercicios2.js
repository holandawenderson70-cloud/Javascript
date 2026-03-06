function exercicio2() {
    const comprimento = Number(prompt("Me fala o comprimento que deseja medir"))
    const largura = Number(prompt("Me fale a largura que deseja medir"))
    const resultado = comprimento * largura
    
    alert("Você tem " +resultado+ " metros quadrados na sua sala")

}

const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

// Peça o comprimento e a largura de um terreno. 
// Calcule e mostre a quantidade de metros quadrados.
// o carinha que escuta  - addEvantListner 