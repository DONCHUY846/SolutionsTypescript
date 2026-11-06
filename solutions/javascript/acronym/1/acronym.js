//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase = "Portable Network Graphics") => {
  let normalizePhrase = phrase
    .replace(/[']/g, "")
    .replace(/[-\s\p{P}]+/gu, " ")
    .trim()
    .split(" ");
  console.log(normalizePhrase);
  return normalizePhrase
    .map((value) => value[0])
    .join("")
    .toUpperCase();
};