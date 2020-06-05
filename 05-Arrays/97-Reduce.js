//recebe Callback
const alunos = [
    {nome:'Joao', nota:[3,4,5], bolsista: false},
    {nome:'Mari', nota:9.2, bolsista: true},
    {nome:'Pedroo', nota:9.8, bolsista: false},
    {nome:'AnaMaria', nota:8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},)
console.log(resultado)