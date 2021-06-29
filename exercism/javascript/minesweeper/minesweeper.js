//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function sideCheck(input) {
  let output = [];
  let strOutput = "";
  for (let j = 0; j < input.length; j++) {
    let str = input[j];
    for (let i = 0; i < str.length; i++) {
      let counter = 0;
      if (i !== 0 && str[i - 1] == "*" && str[i] !== "*") {
        counter += 1;
      }
      if (i !== str.length - 1 && str[i + 1] == "*" && str[i] !== "*") {
        counter += 1;
      }
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
  let firstCheck = sideCheck(input);
  return firstCheck;
  // 1. contar pros lados (separar 1, meio e último elemento da string)
  // 2. contar vertical (separar 1, meio e última linha)
  // 3. contar diagonal (separar por linha e por elemento)
  // 4. soma individual
};
