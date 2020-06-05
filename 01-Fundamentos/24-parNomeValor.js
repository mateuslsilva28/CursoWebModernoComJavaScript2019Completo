//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: 90,
    endreco: {
        logradouro: 'Rua Dahora',
        numero: 123,
        complemento: 'C-3'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)