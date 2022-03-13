import { Controller, Get } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Get()
  getStats(): string {
    return this.sheetService.getStats();
  }
}
