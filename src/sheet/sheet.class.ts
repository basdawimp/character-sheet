export class Sheet {
  name: string;
  strength: number;
  agility: number;
  fighting: number;
  awareness: number;
  stamina: number;
  dexterity: number;
  interllect: number;

  dodge: number;
  parry: number;
  fortitude: number;
  toughness: number;
  will: number;

  acrobatics: number;
  athletics: number;
  closeCombat: number;
  deception: number;
  expertise: number;
  insight: number;
  intimidation: number;
  investigation: number;
  perception: number;
  persuasion: number;
  rangedCombat: number;
  slightOfHand: number;
  stealth: number;
  technology: number;
  treatment: number;
  vehicles: number;

  constructor(
    name: string,
    [
      strength,
      agility,
      fighting,
      awareness,
      stamina,
      dexterity,
      interllect,

      dodge,
      parry,
      fortitude,
      toughness,
      will,

      acrobatics,
      athletics,
      closeCombat,
      deception,
      expertise,
      insight,
      intimidation,
      investigation,
      perception,
      persuasion,
      rangedCombat,
      slightOfHand,
      stealth,
      technology,
      treatment,
      vehicles,
    ]: number[],
  ) {
    this.name = name;
    this.strength = strength;
    this.agility = agility;
    this.fighting = fighting;
    this.awareness = awareness;
    this.stamina = stamina;
    this.dexterity = dexterity;
    this.interllect = interllect;

    this.dodge = dodge;
    this.parry = parry;
    this.fortitude = fortitude;
    this.toughness = toughness;
    this.will = will;

    this.acrobatics = acrobatics;
    this.athletics = athletics;
    this.closeCombat = closeCombat;
    this.deception = deception;
    this.expertise = expertise;
    this.insight = insight;
    this.intimidation = intimidation;
    this.investigation = investigation;
    this.perception = perception;
    this.persuasion = persuasion;
    this.rangedCombat = rangedCombat;
    this.slightOfHand = slightOfHand;
    this.stealth = stealth;
    this.technology = technology;
    this.treatment = treatment;
    this.vehicles = vehicles;
  }
}
