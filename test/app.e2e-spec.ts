import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Welcome to Starbucks stores location API');
  });

  it('/stores (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/stores?country=SK');
    expect(res.status).toBe(200);
    const resObject = JSON.parse(res.text);
    expect(resObject.every(s => s.country === 'SK')).toBeTruthy();
  });
});
