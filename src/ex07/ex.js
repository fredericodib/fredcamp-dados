// Receba um objeto que as chaves são o nome das pessoas e o valor á a idade
// Devolva um array com varios objetos, cada um sendo uma pessoa
// Dica: pequise por Object keys, values, entries
function ex(entrada) {
  const saida = Object.entries(entrada).map((e) => ({ [e[0]]: e[1] }));

  return saida;
}

module.exports = ex;

// RESOLUÇÃO ANTIGA
// function ex(entrada) {
//   let saida = [];
//   for (const key in entrada){
//     saida.push({[key]: entrada[key]})
//   }

//   return saida;
// }

// SOLUÇÃO ANTIGA 2
// function ex(entrada) {
//   let saida = [];
//   for (var [key, value] of Object.entries(entrada)) {
//     saida.push({[key]: value})
// }

//   return saida;
// }
