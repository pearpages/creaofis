import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

import { WeatherResponse } from 'bss-business';

import { CweWeatherFetchAction } from '../cwe-weather.actions';

@Component({
  selector: 'cwe-weather',
  styles: [
    `
      .cwe-weather__form {
        margin-bottom: 10px;
      }
    `
  ],
  template: `
    <form class="cwe-weather__form" [formGroup]="form">
      <label>City: </label><input type="text" #cityName formControlName="cityName" />
    </form>

    <cui-city-forecast class="cwe-weather__result" [weatherResponse]="cityForeCast$ | async"></cui-city-forecast>
  `
})
export class CweWeatherComponent implements OnInit, OnDestroy {
  cityForeCast$: Observable<WeatherResponse>;
  form: FormGroup;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cityName: ''
    });

    this.cityForeCast$ = this.store.select('weather');

    this.subscription = this.form
      .get('cityName')
      .valueChanges.pipe(
        filter(value => value.length > 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.store.dispatch(new CweWeatherFetchAction(value));
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
