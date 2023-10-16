import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Easy Block').build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'chrome-extension://npahcpbfbmbbeedponogciojeainkehj',
    ],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(7000);
}
bootstrap();
