//Percorrendo arrays com forEach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


//ForEach chama uma call back com parametros a cada iteração do array 
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//ForEacha chama uma call back com quantos parametros quiser
const exibirAprovados = aprovado => console.log(aprovados)
aprovados.forEach(exibirAprovados)

//o terceiro parametro é passado como o array de origem
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
