import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '' +
      '<h1>Welcome to Starbucks stores location API</h1>' +
      '<h2>In urgent need of coffee read instructions above</h2>' +
      '<p>For unfiltered list of SB stores use /stores endpoint</p>';
  }
}
