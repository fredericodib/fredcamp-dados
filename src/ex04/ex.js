// Encontre o número duplicado no array
// Não pode ordenar o array
function ex(entrada) {
  let saida;
  let repet = {};
  entrada.forEach((e) => (!repet[e]? (repet[e] = 1) : (repet[e] += 1)));

  saida = Number(Object.entries(repet).filter((el)=> el[1]>1)[0][0])

  return saida;
}

module.exports = ex;

// SOLUÇÃO ANTIGA
// function ex(entrada) {
//   let saida;
//   entrada.forEach(element => {
//     if (entrada.lastIndexOf(element) !== -1) {
//       if (entrada.lastIndexOf(element) !== entrada.indexOf(element)){
//         saida = element
//       }
//     }
//   });

//   return saida;
// }
