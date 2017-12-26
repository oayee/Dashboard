import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', loadChildren: 'app/devices/devices.module#DevicesModule', pathMatch: 'full'},
  {path: 'procedures', loadChildren: 'app/procedures/procedures.module#ProceduresModule'},
  {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
