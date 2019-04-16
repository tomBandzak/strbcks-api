import { Test, TestingModule } from '@nestjs/testing';
import { StoresService } from './stores.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { storeMock } from './mocks/store.mock';
import { updateStoreMock, updatedStoreMock } from './mocks/updateStore.mock';

describe('StoresService', () => {
  let service: StoresService;

  const mockRepo = [
    {
      brand: 'Starbucks',
      storeNumber: '49159-254845',
      storeName: 'Eperia',
      ownershipType: 'Licensed',
      streetAddress: 'Einsteinova 3541/18, 821 01 Prešov',
      city: 'Prešov',
      stateProvince: 'PO',
      country: 'SK',
      postcode: '080 01',
      phoneNumber: '',
      timezone: 'GMT+1:00 Europe/Prague',
      longitude: '17.11',
      latitude: '48.13',
    },
    {
      brand: 'Starbucks',
      storeNumber: '49159-254846',
      storeName: 'Eperia',
      ownershipType: 'Licensed',
      streetAddress: 'Einsteinova 3541/18, 821 01 Prešov',
      city: 'Prešov',
      stateProvince: 'PO',
      country: 'SK',
      postcode: '080 01',
      phoneNumber: '',
      timezone: 'GMT+1:00 Europe/Prague',
      longitude: '17.11',
      latitude: '48.13',
    },
  ];
  let updatedRepo = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoresService,
        {
          provide: getRepositoryToken(Store),
          useValue: {
            find: () => mockRepo,
            findOne: (storeNumber) => {
              return ((arr, query) => {
                return arr.filter(el => el.storeNumber === query);
              })(mockRepo, storeNumber)[0];
            },
            insert: (store) => mockRepo.push(store),
            save: (updateData) => {
              updatedRepo = ((arr, upData) => {
                return arr.map(s => {
                    if (s.storeNumber === upData.storeNumber) {
                      return Object.assign(s, upData);
                    } else {
                      return s;
                    }
                });
              })(mockRepo, updateData);
            },
            remove: (removeData) => {
              const index = ((arr, storeNumber) => {
                return arr.findIndex(s => s.storeNumber === storeNumber);
              })(mockRepo, removeData.storeNumber);
              mockRepo.splice(index, 1);
            },
          },
        },
      ],
    }).compile();

    service = module.get<StoresService>(StoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*  test are mocked to prove, that StoresService methods call Repository methods */
  it('should return mocked repo', async () => {
    const stores = await service.findStores({});
    expect(stores).toMatchObject(mockRepo);
  });

  it('should insert store to mocked repo', async () => {
    await service.createStore(storeMock);
    expect(mockRepo).toContain(storeMock);
  });

  it('should update store in mocked repo', async () => {
    await service.updateStore(updateStoreMock);
    expect(updatedRepo).toContainEqual(updatedStoreMock);
  });

  it('should remove store from mocked repo', async () => {
    const removedStore = await service.removeStore(updatedStoreMock);
    expect(removedStore).toEqual(updatedStoreMock);
    expect(mockRepo).not.toContainEqual(updatedStoreMock);
  });
});
