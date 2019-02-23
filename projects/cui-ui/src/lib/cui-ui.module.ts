import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiCheckedComponent } from './cui-checked/cui-checked.component';
import { CuiSnakeComponent } from './cui-snake/cui-snake.component';
import { CUI_CITY_FOREST_COMPONENTS } from './cui-city-forecast';

const exportedComponents = [CuiCheckedComponent, CuiSnakeComponent, ...CUI_CITY_FOREST_COMPONENTS];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule],
  exports: [...exportedComponents]
})
export class CuiUiModule {}
