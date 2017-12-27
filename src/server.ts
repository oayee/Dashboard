import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as serveStatic from 'serve-static';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {HttpExceptionFilter} from './modules/exception/http-exception.filter';

let s = express();

async function bootstrap() {
  s.use(serveStatic(path.join(__dirname, '../dist')));
  s.use(serveStatic(path.join(__dirname, '../public')));
  s.use(serveStatic(path.join(__dirname, '../node_modules/@angular/material/prebuilt-themes')));

  const app = await NestFactory.create(ApplicationModule, s);

  app.use(bodyParser.json());
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());


  app.use((req, res, next) => {
    if(req.originalUrl.startsWith('/api')) {
      next();
    } else {
      res.sendFile('index.html', {root: 'dist'});
    }
  });

  await app.listen(4200);
}
bootstrap();
