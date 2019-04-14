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

  async createStore(store: IStore): Promise<any> {
    return await this.storeRepository.insert(store);
  }

  async updateStore(updateData) {
    const storeToUpdate = await this.storeRepository.findOne(updateData.storeNumber || '');
    if (!storeToUpdate) {
      return 'Store not found';
    }
    Object.assign(storeToUpdate, updateData);
    await this.storeRepository.save(storeToUpdate);
    return 'Updated store: ' + JSON.stringify(storeToUpdate);
  }

  async removeStore(removeData) {
    const storeToRemove = await this.storeRepository.findOne(removeData.storeNumber || '');
    if (!storeToRemove) {
      return 'Store not found';
    }
    await this.storeRepository.remove(storeToRemove);
    return 'Removed store: ' + JSON.stringify(storeToRemove);
  }
}
