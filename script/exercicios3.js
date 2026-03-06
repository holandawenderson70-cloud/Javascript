function exercicio3() {
    const compra = prompt("número da sua compra ")
    const parcela = prompt("Qual a sua parcela ")
    const resultado = compra / parcela
    
    alert("essas são as suas parcelas " +resultado )

}

const buttonExercicio3 = document.getElementById("exercicios3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })
// Peça o valor total de uma compra e o número de parcelas.
//  Mostre o valor de cada parcela.
