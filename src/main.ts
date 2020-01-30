import { NestFactory } from '@nestjs/core';
import { CryptoModule } from './crypto.module';
const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(CryptoModule);
  await app.listen(port);
}
bootstrap();
