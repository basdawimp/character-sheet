import { Injectable } from '@nestjs/common';

@Injectable()
export class SheetService {
  getStats(): string {
    return `name: one\nstrength: 0\nagility: 0\nfighting: 0\nawareness: 0\nstamina: 0\ndexterity: 0\ninterllect: 0\n\ndodge: 0\nparry: 0\nfortitude: 0\ntoughness: 0\nwill: 0\n\nacrobatics: 0\nathletics: 0\ncloseCombat: 0\ndeception: 0\nexpertise: 0\ninsight: 0\nintimidation: 0\ninvestigation: 0\nperception: 0\npersuasion: 0\nrangedCombat: 0\nslightOfHand: 0\nstealth: 0\ntechnology: 0\ntreatment: 0\nvehicles: 0`;
  }
}
