import { GetCurrentDayWeather } from 'src/features/weather/domain/usecases/base/GetCurrentDayWeatherUseCaseItf';
import { GetCurrentDayWeatherUseCase } from 'src/features/weather/domain/usecases/GetCurrentDayWeatherUseCase';
import appProvider from 'src/provider/AppProvider';

export class WeatherProvider {
  static get GetCurrentDayWeatherUseCase(): GetCurrentDayWeather.UseCase {
    return new GetCurrentDayWeatherUseCase(appProvider.fetcher);
  }
};
