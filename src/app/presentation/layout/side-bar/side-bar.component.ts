import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() isMenuOpen;
  baseIconUrl = '/assets/icon/sidebar/';

  constructor(

  ) {
   }

  ngOnInit(): void {

  }
  getLogoWidth() {
    return this.isMenuOpen ? '70' : '40';
  }
  iconUrl(name) {
    return this.baseIconUrl + name + '.svg';
  }


}
