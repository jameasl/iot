import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor(
    private translateService: TranslateService


  ) { }

  ngOnInit(): void {
  }
  getTranslate(word) {
    return {
      text: this.translateService.instant(word)
    }
  }

}
