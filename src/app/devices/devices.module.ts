import {NgModule} from '@angular/core';
import {DevicesService} from './devices.service';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {DevicesComponent} from './devices.component';
import {DevicesRoutingModule} from './devices-routing.module';
import {CommonModule} from '@angular/common';
import {UserService} from '../core/user-service/user.service';

@NgModule({
  imports:[
    DevicesRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations:[
    DevicesComponent
  ],
  providers:[
    DevicesService,
    UserService
  ]
})
export class DevicesModule {}
