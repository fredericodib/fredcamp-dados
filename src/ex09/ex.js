// Receba um array com varios objetos
// Cada objeto possui duas chaves, nome e idade
// Retorne um array com todas as idades ordenadas
function ex(entrada) {
  let saida = [];

  let idades = entrada.map((element) => element.idade);

  saida = idades.sort((a, b) => a - b);
  return saida;
}

module.exports = ex;

// RESOLUÇÃO ANTIGA
// function ex(entrada) {
//   let saida = []
//   let idades = []

//   entrada.forEach(element => {
//     idades.push(element.idade)
//   })

//   idades.filter(Number)
//   saida = idades.sort(function(a, b){return a-b})
//   return saida;
// }
