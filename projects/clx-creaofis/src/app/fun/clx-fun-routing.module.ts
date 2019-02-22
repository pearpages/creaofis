import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClxFunComponent } from './fun/clx-fun.component';

const routes: Routes = [{ path: '', component: ClxFunComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClxFunRoutingModule {}
