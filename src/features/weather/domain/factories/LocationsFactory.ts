import { WXType } from 'src/features/weather/domain/model/Weather';

export class LocationsFactory {
  static createArrayFromNet(data) {
    return JSON.parse(data);
  }
  static createWeatherBackground(wX: WXType): string {
    switch (wX) {
      case WXType.SunnyCloudy:
        return '/img/weather/sunny.jpg'
      case WXType.Cloudy:
        return '/img/weather/cloudy.jpg'
    }
  }
};
