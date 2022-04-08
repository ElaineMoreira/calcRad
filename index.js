// juntando tudo para script rodar a formula no terminal
const { calculaperíodoDaMeiaVida } = require('./RadLife');
const { askTempo, askPeriodoDeMeiaVidaQuePassou } = require('./askRad');

const tempo = askTempo();
const periodoDeMeiaVidaQuePassou = askPeriodoDeMeiaVidaQuePassou();

const result = calculaperíodoDaMeiaVida(tempo, periodoDeMeiaVidaQuePassou)

console.log(`O periodo de meia vida do material radioativo é ${result} anos ! `);
