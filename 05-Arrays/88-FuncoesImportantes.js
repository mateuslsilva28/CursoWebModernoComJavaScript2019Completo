//Métodos Importantes do Array mais "simples"

const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
console.log(pilotos)
pilotos.pop()//Mass quebrou o carro! Saiu da lista - remove da ultima posição
console.log(pilotos)

pilotos.push("Verstappen") //adiciona na ultima posição
console.log(pilotos)

pilotos.shift()//remove da primeira posição
console.log(pilotos)

pilotos.unshift("Hamilton")//adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa quebrou dnv
console.log(pilotos)

//remover e adicionar
pilotos.splice(3,1,'CR7')
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
