function getNumeroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getNumeroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}while (opcao != -1)

console.log('Fim')