/**
 * Eu sou um comentário
 */
//Outra forma de comentar código
//Exemplo var
var msg = "eu sou uma mensagem";
var x = 2;
msg = 4;


//Exemplo let
//Contexto Global
let msgLet = "eu sou uma mensagem";
var msgVar = "eu sou uma variável declarada com var";
{
    //Dentro do contexto de bloco
    let msgLet = "um sou uma mensagem no meu bloco";
    console.log(msgLet);
    msgVar = "eu vou modificar o meu conteúdo dentro do bloco";
    console.log(msgVar);
}
var msgVar = "redeclaração de msg";
//let msgLet = "redeclaração de msg let"; //Erro

//exemplo const
const PI = 3.141592653589793;
//PI = 3.14;      //// Erro
PI = PI + 10;   //// Erro
