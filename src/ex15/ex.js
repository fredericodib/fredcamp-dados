// Você receberá um objeto com vários usuários.
// Cada key do do objeto é o id do usuário.
// transforme esse objeto em uma matris
// cada linha é um usuário
// a primeira coluna deve ser o id
// a segunda coluna deve ser o nome
// a terceira coluna deve ser a idade
// Dica: Object entries e map
function ex(entrada) {
  const saida = Object.entries(entrada).map(([k, v]) => [k, v.nome, v.idade]);

  return saida;
}

module.exports = ex;
