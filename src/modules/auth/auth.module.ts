import * as passport from 'passport';
import {DatabaseModule} from '../database/database.module';
import {Module, NestModule, RequestMethod} from '@nestjs/common';
import {JwtStrategy} from './jwt.strategy';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';

@Module({
  modules: [DatabaseModule],
  components: [JwtStrategy, AuthService],
  controllers: [AuthController]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL });
  }
}
