function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,10,5,4,2,1)

function soma (a, b = 0){
    return a+b;
}

console.log(soma(7))