import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { StoresService } from './stores.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('stores')
export class StoresController {
  constructor(
    private storeService: StoresService,
  ) {}

  @Get('/')
  @UseGuards(AuthGuard)
  async findStores(@Query() query) {
    try {
      return await this.storeService.findStores(query);
    } catch (e) {
      throw Error(e);
    }
  }
}
