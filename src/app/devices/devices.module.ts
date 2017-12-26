import {NgModule} from '@angular/core';
import {DevicesService} from './devices.service';
import {FormsModule} from '@angular/forms';
import {
  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {DevicesComponent} from './devices.component';
import {DevicesRoutingModule} from './devices-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports:[
    DevicesRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,
    CommonModule
  ],
  declarations:[
    DevicesComponent
  ],
  providers:[
    DevicesService
  ]
})
export class DevicesModule {}
