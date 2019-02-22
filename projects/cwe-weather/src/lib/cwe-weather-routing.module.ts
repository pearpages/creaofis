import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CweWeatherComponent } from './weather/cwe-weather.component';

const routes: Routes = [{ path: '', component: CweWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CweWeatherRoutingModule {}
