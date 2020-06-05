const alunos = [
    {nome:'Joao', nota:[3,4,5], bolsista: false},
    {nome:'Mari', nota:9.2, bolsista: true},
    {nome:'Pedroo', nota:9.8, bolsista: false},
    {nome:'AnaMaria', nota:8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?

const todosBolsista = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

// Desafio 2: Algum aluno é bolsista?
const algumBolsitas =(resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsitas))
