export function format(name: string, number: number): string {
   const lastValue = number % 10;
  const lastTwoValues = number % 100;
  let suffix = "th"
          if(lastTwoValues <11 || lastTwoValues >13){


            switch (lastValue){
            case 1: suffix = "st"; break;
            case 2: suffix = "nd"; break;
            case 3: suffix = "rd"; break;
       
        }
          }
    
    return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}
