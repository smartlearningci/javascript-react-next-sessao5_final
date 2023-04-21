// Valores por defeito
function encomendaGalinhaComAlgumaCoisa(acompanhamento) {
  acompanhamento = acompanhamento || "Qualquer coisa serve...";
  console.log("Galinha com " + acompanhamento);
}

encomendaGalinhaComAlgumaCoisa("arroz");
encomendaGalinhaComAlgumaCoisa();