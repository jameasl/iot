import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LocalizationService, L10N_PREFIX, RTL } from '@progress/kendo-angular-l10n';
import { SharedDataService } from './services/sharedData.service';
import { CldrIntlService, IntlService, IntlModule } from '@progress/kendo-angular-intl';
import { LayoutModule } from '@progress/kendo-angular-layout';
import '@progress/kendo-angular-intl/locales/fa/all';
import { SettingService } from '../service/inf/setting.service';
import { BehaviorSubject } from 'rxjs';

let isRtl;
export function directionFactory() {
  console.log(isRtl);
  return isRtl;
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsModule,
    DropDownsModule,
    LayoutModule,
    IntlModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    ChartsModule,
    DropDownsModule,
    LayoutModule,
    TranslateModule,

  ],
  providers: [
    { provide: RTL, useFactory: directionFactory },
    {
      provide: LOCALE_ID, useValue: 'fa'
    },
    LocalizationService,
    {
      provide: L10N_PREFIX,
      useValue: 'kendo.dialog'
    }
  ]
})
export class SharedModule {
  directions;
  constructor(
    private sharedDataService: SharedDataService,
    public intlService: IntlService,
    private settingService: SettingService

  ) {
    const defaultLanguage = localStorage.getItem('language');

    this.directions = this.settingService.settings.directions;
    isRtl = this.directions[defaultLanguage] === "rtl" ? true : false;

  }
}
