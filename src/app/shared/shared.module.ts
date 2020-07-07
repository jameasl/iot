import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChartsModule } from '@progress/kendo-angular-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     TranslateModule,
     ChartsModule
  ],
  exports: [
    TranslateModule, 
    ChartsModule
    
  ]
})
export class SharedModule { }
