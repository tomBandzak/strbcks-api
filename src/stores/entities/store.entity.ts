import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IStore } from '../interfaces/store.interface';

@Entity()
export class Store implements IStore {
  @Column()
  brand: string;
  @PrimaryColumn()
  storeNumber: string;
  @Column()
  storeName: string;
  @Column()
  ownershipType: string;
  @Column()
  streetAddress: string;
  @Column()
  city: string;
  @Column()
  stateProvince: string;
  @Column()
  country: string;
  @Column()
  postcode: string;
  @Column()
  phoneNumber: string;
  @Column()
  timezone: string;
  @Column()
  longitude: string;
  @Column()
  latitude: string;
}
