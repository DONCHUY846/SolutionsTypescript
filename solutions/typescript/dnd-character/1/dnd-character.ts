
 export class DnDCharacter {


readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  readonly hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let arrayValues: number[] = []
    for (let i = 0 ; i < 4 ; i++){
   
         arrayValues.push(this.getValuesBettwen1to6())
    }
        arrayValues.sort((a , b ) => b -a)

        
    return arrayValues[0]  + arrayValues[1] + arrayValues[2]

  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

    private  static getValuesBettwen1to6() : number{
        return Math.floor(Math.random() * (6 - 1 +1) + 1)
    }
}
