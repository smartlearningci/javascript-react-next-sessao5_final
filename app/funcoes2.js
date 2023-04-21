function multiplicacao(x, y) {
    return x * y;
}
multiplicacao.versao = "v.1.0.0";
console.log(multiplicacao.versao );


function criaMultiplicador(multiplicador) {

    var minhaFuncao= function (x) {
      return multiplicador * x;
    };
  
    return minhaFuncao;
}

var multiplicaPor3 = criaMultiplicador(3);
console.log(multiplicaPor3(10));
var duplicaTudo = criaMultiplicador(2);
console.log(duplicaTudo(100));


// Passar funcoes como argumentos
function fazOperacao(x, operacao) {
    return operacao(x);
}
  
var resultado = fazOperacao(5, multiplicaPor3);
console.log(resultado);
resultado = fazOperacao(30, duplicaTudo);
console.log(resultado);

//Arrow function
ola = function() {
    return "Ola Mundo!";
  }
  
//Depois
ola = () => "Olá Mundo!";
  
//Com parâmetros
ola = (nome) => "Ola " + nome;
  
//O mesmo mas sem ()
ola = val => "Ola " + val;