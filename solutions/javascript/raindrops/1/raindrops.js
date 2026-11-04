//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number = 15) => {
  let value = "";
    if (number % 3 === 0)value += "Pling";
    if (number % 5 === 0) value += "Plang";
  if (number % 7 === 0) value += "Plong";



  return value.length > 0 ? value : String(number);
};