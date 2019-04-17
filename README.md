## Startbucks location data API
- provides API to view and modify data about Starbucks stores location
- Used technologies and standards
  - Nest.sj - nice abstraction above Node.js express enforcing MVC architecture
            - nice support for ORM and DB services
  - typeorm - ORM
  - mysql - light and I am used to it
  - REST interface - broadly used
 - I did not use AWS services as I was asked for payment card credentials for creation of account, even without purpose of purchasing and decided not provide this info yo Amazon, yet.
 
## USAGE

For unfiltered list of SB stores use /stores endpoint

If you need filtered result, use columns as query parameters

Available columns:

    storeNumber: unique number of the store
    storeName: name of the store
    ownershipType: use values (Company Owned, Licensed, Joint Venture or Franchise)
    streetAdress: store address
    city: city
    stateProvince: state/province
    country: country
    postCode: post code
    phoneNumber: phone number
    timezone: timezone
    longitude: geographical longitude
    latitude: geographical latitude 

Other parameters:

    sortBy: defines sorting column (default: storeNumber)
    desc: 1 means descending ordering (default: 0) 

Example: /stores?city=los&sortBy=storeNumber&desc=1

If you need to add, update or delete store information:

- To add new store use POST request to /stores endpoint with complete store JSON in request body
- To update the store use PUT request to /stores endpoint with JSON containing field storeNumber (a key) and updated fields in request body
- To delete the store use DELETE request to /stores endpoint with JSON containing field storeNumber (a key) in request body
- For modfying actions you need to use Apikey token in http request header
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```
