// Encontre o número duplicado no array
// Não pode ordenar o array
function ex(entrada) {
  let saida;
  let repet = {};
  entrada.forEach((element) => {
    if (!repet[element]) {
      repet[element] = 1;
    } else {
      repet[element] += 1;
    }
  });

  for (key in repet) {
    if (repet[key] !== 1) {
      saida = Number(key);
    }
  }

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
