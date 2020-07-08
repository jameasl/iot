import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingService } from './service/inf/setting.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./presentation/presentation.module').then(m => m.PresentationModule),
    resolve: {settings: SettingService}
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
