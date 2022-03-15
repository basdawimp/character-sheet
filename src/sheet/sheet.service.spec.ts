import { Test, TestingModule } from '@nestjs/testing';
import { SheetService } from './sheet.service';

describe('SheetService', () => {
  let service: SheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetService],
    }).compile();

    service = module.get<SheetService>(SheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getStats', () => {
    it('should be defined', () => {
      expect(service.getStats()).toBeDefined();
    });

    it('returns object contains attribute names with assosiated values', () => {
      expect(service.getStats()).toMatchObject({
        strength: expect.any(Number),
        agility: expect.any(Number),
        fighting: expect.any(Number),
        awareness: expect.any(Number),
        stamina: expect.any(Number),
        dexterity: expect.any(Number),
        interllect: expect.any(Number),

        dodge: expect.any(Number),
        parry: expect.any(Number),
        fortitude: expect.any(Number),
        toughness: expect.any(Number),
        will: expect.any(Number),

        acrobatics: expect.any(Number),
        athletics: expect.any(Number),
        closeCombat: expect.any(Number),
        deception: expect.any(Number),
        expertise: expect.any(Number),
        insight: expect.any(Number),
        intimidation: expect.any(Number),
        investigation: expect.any(Number),
        perception: expect.any(Number),
        persuasion: expect.any(Number),
        rangedCombat: expect.any(Number),
        slightOfHand: expect.any(Number),
        stealth: expect.any(Number),
        technology: expect.any(Number),
        treatment: expect.any(Number),
        vehicles: expect.any(Number),
      });
    });

    /*it('attribute values mach those saved in file');*/
  });

  describe('displayStats', () => {
    it('should be defined', () => {
      expect(service.displayStats()).toBeDefined();
    });
  });
});
