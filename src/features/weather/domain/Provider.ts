import { GetCurrentDayWeather } from 'src/features/weather/domain/usecases/base/GetCurrentDayWeatherUseCaseItf';
import { GetWeekWeather } from 'src/features/weather/domain/usecases/base/GetWeekWeatherUseCaseItf';

import { GetCurrentDayWeatherUseCase } from 'src/features/weather/domain/usecases/GetCurrentDayWeatherUseCase';
import { GetWeekWeatherUseCase } from './usecases/GetWeekWeatherUseCase';

import appProvider from 'src/provider/AppProvider';

export class WeatherProvider {
  static get GetCurrentDayWeatherUseCase(): GetCurrentDayWeather.UseCase {
    return new GetCurrentDayWeatherUseCase(appProvider.fetcher);
  }
  static get GetWeekWeatherUseCase(): GetWeekWeather.UseCase {
    return new GetWeekWeatherUseCase(appProvider.fetcher);
  }
};
