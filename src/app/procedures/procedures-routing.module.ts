import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProceduresComponent} from './procedures.component';
import {AuthGuard} from "../guards/auth-guard.service";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ProceduresComponent, canActivate: [AuthGuard]},
  ])],
  exports: [RouterModule]
})
export class ProceduresRoutingModule {
}
