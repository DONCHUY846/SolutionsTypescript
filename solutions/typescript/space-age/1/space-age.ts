  export function age(planet: string, seconds: number): number  {
  const orbitalPeriod = ORBITALYEARS[planet.toLowerCase()] || 1;
  const result = ((seconds / 31557600) / orbitalPeriod).toFixed(2);

  return Number(result)
}

const ORBITALYEARS: { [key : string] : number } = {
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'earth' : 1.0,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.79132
}