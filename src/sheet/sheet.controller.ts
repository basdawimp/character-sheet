import { Controller, Get, Param } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  setStats() {
    return this.sheetService.setStats();
  }

  @Get()
  getStats() {
    return this.sheetService.getStats();
  }

  @Get(':profile')
  getStatsByProfile(@Param('profile') profileName) {
    return this.sheetService.getStatsByProfile(profileName);
  }

  setProfile() {
    return this.setProfile();
  }

  getProfile() {
    return this.sheetService.getProfile();
  }
}
