import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClxFunRoutingModule } from './clx-fun-routing.module';
import { ClxFunComponent } from './fun/clx-fun.component';
import { ClxSharedModule } from '../shared/clx-shared.module';

@NgModule({
  declarations: [ClxFunComponent],
  imports: [CommonModule, ClxFunRoutingModule, ClxSharedModule]
})
export class ClxFunModule {}
