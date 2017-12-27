import {Model} from 'mongoose';
import {BadRequestException, Component, Inject} from '@nestjs/common';
import {Profile} from './interfaces/profile.interface';
import {ProfileModelToken} from '../constants';
import {AuthService} from "../auth/auth.service";

@Component()
export class ProfileService {
  constructor(@Inject(ProfileModelToken) private readonly profilesModel: Model<Profile>,
              private authService: AuthService) {
  }

  async register(user): Promise<any> {
    console.log('user: ', user);
    let token = await this.authService.createToken(Object.assign({}, user, {password: undefined}));
    user.access_token = token.access_token;
    const profiles = new this.profilesModel(user);
    return await profiles.save();
  }

  async login(auth: {password: string, login: string}): Promise<any> {
    console.log('auth: ', auth);
    let user = await this.profilesModel.findOne({nickname: auth.login, password: auth.password});
    console.log('user: ', user);
    if (!user) {
      throw new BadRequestException();
    }
    return user;
  }

  async getUsers(): Promise<any> {
    return await this.profilesModel.find().exec();
  }

  public getUser(user) {
    return user;
  }
}
