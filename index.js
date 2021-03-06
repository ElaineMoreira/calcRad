// juntando tudo para script rodar a formula no terminal
/**colocanco modulo "fs" para escrever esses dados inseridos em um arquivo */
const fs = require('fs');
const { calculaPer√≠odoDaMeiaVida } = require('./src/RadLife');
const { askElemento, askTempo, askPeriodoDeMeiaVidaQuePassou } = require('./src/askRad');

async function main() {
  const nome = askElemento();
const tempo = askTempo();
const periodoDeMeiaVidaQuePassou = askPeriodoDeMeiaVidaQuePassou();

const result = calculaPer√≠odoDaMeiaVida(tempo, periodoDeMeiaVidaQuePassou)

const mensagem = `========================================================\n\nO periodo de meia vida do ${nome}, material radioativo √© ${result} anos !\n\n========================================================`;

console.log(mensagem);
/**appendFileSync para guardar/escrever os dados em um arquivo, no caso um '.txt */
await fs.promises.appendFileSync('meiaVidaElementos.txt', `${mensagem}\n`);
/**adiciona mensagem que avisa que foi adicionado os dados */
console.log('Resultado armazenado com sucesse no aquivo meiaVidaElementos.txt')
}

main();
