import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiCheckedComponent } from './cui-checked/cui-checked.component';
import { CuiSnakeComponent } from './cui-snake/cui-snake.component';
import { CuiCityForecastComponent } from './cui-city-forecast/cui-city-forecast.component';
import { CuiCityForecastSuccessComponent } from './cui-city-forecast/success/cui-city-forecast-success.component';
import { CuiCityForecastNotAskedComponent } from './cui-city-forecast/not-asked/cui-city-forecast-not-asked.component';
import { CuiCityForecastFailureComponent } from './cui-city-forecast/failure/cui-city-forecast-failure.component';
import { CuiCityForecastPendingComponent } from './cui-city-forecast/pending/cui-city-forecast-pending.component';

const exportedComponents = [CuiCheckedComponent, CuiSnakeComponent, CuiCityForecastComponent];

@NgModule({
  declarations: [
    ...exportedComponents,
    CuiCityForecastComponent,
    CuiCityForecastSuccessComponent,
    CuiCityForecastNotAskedComponent,
    CuiCityForecastFailureComponent,
    CuiCityForecastPendingComponent
  ],
  imports: [CommonModule],
  exports: [...exportedComponents]
})
export class CuiUiModule {}
