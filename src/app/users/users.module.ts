import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {UsersService} from './users.service';

@NgModule({
  imports: [
   UsersRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    CommonModule
  ],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
