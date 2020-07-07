import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './systems/usm/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { PresentationRoutingModule } from './presentation-routing.module';
import { SideNavLayoutComponent} from './layout/side-nav-layout/side-nav-layout.component';
import { FlatLayoutComponent} from './layout/flat-layout/flat-layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { LineChartComponent } from './systems/dashboard/line-chart/line-chart.component';


@NgModule({
  declarations: [
     HomeComponent,
     SideNavLayoutComponent,
     FlatLayoutComponent,
     SideBarComponent,
     HeaderComponent,
     LineChartComponent
    ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    LayoutModule,
   SharedModule,
   
   
  ],
  providers: [
    
    
  ]
 
})
export class PresentationModule { }
