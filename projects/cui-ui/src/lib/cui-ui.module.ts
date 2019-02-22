import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiCheckedComponent } from './cui-checked/cui-checked.component';
import { CuiSnakeComponent } from './cui-snake/cui-snake.component';
import { CuiCityForecastComponent } from './cui-city-forecast/cui-city-forecast.component';
import { CuiCityForecastSuccessComponent } from './cui-city-forecast/cui-city-forecast-success.component';
import { CuiCityForecastFailureComponent } from './cui-city-forecast/cui-city-forecast-failure.component';
import { CuiCityForecastPendingComponent } from './cui-city-forecast/cui-city-forecast-pending.component';
import { CuiCityForecastNotAskedComponent } from './cui-city-forecast/cui-city-forecast-not-asked.component';

const exportedComponents = [
  CuiCheckedComponent,
  CuiSnakeComponent,
  CuiCityForecastComponent,
  CuiCityForecastSuccessComponent,
  CuiCityForecastPendingComponent,
  CuiCityForecastFailureComponent,
  CuiCityForecastNotAskedComponent
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule],
  exports: [...exportedComponents]
})
export class CuiUiModule {}
