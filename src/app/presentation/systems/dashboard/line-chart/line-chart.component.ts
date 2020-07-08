import { Component, OnInit, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../../../../core/baseComponent';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent extends BaseComponent  {

  constructor(
    injector: Injector
  ) {
    super(injector);
   }

  getTranslate(word) {
    return {
      text: this.translateService.instant(word)
    }
  }

}
