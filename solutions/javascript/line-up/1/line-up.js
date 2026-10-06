
 export const format = (name , number ) => {
    const getOrdinal = ordinalNumber(number)
    return   `${name}, you are the ${number}${getOrdinal} customer we serve today. Thank you!`;
 }


const ordinalNumber = (n) =>{
    if(n % 100 != 11 && n % 10 === 1 ){
        return "st"
    }else if (n % 100 != 12 && n % 10 ===2 ){
        return "nd"
    }else if (n % 100 !=13 && n % 10 ===3){
        return "rd"
    }else {
        return "th"
    }
}

