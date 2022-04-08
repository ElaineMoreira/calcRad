/**Fórmula para determinar o período de meia-vida

O período da meia-vida (P) de um material radioativo pode ser determinado pela relação entre o tempo (t) no qual esse material sofreu desintegrações (perdeu radiação) e a quantidade de meias-vidas (x) pelas quais ele já passou, como na fórmula a seguir:

P = t 
    x

*@param {Number} tempo tempo que sofreu desintegraçoes
*@param {Number} quantidadePassouMeiaVida quantidade de meias vidas que passou
*/

const calculaPeríodoDaMeiaVida = (tempo, quantidadePassouMeiaVida) => {
    return (tempo / quantidadePassouMeiaVida).toFixed(2)
};

module.exports = { calculaPeríodoDaMeiaVida };
