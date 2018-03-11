import {NgModule} from '@angular/core';
import {DevicesService} from './devices.service';
import {
  MAT_DATE_LOCALE, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatTableModule
} from '@angular/material';
import {DevicesComponent} from './devices.component';
import {DevicesRoutingModule} from './devices-routing.module';
import {CommonModule} from '@angular/common';
import {UserService} from '../core/user-service/user.service';
import {SatPopoverModule} from "@ncstate/sat-popover"
import {EditPopoverComponent} from "../edit-popover/edit-popover.component";
import {FormsModule} from "@angular/forms";
import {NamesStringPipe} from "./names-string.pipe"
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports:[
    DevicesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SatPopoverModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  declarations:[
    DevicesComponent,
    EditPopoverComponent,
    NamesStringPipe
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    DevicesService,
    UserService,

  ]
})
export class DevicesModule {}
