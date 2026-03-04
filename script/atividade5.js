//Peça o valor de um depósito bancário e calcule o saldo após 
// adicionar 2% de rendimento.

const deposito = prompt("Quanto você precisar despositar? ")
const resultado = deposito * (1 + 2 / 100)

alert("O seu saldo bancário é " +resultado)