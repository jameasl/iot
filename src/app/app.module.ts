import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }
}
