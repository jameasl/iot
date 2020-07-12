import { Component, OnInit, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../../../../core/baseComponent';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent extends BaseComponent implements OnInit {

  categoryAxisTitle;

  constructor(
    injector: Injector
  ) {
    super(injector);
   }
  ngOnInit(): void {
    this.translateService.get('LineChart.Hour').subscribe(result =>{
      this.categoryAxisTitle = result;
    });
  }
}
