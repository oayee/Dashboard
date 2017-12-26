import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';

@Component()
export class AuthService {

  async createToken(user) {
    const secretOrKey = 'oayee';
    const token = jwt.sign(user, secretOrKey, { expiresIn: '1y' });
    return {
      expires_in: '1y',
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    return true;
  }
}
