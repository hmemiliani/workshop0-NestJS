import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './common/filters/http-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // valida solamenrte las propiedades que tienen decoradores DTO
      forbidNonWhitelisted: true, // Rechaza las solicitudes con propieades no permitidas
      transform: true, // sirve para transformar los payloads que coincidan con los tipos de los DTO
    }),
  );
  app.useGlobalFilters(new HttpErrorFilter()); //respuesta a la cascarita
  await app.listen(3000);
}
bootstrap();
