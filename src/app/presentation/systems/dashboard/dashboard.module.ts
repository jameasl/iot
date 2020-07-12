import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LineChartComponent
    ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [

  ]
})
export class DashboardModule { }
