import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

@Injectable()
export class SheetService {
  /*setStats() {

  }*/

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

  displayStats() {
    let statsAsString = `name: one`;
    const statsAsArray = stringify(this.getStats()).split(/[&,=]+/);
    for (let i = 0; i < statsAsArray.length; i++) {
      statsAsArray[i] = statsAsArray[i] + `: ` + statsAsArray[i + 1];
      statsAsArray.splice(i + 1, 1);
    }

    statsAsArray.splice(7, 0, ``);
    statsAsArray.splice(13, 0, ``);

    for (let i = 0; i < statsAsArray.length; i++) {
      statsAsString = statsAsString + `\n` + statsAsArray[i];
    }

    return statsAsString;
  }

  /*getStatsByProfile(profileName) {

  }

  setProfile() {

  }

  getProfile() {

  }*/
}
