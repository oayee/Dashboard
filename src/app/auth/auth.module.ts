import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RegisterUserDialogComponent} from './register-user-dialog/register-user-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  declarations: [AuthComponent, RegisterUserDialogComponent],
  entryComponents:[RegisterUserDialogComponent]
})
export class AuthModule { }
