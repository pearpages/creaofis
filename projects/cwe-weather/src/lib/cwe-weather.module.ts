import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CuiUiModule } from 'cui-ui';

import { CweWeatherEffects } from './cwe-weather.effects';
import { reducer } from './cwe-weather.reducer';
import { CweWeatherRoutingModule } from './cwe-weather-routing.module';
import { CweWeatherComponent } from './weather/cwe-weather.component';
import { CweWeatherService } from './cwe-weather.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [CweWeatherComponent],
  imports: [
    CommonModule,
    CweWeatherRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CuiUiModule,
    StoreModule.forFeature('weather', reducer),
    EffectsModule.forFeature([CweWeatherEffects])
  ],
  providers: [CweWeatherService],
  exports: [CweWeatherComponent]
})
export class CweWeatherModule {}
