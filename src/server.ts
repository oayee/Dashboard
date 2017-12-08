import { NestFactory } from '@nestjs/core';
import {ApplicationModule} from '@angular/core';
import * as serveStatic from 'serve-static';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

let s = express();

async function bootstrap() {
  s.use(serveStatic(path.join(__dirname, '../dist')));

  const app = await NestFactory.create(ApplicationModule, s);

  app.setGlobalPrefix('api');

  app.use(bodyParser.json());

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
