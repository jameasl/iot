import { Component, OnInit, Renderer2 } from '@angular/core';
import { TextValue } from 'src/app/models/setting.model';
import { SettingService } from 'src/app/service/inf/setting.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataService } from '../../../shared/services/sharedData.service';
import { KendoMessageService } from '../../../shared/services/kendo-message.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {
  
  defaultLanguage: string;
  languages: TextValue[];
  directions;

  constructor(
    private settingService: SettingService,
    private renderer: Renderer2,
    private localizationService: LocalizationService,
    private translateService: TranslateService,
    private sharedDataService: SharedDataService,
    private KendoMessageService: KendoMessageService

  ) { }

  ngOnInit(): void {
    this.defaultLanguage = localStorage.getItem('language');

     this.settingService.settings.subscribe(result => {
      this.languages = result.languages;
    });
    this.settingService.settings.subscribe(result => {
      this.directions = result.directions;
    });
  }
  selectionChange(language) {
    this.sharedDataService.changeLanguage(language);
    this.translateService.setDefaultLang(language);
    localStorage.setItem('language', language);
    this.defaultLanguage = language;
    this.renderer.removeAttribute(document.body, 'class');
    const direction = this.directions[language];
    this.renderer.addClass(document.body, direction);
    location.reload();

    
  
  }

}
