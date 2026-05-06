
/*

Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función countSheep(letters) que:

Reciba un string con letras desordenadas
Cuente cuántas veces se puede formar la palabra "sheep"
Devuelva el número de ovejas completas que puedes contar
Importante: Para formar "sheep" necesitas: s, h, e, e, p (la 'e' aparece 2 veces)

*/
function countSheep(letters: string): number {
    
    const SHEEP_E_DIVISOR : number = 2 
    const letterCounts: Record<string, number> = {
      s : 0,
      h : 0,
      e : 0,
      p : 0
    }

        for(const char of letters){
                if(char in letterCounts){
                        letterCounts[char]++
                }
        }
          const sheepComponentCounts = [letterCounts.s , letterCounts.h , Math.floor(letterCounts.e / SHEEP_E_DIVISOR), letterCounts.p]

        return Math.min(...sheepComponentCounts)
} 
