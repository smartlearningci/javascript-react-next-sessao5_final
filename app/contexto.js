var mensagem = "eu sou global";
console.log("global: mensagem = " + mensagem);

var a = function () {
  var mensagem = "dentro da função a";
  console.log("a: mensagem = " + mensagem);
//chamada a b

    //Contexto interior à função a()
    function b () {
        console.log("b: mensagem = " + mensagem); 
    }
  b(); 
}

//Contexto exterior
//function b () {
//    console.log("b: mensagem = " + mensagem); 
//}

a();