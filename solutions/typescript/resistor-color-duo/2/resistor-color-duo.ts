const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'] as const;
type Color = typeof COLORS[number]


export function decodedValue([tens, units]: Color[]): number {
  const tensValue = COLORS.indexOf(tens);
  const unitsValue = COLORS.indexOf(units);

  return (tensValue * 10) + unitsValue;
}
