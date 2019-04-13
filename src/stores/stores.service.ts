import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Like, Repository } from 'typeorm';
import { IStore } from './interfaces/store.interface';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async findStores(params: IStore): Promise<IStore[]> {
    const conditions = {...params};
    for (const column in conditions) {
      if (conditions.hasOwnProperty(column)) {
        conditions[column] = Like('%' + decodeURI(conditions[column]) + '%');
      }
    }
    return await this.storeRepository.find(conditions);
  }
}
