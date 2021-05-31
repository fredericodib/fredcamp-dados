// Encontre o número duplicado no array
// Não pode ordenar o array
function ex(entrada) {
  let saida;
  entrada.forEach(element => {
    if (entrada.lastIndexOf(element) !== -1) {
      if (entrada.lastIndexOf(element) !== entrada.indexOf(element)){
        saida = element
      }
    }
  });

  return saida;
}

module.exports = ex;
