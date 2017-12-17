import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppCommonModule} from './core/app-common.module';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule, MatInputModule, MatRadioModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { MainTableComponent } from './main-table/main-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
  ],
  imports: [
    BrowserModule,
    AppCommonModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
