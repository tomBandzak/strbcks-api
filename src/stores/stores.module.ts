import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoresService],
  controllers: [StoresController],
})
export class StoresModule {}
