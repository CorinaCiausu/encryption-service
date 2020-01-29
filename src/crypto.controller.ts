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

  //decorator ..../ceva e endpoint
  @Get('/ceva')
  getCeva():any {
    return 'Ceva nou';
  }

  @Post('/catianiai')
  getVarsta(@Body() prevage: { age: string }):string{
    return this.cryptoService.actualage(prevage.age);
  }
}
