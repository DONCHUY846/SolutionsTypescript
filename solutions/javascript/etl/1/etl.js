//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const newObject = {}
  for (const [key, value] of Object.entries(old)) {
    value.forEach((value) => (newObject[value.toLowerCase()] = Number(key)))
  }

  return newObject
};