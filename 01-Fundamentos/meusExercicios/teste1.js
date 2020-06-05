/*const soma = nota => nota>7 ? 'Aprovado' : 'Reprovado'

console.log(soma(5))
*/

const soma = ([nota1, nota2]) => (nota1 + nota2)/2 >5 ? 'Aprovado' : 'Reprovado'

console.log(soma([n3,n4] = [Math.ceil(Math.random()*10),Math.ceil(Math.random()*10)]))
console.log(n3, n4)



const batata = ([b1,b2,b3,b4,b5]) => `${b1}${b2}${b3}${b4}${b5}`

const aleatorio = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

console.log(batata(
    [v1,v2,v3,v4,v5] = 
        [aleatorio.charAt(Math.ceil(Math.random()*35)),
        aleatorio.charAt(Math.ceil(Math.random()*35)),
        aleatorio.charAt(Math.ceil(Math.random()*35)),
        aleatorio.charAt(Math.ceil(Math.random()*35)),
        aleatorio.charAt(Math.ceil(Math.random()*35))]
                  )
            )