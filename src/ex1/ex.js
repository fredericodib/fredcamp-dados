// retorne a media dos elementos dentroo do  vetor
// dica: use forEach
function ex(entrada) {
  let media;
  let soma = 0;
  entrada.forEach((element) => (soma += element));
  media = soma / entrada.length;
  return media;
}

module.exports = ex;
