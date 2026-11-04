//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let originalNumber = BigInt(number);
  let numberToArray = String(originalNumber).split("");

  const value = numberToArray
    .map((value) => BigInt(value))
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue ** BigInt(numberToArray.length);
    }, 0n);
  return value === originalNumber;
};
