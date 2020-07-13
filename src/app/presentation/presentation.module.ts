import { NgModule, Renderer2, Injectable, RendererFactory2, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './systems/usm/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { PresentationRoutingModule } from './presentation-routing.module';
import { SideNavLayoutComponent } from './layout/side-nav-layout/side-nav-layout.component';
import { FlatLayoutComponent } from './layout/flat-layout/flat-layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '../shared/shared.module';
import { LineChartComponent } from './systems/dashboard/line-chart/line-chart.component';
import { SettingComponent } from './layout/setting/setting.component';
import { SelectLanguageComponent } from './layout/select-language/select-language.component';
import { SettingService } from '../service/inf/setting.service';
import { TranslateService } from '@ngx-translate/core';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';

@NgModule({
  declarations: [
    HomeComponent,
    SideNavLayoutComponent,
    FlatLayoutComponent,
    SideBarComponent,
    HeaderComponent,
    SettingComponent,
    SelectLanguageComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
  ],
  providers: [
 
  ]

})
export class PresentationModule {
  directions;
  languages;
  private renderer: Renderer2;

  constructor(
    private settingService: SettingService,
    private rendererFactory: RendererFactory2,
    private translateService: TranslateService,
    public intlService: IntlService,


  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.getApplicationSettings();
  }
  getApplicationSettings() {
    this.settingService.settings.subscribe(result => {
      this.languages = result.languages;
    });
    this.settingService.settings.subscribe(result => {
      this.directions = result.directions;
    });
    this.initBodyDirection();
  }
  initBodyDirection() {
    const defaultLanguage = localStorage.getItem('language');
    (this.intlService as CldrIntlService).localeId = defaultLanguage;

    const direction = this.directions[defaultLanguage];
    this.renderer.addClass(document.body, direction);
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.get('Title').subscribe(result => {
      document.title = result;
    });


  }
}
