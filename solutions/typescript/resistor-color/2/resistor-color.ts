// 1. Definimos el dominio exacto de colores permitidos
export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 
  'green', 'blue', 'violet', 'grey', 'white'
] as const; // <--- 'as const' es vital: convierte el array en una tupla inmutable de literales

// 2. Extraemos el tipo directamente de la fuente de verdad
export type Color = typeof COLORS[number]; 

export const colorCode = (color: Color): number => {
  return COLORS.indexOf(color);
};