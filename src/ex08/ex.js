// Receba um array comm varios objetos
// Cada objeto possui duas chaves,  nome e idade
// Retorne um array com varios objetos, sendo o noome a chave e o valor a idade
function ex(entrada) {
  let saida = entrada.map((element) => {
    let obj = {};
    obj[element.nome] = element.idade;
    return obj;
  });
  return saida;
}

module.exports = ex;

// RESOLUÇÃO ANTIGA
// function ex(entrada) {
//   let saida = []
//   entrada.forEach(element => {
//     saida.push({[element.nome]:element.idade})
//   })
//   return saida;
// }
