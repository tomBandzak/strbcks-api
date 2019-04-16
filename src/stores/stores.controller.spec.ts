import { Test, TestingModule } from '@nestjs/testing';
import { StoresController } from './stores.controller';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { StoresService } from './stores.service';
import { UserService } from '../user/user.service';
import {UserModule} from '../user/user.module';
import { storeMock } from './mocks/store.mock';
import {IStore} from './interfaces/store.interface';
import mock = jest.mock;

describe('Stores Controller', () => {
  let controller: StoresController;
  let storesService: StoresService;

  const mockPromise: Promise<IStore[]> = new Promise((resolve = () => [storeMock]) => {
    resolve();
  });

  beforeEach(async (done) => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(
          {
            keepConnectionAlive: true,
          },
        ),
        UserModule,
      ],
      providers: [
        StoresService,
        {
          provide: getRepositoryToken(Store),
          useValue: {},
        },
        UserService,
      ],
      controllers: [StoresController],
    }).compile();

    controller = module.get<StoresController>(StoresController);
    storesService = module.get<StoresService>(StoresService);
    done();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call findStores', async () => {
    const findStoresSpy = jest.spyOn(storesService, 'findStores').mockImplementation(() => mockPromise);

    await controller.findStores({});
    expect(findStoresSpy).toBeCalled();
  });

  it('should call createStore', async () => {
    const createStoreSpy = jest.spyOn(storesService, 'createStore').mockImplementation(() => mockPromise);

    await controller.createStore(storeMock);
    expect(createStoreSpy).toBeCalled();
  });

  it('should call updateStore', async () => {
    const updateStoreSpy = jest.spyOn(storesService, 'updateStore').mockImplementation(() => mockPromise);

    await controller.updateStore({});
    expect(updateStoreSpy).toBeCalled();
  });

  it('should call removeStore', async () => {
    const removeStoreSpy = jest.spyOn(storesService, 'removeStore').mockImplementation(() => mockPromise);

    await controller.removeStore({});
    expect(removeStoreSpy).toBeCalled();
  });
});
