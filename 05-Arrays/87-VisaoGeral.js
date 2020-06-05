//Array em JS é um objeto
//Não existe array nativo em js

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados)
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados, aprovados.length)
aprovados[9] = 'toppen'
console.log(aprovados, aprovados.length)
console.log(aprovados[8])
aprovados[8] = 'haha'
console.log(aprovados, aprovados.length)
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados)

aprovados.splice(1,2, 'Elemento 1', 'Elemento 2')
//splice você pode excluir, ou adicionar, ou excluir e adicionar em um determinado indíce
console.log(aprovados)