import { Injectable } from '@nestjs/common';

@Injectable()
export class SheetService {
  setStats() {

  }

  getStats() {
    return {
      strength: 0,
      agility: 0,
      fighting: 0,
      awareness: 0,
      stamina: 0,
      dexterity: 0,
      interllect: 0,

      dodge: 0,
      parry: 0,
      fortitude: 0,
      toughness: 0,
      will: 0,

      acrobatics: 0,
      athletics: 0,
      closeCombat: 0,
      deception: 0,
      expertise: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      perception: 0,
      persuasion: 0,
      rangedCombat: 0,
      slightOfHand: 0,
      stealth: 0,
      technology: 0,
      treatment: 0,
      vehicles: 0,
    };
  }

  getStatsByProfile(profileName) {

  }

  setProfile() {

  }

  getProfile() {

  }
}
