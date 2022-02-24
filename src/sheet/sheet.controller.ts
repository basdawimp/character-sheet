import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post()
  makeNewSheet(@Body('name') name: string, @Body('stats') stats: number[]) {
    this.sheetService.makeNewSheet(name, stats);
  }

  @Get()
  getAllSheets() {
    return this.sheetService.getSheets();
  }

  @Get(':name')
  getSheetByName(@Param(':name') sheetName: string) {
    return this.sheetService.getSheetByName(sheetName);
  }
}
