export function parse(phrase: string): string {
  const phraseTransformed : string[] = phrase.split(/(?<=[a-z])(?=[A-Z])|[\s-]+/);
  let acronym: string = ""

  for (let value of phraseTransformed){
    acronym += value[0]
  }

  return acronym.toUpperCase()
}