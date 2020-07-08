import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    LineChartComponent
    ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
  ],
  providers: [

  ]
})
export class DashboardModule { }
