// Exercicio Final
// Nesse problema iremos tratar de um sistema de hospedagem.
// Cada usuário pode colocar várias casas para alugar, cada casa possui muitos quartos.
// O valor para alugar um quarto é definido por: diaria * dias + taxaDeServico
// Entrada: vc recebera um array com dois elementos:
// O primeiro um objeto contendo vários usuários
// O segundo um numero inteiro representando o numero de dias.
// Saida:
// Imagine que voce queira fazer um grafico onde o eixo x seja os nomes dos usuários
// E os valores seriam o custo máximo para alugar todos os quartos de todas as casas de um usuário
// Geralmente para fazer um grafico, o eixo x deve ser um array com os nomes e
// os valores um array diferente comm numeros inteiros
// Postanto a saida deve ser uma matriz: [x, valores]
// OBS: Ela deve estar ordenada, os usuáros mais baratos devem vir primeiro.
// Dica, ordene antes de separar o x e valores em arrays  diferentes.
// Se tiver ficado confuso, só me falar
// Dica2: separando em funcoes ficara mais clean, mas vai ficar grande de tdo jeito
// Dica3: Pesquise sobre "js reduce function" pode facilitar
function ex(entrada) {
  let valores = [];
  let users = [];
  let soma;

  for (user in entrada[0]) {
    users.push(entrada[0][user].nome);
    soma = 0;
    casas = Object.values(entrada[0][user].casas);
    for (casa in casas) {
      for (quarto in casas[casa]) {
        soma +=
          casas[casa][quarto].diaria * entrada[1] +
          casas[casa][quarto].taxaDeServico;
      }
    }
    valores.push(soma);
  }

  let resp = {};
  for (i = 0; i < valores.length; i++) {
    resp[users[i]] = valores[i];
  }

  const sorted = Object.fromEntries(
    Object.entries(resp).sort(([, a], [, b]) => a - b)
  );

  let saida = [Object.keys(sorted), Object.values(sorted)];

  return saida;
}

module.exports = ex;
