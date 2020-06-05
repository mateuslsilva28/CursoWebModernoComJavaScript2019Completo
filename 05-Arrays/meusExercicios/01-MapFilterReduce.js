const array1 = [1,2,3, 7,8,9,2,3,6,5,7.7,8.8,9.9]
//Definindo numeros 
console.log(array1)

//triplicando o valor dos números
const array2 = array1.map(valor => valor*3)
console.log(array2)

//filtrando os números maiores que 10
const array3 = array2.filter(function(valor){
    return valor > 10
})
console.log(array3)

//acumulando os numerós maiores que 10
const resultado = array3.reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)