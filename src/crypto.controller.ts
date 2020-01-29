//declaratia endpointurilor
import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller()
export class CryptoController {

  @Inject()
  private readonly cryptoService: CryptoService;

  constructor() {}

  @Get()
  getHello(): any {
    return this.cryptoService.getHello();
  }

  @Post('/encrypt')
  encryptPassword(@Body() payload: { password: string }) {
    return this.cryptoService.encryptPassword(payload.password);
  }

  @Post('/checkPassword')
  checkPassword(@Body() payload: { hash: string, password: string }) {
    return this.cryptoService.checkPassword(payload.hash, payload.password);
  }

}
