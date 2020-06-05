const notas = [7,8,9,0,8,6,5,4,3,6]

//sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}


//com callbackk

notasBaixas = notas.filter(function(nota){
    return nota <7}
    )


notasBaixas = notas.filter(nota => nota < 7)





const nota = [0,1,2,3,4,5,6,6.6,7.7,8,8.8,9,1.1,2.2,3.3,4.4]
let notamenor = []

for(let i in nota){
    if(nota[i]<5){
        notamenor.push(nota[i])
        console.log(nota[i])
    }
}
console.log(notamenor)

const notaMenor2 = nota.filter(function(nota){
  return nota <7  
})
console.log(notaMenor2)


const notasMenoresQue2 = nota => nota<2
const notamenor3 = nota.filter(notasMenoresQue2)
console.log(notamenor3)
