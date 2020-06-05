/*class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
*/

//Função Construtora
function Pessoa(nome){
    this.nome = nome
    this.falar = function() {
        return `O meu nome é ${this.nome}`
    }
}

const pessoaa = new Pessoa('Péricles')
console.log(pessoaa.falar())