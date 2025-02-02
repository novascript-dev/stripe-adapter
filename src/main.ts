import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Carregar o arquivo .env
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
