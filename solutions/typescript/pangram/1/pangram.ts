 const alfabeto = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
] as const;

export function isPangram(sentence:string = ""): boolean {
   const letters = new Set(sentence.toLowerCase().match(/[a-z]/g))

   return letters.size === alfabeto.length
}