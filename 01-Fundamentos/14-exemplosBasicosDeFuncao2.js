//armazenando uma função em uma váriavle
const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma arrow function em uma váriavel

const soma = (a,b) => {
    return a +b
}

    console.log(soma(3,5))

//retorno implicito em arrow function

const subtracao = (a ,b) => a-b
console.log(subtracao(3,5))

const imprimir2 = a => console.log(a)
imprimir2('topper')