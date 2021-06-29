//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors=[]) => {
  let first = (COLORS.indexOf(colors[0]))
  let second = (COLORS.indexOf(colors[1]))
  let out = first*10 + second

  return out;
};
