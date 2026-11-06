//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (tarjet, candidates) => {
  let result = [];
  const sanitizeTarjet = tarjet.toLowerCase().split("").sort().join("");
  for (const value of candidates) {
    const sanitizeValue = value.toLowerCase().split("").sort().join("");
    if (
      sanitizeTarjet === sanitizeValue &&
      value.toLowerCase() !== tarjet.toLowerCase()
    ) {
      result.push(value);
    }
  }
  return result;
};
