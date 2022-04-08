// juntando tudo para script rodar a formula no terminal
const { calculaPeríodoDaMeiaVida } = require('./RadLife');
const { askElemento, askTempo, askPeriodoDeMeiaVidaQuePassou } = require('./askRad');

const nome = askElemento();
const tempo = askTempo();
const periodoDeMeiaVidaQuePassou = askPeriodoDeMeiaVidaQuePassou();

const result = calculaPeríodoDaMeiaVida(tempo, periodoDeMeiaVidaQuePassou)

console.log(`========================================================\n\nO periodo de meia vida do ${nome}, material radioativo é ${result} anos !\n\n========================================================`);
