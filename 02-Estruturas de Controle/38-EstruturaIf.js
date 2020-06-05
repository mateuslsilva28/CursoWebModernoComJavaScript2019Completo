function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com nota ' + nota)
    }
}

soBoaNoticia(8)

function seForVerdadeEuFalo (valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
seForVerdadeEuFalo(-1)