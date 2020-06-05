const a = {name: 'Teste'} 
const b = a

b.name = 'Opa'


console.log(a, b)

let c = 3

let d = c

d++

console.log(c, d)


let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) //não por ler toString de null

const produto = {}
produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!!produto.preco)