import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserService} from './user-service/user.service';
import {AuthService} from '../auth/auth-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
  ],
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [
        UserService,
        AuthService
      ]
    };
  }
}
