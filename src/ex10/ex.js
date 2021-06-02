// Faça o oposto do exercício 8.
function ex(entrada) {

  let saida= entrada.map(element => {
    let ob = {}
    key1 = Object.keys(element)[0]
    value = Object.values(element)[0] 
    ob={nome: key1, idade: value}
     return ob
   })

  return saida;
}

module.exports = ex;
