import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { FlatLayoutComponent } from './layout/flat-layout/flat-layout.component';
import { SideNavLayoutComponent } from './layout/side-nav-layout/side-nav-layout.component';
import { AuthGuard } from '../service/usm/guards/auth.guard';
import { LineChartComponent } from './systems/dashboard/line-chart/line-chart.component';

const securedRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'line-chart', component: LineChartComponent}
       
    ]
  },

];

const publicRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./systems/usm/usm.module').then(m => m.UsmModule)
    }

];

const routes: Routes = [
  {
    path: '',
    component: SideNavLayoutComponent,
    children: securedRoutes
  },
  {
    path: '',
    component: FlatLayoutComponent,
    children: publicRoutes

  }


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
