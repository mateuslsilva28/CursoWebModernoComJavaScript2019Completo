//Diferenças entre JSON e Objeto

const obj = {a: 1, b:2, c:3, soma(){ return a+b+c} }
console.log(JSON.stringify(obj))
//console.log(JSON.parse("{ a: 1, b: 2, c:3"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

//json todos os atributos e texto devem ficar em aspas duplas
console.log(JSON.parse('{"A":1, "B":2, "C":3}'))

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d":{}, "e": []}'))
