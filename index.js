// juntando tudo para script rodar a formula no terminal
/**colocanco modulo "fs" para escrever esses dados inseridos em um arquivo */
const fs = require('fs');
const { calculaPeríodoDaMeiaVida } = require('./src/RadLife');
const { askElemento, askTempo, askPeriodoDeMeiaVidaQuePassou } = require('./src/askRad');

async function main() {
  const nome = askElemento();
const tempo = askTempo();
const periodoDeMeiaVidaQuePassou = askPeriodoDeMeiaVidaQuePassou();

const result = calculaPeríodoDaMeiaVida(tempo, periodoDeMeiaVidaQuePassou)

const mensagem = `========================================================\n\nO periodo de meia vida do ${nome}, material radioativo é ${result} anos !\n\n========================================================`;

console.log(mensagem);
/**appendFileSync para guardar/escrever os dados em um arquivo, no caso um '.txt */
await fs.promises.appendFile('meiaVidaElementos.doc', `${mensagem}\n`);
/**adiciona mensagem que avisa que foi adicionado os dados */
console.log('Resultado armazenado com sucesse no aquivo meiaVidaElementos.txt')
}

main();
