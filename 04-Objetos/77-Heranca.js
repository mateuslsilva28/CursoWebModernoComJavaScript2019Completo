const ferrari = {
    modelo: 'F40',
    VelMax: 324
}

const volvo = {
    modelo: 'V40',
    VelMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto (){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype)
console.log(meuObjeto.prototype)