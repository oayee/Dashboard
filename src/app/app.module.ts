import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppCommonModule} from './core/app-common.module';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import { TableMainComponent } from './table-main/table-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMainComponent,
  ],
  imports: [
    BrowserModule,
    AppCommonModule.forRoot(),
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
