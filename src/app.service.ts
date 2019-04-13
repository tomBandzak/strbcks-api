import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '' +
      '<h1>Welcome to Starbucks stores location API</h1>' +
      '<h2>In urgent need of coffee read instructions above</h2>' +
      '<p>For unfiltered list of SB stores use /stores endpoint</p>' +
      '<p>If you need to filtered result use columns as query parameters</p>' +
      '<p><h3>Available columns:</h3>' +
      '<ul>' +
      '<li><b>storeNumber:</b> unique number of the store </li>' +
      '<li><b>storeName:</b> name of the store </li>' +
      '<li><b>ownershipType:</b> use values (Company Owned, Licensed, Joint Venture or Franchise) </li>' +
      '<li><b>streetAdress:</b> store address </li>' +
      '<li><b>city:</b> city </li>' +
      '<li><b>stateProvince:</b> state/province </li>' +
      '<li><b>country:</b> country </li>' +
      '<li><b>postCode:</b> post code </li>' +
      '<li><b>phoneNumber:</b> phone number </li>' +
      '<li><b>timezone:</b> timezone </li>' +
      '<li><b>longitude:</b> geographical longitude </li>' +
      '<li><b>latitude:</b> geographical latitude </li>' +
      '</ul>' +
      '</p>';
  }
}
