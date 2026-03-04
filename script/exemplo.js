const rodape = document.getElementById("rodape")
//rodape.style.color = "red"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Um novo Título"

rodape.appendChild(novoTitulo)

// getElementByID = puxa um elemento do HTML
const header = document.getElementById("exemplo2")
header.appendChild(novoTitulo)

header.addEventListener("click", () => {
    alert("Abacaxi")
})