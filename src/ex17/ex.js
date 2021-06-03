// Voce recebera um array com varios usuários.
// Ordene os usuários de acordo com a idade
// caso a idade for iqual deve ser comparado o tamanho da pessoa
// Dica: Parecido com a questão anterior, mas vc vai precisar colocar
// um pouco mais de lógica na função de ordenar, talvez adicionar uns if
function ex(entrada) {
  const saida = entrada
    .sort((a, b) => a.tamanho - b.tamanho)
    .sort((a, b) => a.idade - b.idade);
  return saida;
}

module.exports = ex;
