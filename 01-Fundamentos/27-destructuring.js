const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {sobrenoma, bemHumorada = true} = pessoa
console.log(sobrenoma, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)