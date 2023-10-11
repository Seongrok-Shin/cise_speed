import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const PORT: number | any = process.env.PORT != '' ? process.env.PORT : 5000;
  Logger.log('INITIAL PORT::' + PORT);
  await app.listen(PORT);
}
bootstrap();
