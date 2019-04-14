import {Body, Controller, Delete, Get, Post, Put, Query, UseGuards} from '@nestjs/common';
import { StoresService } from './stores.service';
import { AuthGuard } from '../auth/auth.guard';
import { IStore } from './interfaces/store.interface';

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

  @Post('/')
  @UseGuards(AuthGuard)
  async createStore(@Body() storeData: IStore) {
    try {
      return await this.storeService.createStore(storeData);
    } catch (e) {
      return 'Insert error: [' + e.message + ']';
    }
  }

  @Put('/')
  async updateStore(@Body() updateData) {
    try {
      return await this.storeService.updateStore(updateData);
    } catch (e) {
      return 'Update error: [' + e.message + ']';
    }
  }

  @Delete('/')
  async removeStore(@Body() removeData) {
    try {
      return await this.storeService.removeStore(removeData);
    } catch (e) {
      return 'Remove error: [' + e.message + ']';
    }
  }
}
