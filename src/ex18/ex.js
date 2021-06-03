// Voce recebera objeto de usuários.
// É um sistema parecido com airbnb, o usuário possui varios
// quartos e você pode alugar esses quartos.
// cada usuário tará uma chave "quartos" que é uma lista
// de objetos de quarto. contendo valor e tipo
//
// crie uma variável para o usuário com o nome:
// "totalPrice" cujo o valor seja a soma do valor de
// todos os quartos.
function ex(entrada) {
  let soma = 0
  const saida = entrada
  const quarto = Object.values(saida.quartos)

  for (i in quarto){
    soma += quarto[i].valor
  }

  saida.totalPrice = soma

  return saida;
}

module.exports = ex;
