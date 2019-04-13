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

  async findStores(query): Promise<IStore[]> {
    const conditions = { where: {}, order: {} };
    for (const column in query) {
      if (query.hasOwnProperty(column)) {
        if (column === 'sortBy') {
          conditions.order[query[column]] = query.desc ? 'DESC' : 'ASC';
        } else {
          conditions.where[column] = Like('%' + decodeURI(query[column]) + '%');
        }
      }
    }
    return await this.storeRepository.find(conditions);
  }
}
