import { Test, TestingModule } from '@nestjs/testing';
import { SheetController } from './sheet.controller';
import { SheetService } from './sheet.service';

describe('SheetController', () => {
  let controller: SheetController;
  let service: SheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheetController],
      providers: [SheetService],
    }).compile();

    service = module.get<SheetService>(SheetService);
    controller = module.get<SheetController>(SheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /*describe('getStats', () => {
    it('should return a sting', async () => {
      let result: ['test'];
      jest.spyOn(service, 'getStats').mockImplementation(() => result);

      expect(controller.getStats()).toBe(result);
    });
  });*/
});
