import { Component, OnInit } from '@angular/core';
import { SettingService } from './service/inf/setting.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private settingService: SettingService

    ) {
  }
  ngOnInit(): void {
    this.settingService.getAllSettings().subscribe();
    this.checkForDefualtLanguage();
  }
  checkForDefualtLanguage() {
    const defaultLanguage = localStorage.getItem('language');
    if(!defaultLanguage) {
      localStorage.setItem('language', 'fa');
      localStorage.setItem('direction', 'rtl');
    }
  }
}
