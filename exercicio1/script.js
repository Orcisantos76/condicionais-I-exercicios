
const linha=()=>{
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

const n1 = (numero)=>{
    if (numero%2===0){
    console.log('O número ',numero,' é par')
}else{
    console.log('O número ',numero,' não é par')
}
}
linha()
n1(3)
linha()
n1(4)
linha()
n1(10)
linha()
n1(7)
linha()


function numerico(n){
    if(n%2 === 0){
        console.log('O número ',n,' é par' )
    }else{
        console.log(n, "não é par")
        //console.log(`${n} não é par`)
    }
}
numerico(3)
numerico(4)