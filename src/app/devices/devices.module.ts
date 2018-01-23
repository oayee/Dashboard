import {NgModule} from '@angular/core';
import {DevicesService} from './devices.service';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule,
  MatTableModule} from '@angular/material';
import {DevicesComponent} from './devices.component';
import {DevicesRoutingModule} from './devices-routing.module';
import {CommonModule} from '@angular/common';
import {UserService} from '../core/user-service/user.service';
import {SatPopoverModule} from "@ncstate/sat-popover"
import {EditPopoverComponent} from "../edit-popover/edit-popover.component";
import {FormsModule} from "@angular/forms";
import {NamesStringPipe} from "./names-string.pipe"

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
    FormsModule
  ],
  declarations:[
    DevicesComponent,
    EditPopoverComponent,
    NamesStringPipe
  ],
  providers:[
    DevicesService,
    UserService
  ]
})
export class DevicesModule {}
