import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
