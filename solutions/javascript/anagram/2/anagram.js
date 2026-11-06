//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (tarjet, candidates ) => {
  let result = [];
  const normalizeTarjet = tarjet.toLowerCase();
  const sortedTarjet = normalizeTarjet.split("").sort().join("");
  for (const value of candidates) {
    const normalizeValue = value.toLowerCase();
    const sortedValue = normalizeValue.split("").sort().join("");
    if (sortedTarjet === sortedValue && normalizeValue !== normalizeTarjet) {
      result.push(value);
    }
  }
  return result;
};
