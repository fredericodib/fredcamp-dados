// Receba um objeto que as chaves são o nome das pessoas e o valor á a idade
// Devolva um array com a idade das pessas
// Dica: pequise por Object keys, values, entries
function ex(entrada) {
  let saida = Object.values(entrada)

  return saida;
}

module.exports = ex;


// RESOLUÇÃO ANTIGA
// function ex(entrada) {
//   let saida = [];
//   for (const key in entrada){
//     saida.push(entrada[key])
//   }

//   return saida;
// }