export function toRna(DNA : string) : string {
   const isValid : boolean = DNA.split('').every((character) => RNA[character]);
   let RNAvalue : string = '';
  if (!!isValid) {
    for ( const element of DNA){
      RNAvalue += RNA[element];
    }
    return RNAvalue;
  }else{
   throw new Error ('Invalid input DNA.');
  }
}


const RNA: { [key: string] : string} ={
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U'
}