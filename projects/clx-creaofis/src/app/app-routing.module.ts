import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClxLandingComponent } from './shared/landing/clx-landing.component';

const routes: Routes = [
  {
    path: 'fun',
    loadChildren: './fun/clx-fun.module#ClxFunModule'
  },
  {
    path: 'weather',
    loadChildren: './weather/clx-weather.module#ClxWeatherModule'
  },
  {
    path: '**',
    component: ClxLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
