console.log('Orci Santos')
const linha=()=>{
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}
// # Exercício 3

// Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
const nacionalidade = (pais)=>{
    let paisOrigem=prompt('Qual sua nacionalidade? ')//.toLowerCase
    paisOrigem = paisOrigem.toLowerCase()
    if (paisOrigem ==="brasileira"){
        console.log('Voce é Brasileiro')
    }else if(paisOrigem ==="argentina"){
        console.log('Voce é Argentino')
    }else if(paisOrigem ==="uruguaia"){
        console.log("Voce é Uruguaio")
    }else if(paisOrigem ==="chilena"){
        console.log("Você é Chileno")
    }else if(paisOrigem ==="colombiana"){
        console.log('Você é chileno')
    }
    else{
        console.log("Nacionalidade nao encontrada")
    }
}

nacionalidade()