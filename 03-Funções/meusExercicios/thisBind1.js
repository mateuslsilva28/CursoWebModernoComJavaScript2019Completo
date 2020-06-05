const pessoa = {
    saudacao: 'Bomdia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falar2 = pessoa.falar.bind(pessoa)
falar2()

const batata = {
    aviso: 'Batata é bom',
    alerta(){
        console.log(this.aviso)
    }
}

batata.alerta()
const alerta2 = batata.alerta;
alerta2()
const alerta3 = batata.alerta.bind(batata)
alerta3()