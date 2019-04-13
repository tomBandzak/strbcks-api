import { Controller, Get } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(
    private storeService: StoresService,
  ) {}

  @Get('/')
  async getStores() {
    try {
      return await this.storeService.getStores();
    } catch (e) {
      throw Error(e);
    }
  }
}
