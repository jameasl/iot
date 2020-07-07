import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RTL, LocalizationService, L10N_PREFIX, } from '@progress/kendo-angular-l10n';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function directionFactory() {
  return true;
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
        
   

  ],
  providers: [
    { provide: RTL, useFactory: directionFactory },

    LocalizationService,
    {
      provide: L10N_PREFIX,
      useValue: 'kendo.dialog'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
