import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(
        `name: one
        strength: 0
        agility: 0
        fighting: 0
        awareness: 0
        stamina: 0
        dexterity: 0
        interllect: 0
        
        dodge: 0
        parry: 0
        fortitude: 0
        toughness: 0
        will: 0
        
        acrobatics: 0
        athletics: 0
        closeCombat: 0
        deception: 0
        expertise: 0
        insight: 0
        intimidation: 0
        investigation: 0
        perception: 0
        persuasion: 0
        rangedCombat: 0
        slightOfHand: 0
        stealth: 0
        technology: 0
        treatment: 0
        vehicles: 0`,
      );
  });
});
