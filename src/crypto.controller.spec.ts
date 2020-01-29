//Unit teste pt fiecare functie
import { Test, TestingModule } from '@nestjs/testing';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), JwtModule.register({ secret: 'hard!to-guess_secret' })],
      controllers: [CryptoController],
      providers: [CryptoService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<CryptoController>(CryptoController);
      expect(appController.getHello()).toBe('test');
    });
  });

  describe('password hashing',()=>{
    it('should hash password',() => {
      const appController = app.get<CryptoController>(CryptoController);
      const hashedPassword = appController.encryptPassword({password: 'test'});
      expect(hashedPassword).not.toBe('test');
    })
  })

  describe('check encrypted password',()=>{
    it('should return "true" when password is ok',()=>{
      const appController = app.get<CryptoController>(CryptoController);
      const response = appController.checkPassword({hash: appController.encryptPassword({password:'test'}),password:'test'});
      expect(response).toBe(true);
    })
    it('should return "false" when password is not ok',() => {
      const appController = app.get<CryptoController>(CryptoController);
      const response = appController.checkPassword({hash: appController.encryptPassword({password:'test'}),password:'anotherpass'});
      expect(response).toBe(false);
    })
  })

  describe('token', () => {
    it('should be created',() => {
      const appController = app.get<CryptoController>(CryptoController);
      const createdToken = appController.createToken({userId: 'userid'});
      expect(createdToken).not.toBe('userId');
    })
    it('should be decoded',() =>{
      const appController = app.get<CryptoController>(CryptoController);
      const decodedToken = appController.decodeToken({token:appController.createToken({userId: 'userid'})});
      expect(decodedToken.userId).toBe('userid');
    });
  })

});
