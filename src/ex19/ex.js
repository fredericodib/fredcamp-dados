// Voce recebera um array com varios usuários.
// É um sistema parecido com airbnb, o usuário possui varios
// quartos e você pode alugar esses quartos.
// cada usuário tará uma chave "quartos" que é uma lista
// de objetos de quarto.
//
// crie uma variável para cada usuário com o nome:
// "totalPrice" cujo o valor seja a soma do valor de
// todos os quartos.
// depois ordene os usuários de acordo com a variável criada
function ex(entrada) {
  entrada.forEach(user => {
    const quarto = Object.values(user.quartos)
    let soma = 0
  
    for (i in quarto){
      soma += quarto[i].valor
    }
  
    user.totalPrice = soma
  })

  const saida = entrada
    .sort((a, b) => a.totalPrice - b.totalPrice)

  return saida;
}

module.exports = ex;
