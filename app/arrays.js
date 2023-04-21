//Opção 1
var cores1 = ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'rosa', 'branco'];

//Opção 2
var cores2 = []
cores2[0] = 'vermelho';
cores2[1] = 'laranja';
cores2[2] = 'laranja';
cores2[3] = 'verde';
cores2[4] = 'azul';
cores2[5] = 'rosa';
cores2[65] = 'branco';

//Opção 3
var cores3 = new Array('vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'rosa', 'branco');

//toString()
var cores4 = ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'rosa', 'branco'];
cores4.toString(); //Produz uma string com todos os elementos separados por vírgulas

//push e pop

//pop() remove o último elemento do array
cores4.pop(); //remove branco

//push() adiciona um elemento ao fim do array
cores4.push("preto");

//length devolve o comprimento do array
console.log(cores4.length);  //imprime a dimensão do array
cores4[cores4.length] = "branco"; //Adiciona branco na última posição do array


//Ordenação
cores4.sort()  //ordena o array por ordem alfabética
cores4.reverse()  //ordena o array por ordem alfabética inversa

//Função que recebe um Array e escreve os seus elementos na consola
function listaArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}

var cores5 = ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'rosa', 'branco'];
listaArrayItems(cores5)