//Peça a quantidade de litros de combustível 
// consumidos e a distância percorrida. Calcule o consumo médio (km por litro).

const quatidade_de_litro = prompt("Quantos litros de gasolina foi consumido??")
const distancia = prompt("quantas distancia você pecorreu?")

const resultado = distancia / quatidade_de_litro

alert("Você precisaria de " +resultado+  " de combustivel")