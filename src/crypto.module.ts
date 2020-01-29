import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class AppModule {}
