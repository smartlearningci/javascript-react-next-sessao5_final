//Cópia por valor
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
//Cópia por valor
b = 5;
console.log("Depois de se atualizar b");
console.log("a: " + a);
console.log("b: " + b);


//Cópia por referência
var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

//Atualização
b.x = 5;
console.log("Depois de se atualizar b.x ");
console.log(a);
console.log(b);






// Passagem por valor a uma função
function alteraPrimitivo(valorPrimitivo) {
  console.log("A tentar mudar..");
  console.log("Antes:");
  console.log(valorPrimitivo);
  
  valorPrimitivo = 5;
  console.log("depois:");
  console.log(valorPrimitivo);
}

var valor = 7;
alteraPrimitivo(valor); // valorPrimitivo = valor
console.log("depois de tentar modificar o valor original. Valor original:");
console.log(valor); 


//Passagem por referência
function alteraObjeto(objeto) {
  console.log("vou modificar o objeto...");
  console.log("antes:");
  console.log(objeto);
  
  objeto.x = 5;
  console.log("depois:");
  console.log(objeto);
}

valorDoObjeto = { x: 7 };
alteraObjeto(valorDoObjeto);//  valorDoObjeto = objeto
console.log("Depois de alterar , valor original:");
console.log(valorDoObjeto);

var obj = JSON.stringify(valorDoObjeto)
console.log(obj);