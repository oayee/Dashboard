import {NgModule} from '@angular/core';
import {ProceduresComponent} from './procedures.component';
import {ProceduresRoutingModule} from './procedures-routing.module';
import {
  MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {ProceduresService} from './procedures.service';
import {AuthGuard} from "../guards/auth-guard.service";

@NgModule({
  imports: [
    ProceduresRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  declarations: [ProceduresComponent],
  providers: [ProceduresService, AuthGuard]
})
export class ProceduresModule {

}
