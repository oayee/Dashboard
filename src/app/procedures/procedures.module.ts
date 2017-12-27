import {NgModule} from '@angular/core';
import {ProceduresComponent} from './procedures.component';
import {ProceduresRoutingModule} from './procedures-routing.module';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {ProceduresService} from './procedures.service';
import {ProcedureEditDialogComponent} from './procedure-edit-dialog/procedure-edit-dialog.component';
import {FormsModule} from '@angular/forms';
import {ProcedureAddDialogComponent} from './procedure-add-dialog/procedure-add-dialog.component';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../guards/auth-guard.service';

@NgModule({
  imports: [
    ProceduresRoutingModule,
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
  declarations: [
    ProceduresComponent,
    ProcedureEditDialogComponent,
    ProcedureAddDialogComponent
  ],
  entryComponents:[ProcedureEditDialogComponent, ProcedureAddDialogComponent],
  providers: [ProceduresService, AuthGuard]
})
export class ProceduresModule {

}
