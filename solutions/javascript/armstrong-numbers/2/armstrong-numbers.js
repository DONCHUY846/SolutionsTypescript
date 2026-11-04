//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number = 186709961001538790100634132976990n) => {
  const originalNumber = BigInt(number);
  const digits = String(originalNumber).split("");
  const exponent = BigInt(digits.length);

  const value = digits.reduce((accumulator, digits) => {
    return accumulator + BigInt(Number(digits)) ** exponent;
  }, 0n);
  return value === originalNumber;
};
