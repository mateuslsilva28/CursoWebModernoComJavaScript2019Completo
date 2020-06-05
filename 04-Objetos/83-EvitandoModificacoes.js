//Object.preventExtension
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.00,
    tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//preventExtension permite que o objeto seja modificado e que tenha atributos deletados, mas não permite adicionar atributos

//Object.seal

const pessoa = { nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Seal permite que o objeto seja apenas modificado, mas não adicionar atributos ou deletar

//Object.freeze = selado + valores constantes

const constante = {
    nome: 'Pedro',
    idade: 56,
    Endereco: {
        rua: 'Luiza Rosa',
        numero: 316,
        Complemento: 'C-3'
    }
}

Object.freeze(constante)
console.log(Object.isFrozen(constante))

constante.nome = 'Ruan'
delete constante.idade
constante.Ronald = 'TOP'

console.log(constante)