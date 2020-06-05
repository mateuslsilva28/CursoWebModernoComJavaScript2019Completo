function soma(){
    let soma = 0
    for(let i in arguments){
        soma+= arguments[i]
    }
    return soma
}

console.log(soma(5,4,5,6,7,1))
