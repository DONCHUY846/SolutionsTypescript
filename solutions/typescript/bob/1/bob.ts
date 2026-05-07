export function hey(message: string): string {
        const trimmedMessage = message.trim()
        const isUpperCase: boolean =  trimmedMessage === trimmedMessage.toUpperCase() && /[a-zA-Z]/.test(trimmedMessage);
        const isQuestion : boolean = trimmedMessage.endsWith("?")
        const isEmpty : boolean = trimmedMessage.length === 0
    

    if(isUpperCase && isQuestion ){
        return "Calm down, I know what I'm doing!"
    }else if(isUpperCase ){
        return "Whoa, chill out!"
    }else if ( isQuestion){
        return "Sure."
    }else if ( isEmpty ) {
        return "Fine. Be that way!"
    }else{
        return "Whatever."
    }
}
