import { Controller, Get, Query } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(
    private storeService: StoresService,
  ) {}

  @Get('/')
  async findStores(@Query() query) {
    try {
      return await this.storeService.findStores(query);
    } catch (e) {
      throw Error(e);
    }
  }
}
