import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '' +
      '<h1>Welcome to Starbucks stores location API</h1>' +
      '<h2>In urgent need of coffee read instructions above</h2>' +
      '<p>For unfiltered list of SB stores use /stores endpoint</p>' +
      '<p>If you need filtered result, use columns as query parameters</p>' +
      '<p>' +
      '<h3>Available columns:</h3>' +
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
      '</p>' +
      '<p>' +
      '<h3>Other parameters:</h3>' +
      '<ul>' +
      '<li><b>sortBy:</b> defines sorting column (default: storeNumber)</li>' +
      '<li><b>desc:</b> 1 means descending ordering (default: 0) </li>' +
      '</ul>' +
      '<p>Example: /stores?city=los&sortBy=storeNumber&desc=1</p>' +
      '<h2>If you add, update or delete store information</h2>' +
      '<ul>' +
      '<li>To add new store use POST request to /stores endpoint with complete store JSON in request body </li>' +
      '<li>To update the store use PUT request to /stores endpoint with JSON containing field storeNumber (a key) ' +
      'and updated fields in request body </li>' +
      '<li>To delete the store use DELETE request to /stores endpoint with JSON containing field storeNumber (a key) in request body </li>' +
      '<li>For modfying actions you need to use Apikey token in http request header</li>' +
      '</ul>';
  }
}
