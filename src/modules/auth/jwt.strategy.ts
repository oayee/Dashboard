import * as passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Component} from '@nestjs/common';
import {AuthService} from './auth.service';

@Component()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'oayee',
        ignoreExpiration: true
      },
      async (req, payload, next) => await this.verify(req, payload, next)
    );
    passport.use(this);
  }

  public async verify(req: Request, user, done) {
    // const isValid = this.authService.validateUser(user);
    // if (!isValid) {
    //   return done('Unauthorized', false);
    // }
    done(null, user);
  }
}
