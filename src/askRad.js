const readline = require("readline-sync");

const askElemento = () => {
  return readline.question('Qual o nome do elemento Radioativo?\n')
};

const askTempo = () => {
  return readline.questionFloat(
    'Qual o tempo que esse material sofreu desintegraçoes?\n'
  );
};

const askPeriodoDeMeiaVidaQuePassou = () => {
  // "questionFloat" funciona como uma validaçao, que so pode entrada de numero.
  return readline.questionFloat(
    'Qual a quantidade me meias vidas pelas quais ele ja passou?\n'
  );
};

module.exports = { askElemento, askTempo, askPeriodoDeMeiaVidaQuePassou };

