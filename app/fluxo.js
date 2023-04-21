var hora = 10
if (hora < 12) {
  saudacao = "Bom dia";
}

switch (new Date().getDay()) {
    case 0:
      dia = "Domingo";
      break;
    case 1:
      dia = "Segunda-Feira";
      break;
    case 2:
      dia = "Terça-Feira";
      break;
    case 3:
      dia = "Quarta-Feira";
      break;
    case 4:
      dia = "Quinta-Feira";
      break;
    case 5:
      dia = "Sexta-Feira";
      break;
    case 6:
      dia = "Sábado";
  }

var texto = '';
for (let i = 0; i < 5; i++) {
  texto += "O número é " + i + "\n";
}

console.log(texto)