// Você receberá um objeto com vários usuários.
// Cada key do do objeto é o id do usuário.
// Adicione a key do usuário dentro do objeto do usuário com o nome id.
// dica: seria bom usar o "const key in entrada"
function ex(entrada) {
  for (key in entrada) {
    entrada[key].id = String(key)
    }

  return entrada;
}

module.exports = ex;
