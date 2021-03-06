import { WeatherData } from '../bss-business.models';

const weatherData: WeatherData = {
  coord: {
    lon: 123,
    lat: 435
  },
  base: 'base',
  visibility: 100,
  dt: 20,
  id: 123,
  name: 'name',
  cod: 123,
  weather: [
    {
      id: 1231,
      main: 'main',
      description: 'description',
      icon: 'icon'
    }
  ],
  main: {
    temp: 768,
    pressure: 456,
    humidity: 167,
    temp_min: 4356,
    temp_max: 6575
  },
  wind: {
    speed: 1235,
    deg: 164
  },
  clouds: { all: 235 },
  sys: {
    type: 244,
    id: 32534,
    message: 3656,
    country: 'ES',
    sunrise: Date.now(),
    sunset: Date.now()
  }
};
Object.freeze(weatherData);

export const weatherDataMock = weatherData;
