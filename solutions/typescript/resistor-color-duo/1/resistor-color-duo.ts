export function decodedValue(values:string[] ): number {
  let accumulator: string = '';

  values.forEach((item) => accumulator += colors.indexOf(item).toString());
  return parseInt(accumulator.slice(0,2));
}

export const colors: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']