function exercicios1() {
    const produto = prompt("Qual o nome do seu produto")
    const preço = prompt("Me fale o preço do seu produto")
    
    alert("o " +produto+ " custa " +preço+ " reais")

}

const buttonExercicio1 = document.getElementById("exercicios1")
buttonExercicio1.addEventListener('click', () => { exercicios1 () } )

// Peça ao usuário o nome de um produto e o preço.
//  Mostre uma mensagem dizendo quanto custa o produto.
