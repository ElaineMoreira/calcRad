// usar reaclineSync para leitura de dados, ler o que eh digitdado no terminal
// serve para ler input das pessoas usuarias
// pacote - https://www.npmjs.com/package/readline-sync
const readline = require('readline-sync')

const askName = () => {
  return readline.questionFloat('Qual seu nome?');
};

const askHeight = () => {
  // "questionFloat" entende que vai recber um numero sem fazer validaçao
  return readline.questionFloat('Qual sua altura?');
};

const askWeight = () =>{
  return readline.questionFloat('Qual seu peso?');
};

console.log(askName(), askHeight(), askWeight())
