//Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function criarProduto (nomeProd, precoProd){
    return {
        nome: nomeProd,
        preco: precoProd
    }
}

console.log(criarProduto('Macarrão', 75.99))