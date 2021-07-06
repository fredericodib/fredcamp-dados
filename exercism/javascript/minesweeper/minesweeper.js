//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function Check(input) {
  let output = [];
  for (let j = 0; j < input.length; j++) {
    let strOutput = "";
    let str = input[j];
    for (let i = 0; i < str.length; i++) {
      let counter = 0;
      // horizontal não primeiro
      if (i !== 0 && str[i - 1] == "*" && str[i] !== "*") {
        counter += 1;
      }
      // horizontal não último
      if (i !== str.length - 1 && str[i + 1] == "*" && str[i] !== "*") {
        counter += 1;
      }
      // vertical não primeiro
      if (j !== 0 && input[j - 1][i] == "*") {
        counter += 1;
      }
      // vertical não último
      if (j !== input.length - 1 && input[j + 1][i] == "*") {
        counter += 1;
      }
      // diagonal esquerda cima
      if (j !== 0 && i !== 0 && input[j - 1][i - 1] == "*") {
        counter += 1;
      }
      // diagonal esquerda baixo
      if (j !== input.length - 1 && i !== 0 && input[j + 1][i - 1] == "*") {
        counter += 1;
      }
      // diagonal direita cima
      if (j !== 0 && i !== str.length - 1 && input[j - 1][i + 1]=="*") {
        counter += 1;
      }
      // diagonal direita baixo
      if (
        j !== input.length - 1 &&
        i !== str.length - 1 &&
        input[j + 1][i + 1] == "*"
      ) {
        counter += 1;
      }
      // mudar valor string
      if (str[i] != "*") {
        if (counter !== 0) {
          strOutput += String(counter);
        } else {
          strOutput += str[i];
        }
      } else {
        strOutput += "*";
      }
    }
    output.push(strOutput);
  }
  return output;
}

export const annotate = (input) => {
  let check = Check(input);
  return check;
  // 1. contar pros lados (separar 1, meio e último elemento da string)
  // 2. contar vertical (separar 1, meio e última linha)
  // 3. contar diagonal (separar por linha e por elemento)
  // 4. soma individual
};
