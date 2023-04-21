/* JavaScript if + Boolean*/
var x = 1
if (x > 0){
 console.log("O x é positivo");
}

x = -1;
var condicao = x > 0;

if (condicao) {
  console.log("esta condicao é verdadeira");
} else {
  console.log("esta condicao é falsa");
}

//null
var x = null
if (x == null)
{
    console.log("Valor nulo")
}

//undefined.
let y; //variável criada sem valor atríbuído

console.log(`'o valor de y é ${y}`); 

//Numbers
let xx = 3.14;    //// com decimais
let yy = 3;       //// sem decimais

//Notacao cientifica
let w = 123e5;    //// 12300000
let k = 123e-5;   //// 0.00123

//Algumas notas sobre a precisão
//Inteiros (números em identificação de período ou notação com expoentes) são precisos até no máximos  15 digitos.
let z = 999999999999999;   // z será 999999999999999
let a = 9999999999999999;  // a será 10000000000000000

//Erros de precisão
let v = 0.2 + 0.1;
if (v > 0.3){
    console.log("O v é maior que 0.3");
}

let v_correto = (0.2 * 10 + 0.1 * 10) / 10;

//Junção de números com Strings
//Concatenação de strings sem conversão para números -> ATENÇÃO
let xs = "10";
let ys = "20";
let zs = xs + ys;

//Se uma das variáveis for numérica o JavaScript converte para string
let x_num = 10;
let y_str = "20";
let z_str = x_num + y_str;

//Alguns erros comuns
//Se o resultado esperado for 30 ....
let xa = 10;
let ya = 20;
let za = "O resultado é: " + xa + ya;
//se o resultado esperado for 102030
let xb = 10;
let yb = 20;
let zb = "30";
let result = xb + yb + zb;

//Na presença de alguns operadores o JavaScript tenta converter de forma automática para o tipo mais adequado
let x_str_2_num = "100";
let y_str_2_num  = "10";
let z_str_2_num  = x_str_2_num  - y_str_2_num ;

//NaN
var x = 100 / "alguma coisa";
if (isNaN(x))
{
    console.log("O x não é um número...");
}

//BigInt
var ww = BigInt(999999999999999);
let type = typeof ww;

let xBI = 9007199254740995n;
let yBI = 9007199254740995n;
let zBI = xBI * yBI;

let x_bg = 5n;
//let y_bg = x_bg / 2; //erro

let x_b = 5n; 
let y_b = Number(x_b) / 2; //Solução

console.log(y_b);