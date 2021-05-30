// retorne a media dos elementos dentroo do  vetor
// dica: use forEach
function ex(entrada) {
  let media;
  let soma = 0;
  for (i = 0; i < entrada.length; i++) {
    soma += entrada[i];
  }
  media = soma / entrada.length;
  return media;
}

module.exports = ex;
