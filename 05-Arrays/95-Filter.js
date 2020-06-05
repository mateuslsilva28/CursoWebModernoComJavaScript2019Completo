//Retorna um novo array baseado em uma condição
const array = [3,7,10,4,6]

const array2 = array.filter( valor => valor>5)
console.log(array2)

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil:true},
    { nome: 'top', preco: 8000, fragil:false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.80, fragil: false}
]


//desafio
const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))