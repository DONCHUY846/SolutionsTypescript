

const isogram = (sentence: string): boolean => {
  const seenLetter = new Set<string>()
  const normalized: string = sentence.toLowerCase()

  for (const char of normalized ){
    
    if(char >= 'a'  && char <= "z"){

    if(seenLetter.has(char)){
      return false
    }
    seenLetter.add(char)
    }
  }

  return true

}

console.log(isogram("a b "))
