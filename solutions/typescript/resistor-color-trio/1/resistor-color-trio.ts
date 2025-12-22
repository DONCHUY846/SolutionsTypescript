export function decodedResistorValue(values: string[]): string{
  let valuesAccumulator: string = '';

  valuesAccumulator += COLORS.indexOf(values[0]);
  valuesAccumulator += COLORS.indexOf(values[1]);

  let zeros : string = "0".repeat(COLORS.indexOf(values[2]));

  valuesAccumulator+= zeros;
  const numericValue = Number(valuesAccumulator)
  if (numericValue >= 1e9) {
     return (numericValue / 1e9) + " gigaohms";
  }else if(numericValue >= 1e6){
    return (numericValue / 1e6) + " megaohms";
  }else if (numericValue >= 1000 ){
    return (numericValue / 1000) + " kiloohms"
  }else{
    return (numericValue) + " ohms"
  }
}

const COLORS: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];