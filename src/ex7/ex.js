// Receba um objeto que as chaves são o nome das pessoas e o valor á a idade
// Devolva um array com varios objetos, cada um sendo uma pessoa
// Dica: pequise por Object keys, values, entries
function ex(entrada) {
  let saida = [];
  for (const key in entrada){
    saida.push({[key]: entrada[key]})
  }

  return saida;
}

module.exports = ex;
