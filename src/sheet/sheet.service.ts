import { Injectable } from '@nestjs/common';
import { Sheet } from './sheet.class';

@Injectable()
export class SheetService {
  private sheets: Sheet[] = [];

  makeNewSheet(name, stats: number[]) {
    this.sheets.push(new Sheet(name, stats));
  }

  getSheets() {
    return this.sheets;
  }

  getSheetByName(sheetName: string) {
    return sheetName;
  }
}
