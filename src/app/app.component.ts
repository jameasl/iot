import { Component, Renderer2, OnInit } from '@angular/core';
import { RTL, LocalizationService, L10N_PREFIX, } from '@progress/kendo-angular-l10n';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2,
    private localizationService: LocalizationService,
    private translateService: TranslateService,

    ) {
  }
  ngOnInit(): void {
    this.getApplicationLanguage();
  }
  getApplicationLanguage() {
    let defaultLanguage = localStorage.getItem('language');
    if(!defaultLanguage) {
      defaultLanguage = 'fa';
      localStorage.setItem('language', defaultLanguage);
    }
    this.translateService.setDefaultLang(defaultLanguage);

    switch(defaultLanguage) {
      case 'fa': {
        this.renderer.addClass(document.body, 'rtl');
        this.localizationService.changes.next({ rtl: true });

        break;
      }
      case 'en': {
        this.renderer.addClass(document.body, 'ltr');
      }
    }
  }

}
