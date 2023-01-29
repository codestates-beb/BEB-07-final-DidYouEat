import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { findEvent } from '../chainUtils/eventListener';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log(`
    。　♡ 。　　♡。　　♡
♡。　＼　　｜　　／。　♡
　 DiD You Eat?
♡。　／　　｜　　＼。　♡
。　♡。 　　。　　♡。
    `);
}
bootstrap();
findEvent();
