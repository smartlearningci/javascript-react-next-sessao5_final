var pessoa = {
    nome: "Eduardo",
    apelido: "Catarino",
    idade: 47,
    nomeCompeto: function(){
        return this.nome + " " + this.apelido;
    }
  };
  
  console.log("Nome:" + pessoa.nome)
  console.log("Apelido:" + pessoa["apelido"])
  console.log("Idade:" + pessoa.idade)
  console.log(pessoa.nomeCompeto());

  var empresa = new Object();
empresa.nome = "Facebook";
empresa.ceo = new Object();
empresa.ceo.nome = "Mark";
empresa.ceo.corFavorita = "blue";

console.log(empresa);
console.log("Nome do CEO da empresa é: " 
  + empresa.ceo.nome);

console.log(empresa["nome"]);
var acoesDaEmpresa = "Ações da empresa";
empresa[acoesDaEmpresa] = 110;

console.log("O preço das ações é: " + 
  empresa[acoesDaEmpresa]);

// Definição JSON
var facebook = {
  nome: "Facebook",
  ceo: {
    nome: "Mark",
    corFavorita: "blue"
  },
  "acoesDaEmpresa": 110
};


//opção 1 - spread
var empresa2 = {
  ...empresa
}


empresa2.nome = "teste"
console.log(empresa)
console.log(empresa2)

let empresa3 = Object.assign({}, empresa);
empresa3.nome = "nova empresa"
let empresa4 = JSON.parse(JSON.stringify(empresa));
empresa4.nome = "mais uma empresa JSON"
console.log(empresa4)
