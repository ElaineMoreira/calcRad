const readline = require("readline-sync");

const askTempo = () => {
  return readline.questionFloat(
    "Qual o tempo que esse material sofreu desintegraçoes? "
  );
};

const askPeriodoDeMeiaVidaQuePassou = () => {
  // "questionFloat" funciona como uma validaçao, que so pode entrada de numero.
  return readline.questionFloat(
    "Qual a quantidade me meias vidas pelas quais ele ja passou? "
  );
};

console.log(askTempo(), askPeriodoDeMeiaVidaQuePassou());
