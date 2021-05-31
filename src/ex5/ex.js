// Receba um objeto que as chaves são o nome das pessoas e o valor é a idade
// Devolva um array com o nome das pessas
// Dica: pequise por Object keys, values, entries
function ex(entrada) {
  let saida = [];
  for (const key in entrada){
    saida.push(String(key))
  }

  return saida;
}

module.exports = ex;
