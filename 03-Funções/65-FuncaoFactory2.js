function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('Macarrão', 75.99))
console.log(criarProduto('Bata', 1080.99))