
export class Triangle {
 
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    
   return this.isValidTriangle && new Set(this.sides).size === 1 
  }

  get isIsosceles() {
      return this.isValidTriangle && new Set(this.sides).size < 3
  }

  get isScalene() {
    return this.isValidTriangle && new Set(this.sides).size === 3
  }

  get isValidTriangle(){
      if(!this.hasValidLenght) return false
      const [a, b , c] = this.sides.sort((x , y) => x - y)  
      return a + b >= c;
      }
  get hasValidLenght(){
      return this.sides.every((v) => v > 0)
  }
}

