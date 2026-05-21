export function convert(value : number): string {
     let answers : string [] = []
    if(value % 3 != 0 && value % 5 != 0 && value % 7 !=0 ) {
        return value.toString()
    }
     if(value % 3 == 0  ){ answers.push("Pling")} 
     if(value % 5 == 0  ){ answers.push("Plang")} 
     if(value % 7 == 0  ){ answers.push("Plong")} 
     return answers.join("")
}
