import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuiUiModule } from 'cui-ui';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ClxLandingComponent } from './landing/clx-landing.component';

const material2 = [MatToolbarModule, MatButtonModule];

@NgModule({
  declarations: [ClxLandingComponent],
  imports: [...material2, CommonModule, CuiUiModule],
  exports: [...material2, ClxLandingComponent, CuiUiModule]
})
export class ClxSharedModule {}
