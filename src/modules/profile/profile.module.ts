import {MiddlewaresConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ProfileController} from './profile.controller';
import {ProfileService} from './profile.service';
import {ProfileProviders} from './profile.providers';
import {DatabaseModule} from '../database/database.module';
import * as passport from 'passport';
import {AuthService} from "../auth/auth.service";

const routes: any[] = [
  { path: '/profiles', method: RequestMethod.GET },
];

@Module({
  modules: [DatabaseModule],
  controllers: [ProfileController],
  components: [
    AuthService,
    ProfileService,
    ...ProfileProviders,
  ],
})
export class ProfileModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(passport.initialize()).with().forRoutes(...routes);
    consumer.apply(passport.authenticate('jwt', { session: false, failWithError: true})).forRoutes(...routes);
  }
}
