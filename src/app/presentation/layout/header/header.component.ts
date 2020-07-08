import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuEvent = new EventEmitter();
  @Output() settingEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onMenuClick() {
    this.menuEvent.emit();
  }
  onSettingClick() {
    this.settingEvent.emit();
  }

}
