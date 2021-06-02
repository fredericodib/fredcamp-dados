// Encontre o número duplicado no array
// Faça ordenando o array
function ex(entrada) {
  let ordenada = entrada.sort(((a, b) => a-b))
  let saida
  for (i=0; i<ordenada.length-1; i++) {
    if (ordenada[i+1] === ordenada[i]) {
      saida = ordenada[i]
    }
  }
  return saida;
}

module.exports = ex;
