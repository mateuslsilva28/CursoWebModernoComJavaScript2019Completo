//Mapear um array para outros array do mesmo tamanho com dados alterados



//Map é um for com propósito de alteração
const array = [2, 3,4,5]
const array2 = array.map(valor => valor*2)
console.log(array)
console.log(array2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = array2.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)