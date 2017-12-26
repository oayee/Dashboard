import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";
import {MatFormFieldModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
