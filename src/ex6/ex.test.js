const ex = require("./ex");
const entrada1 = require("./entrada1");
const saida1 = require("./saida1");

test("Exercicio 6, teste 1", () => {
  expect(ex(entrada1)).toEqual(saida1);
});
