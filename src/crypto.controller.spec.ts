//Unit teste pt fiecare functie
import { Test, TestingModule } from '@nestjs/testing';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CryptoController],
      providers: [CryptoService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<CryptoController>(CryptoController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
