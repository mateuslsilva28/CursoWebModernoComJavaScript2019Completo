//Classe vs Função Factory


//Class não funciona perfeitamente porque o this vria 
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//Função Factory funciona perfeitamente no Browser por causa do contexto léxico

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('João')
p2.falar()