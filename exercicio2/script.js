console.log('Ola')
const linha=()=>{
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}
// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >= 18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>
const cadastro =(idade,ensMedio,ensSuperior)=>{
    const idade1 = idade
    const eMedio = ensMedio
    const eSuperior = ensSuperior
    if (idade1 >= 18){
        console.log('Tem mais de 18 anos')
        if (eMedio === true){
            console.log('Possui ensino medio')
            if (eSuperior === true){
                console.log('Ensino superio em andamento ou concluido')
            }else{
                console.log('Nao ingressou no ensino superior')
            }
        }else {
            console.log('Nao concluiu o ensino medio')
        }
    }else if(idade1<18){
        console.log('menor de idade')
    }
}

cadastro(17, true, false)
linha()
cadastro(19, true, true)
linha()
cadastro(19, false, false)
linha()
cadastro(19, true, false)
linha()
cadastro(46,true,true)