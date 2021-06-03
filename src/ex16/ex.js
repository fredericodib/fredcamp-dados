// Voce recebera um array com varios usuários.
// Ordene os usuários de acordo com a idade
// Dica: na função sort, a variavel a,b nem sempre
// são inteiro, nesse caso a e b serão objetos.
function ex(entrada) {
  const saida = entrada.sort((a, b) => a.idade - b.idade)
  return saida;
}

module.exports = ex;
