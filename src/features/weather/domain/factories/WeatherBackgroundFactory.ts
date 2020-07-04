import { WXType } from 'src/features/weather/domain/model/Weather';

export class WeatherBackgroundFactory {
  static createBackground(wX: WXType): string {
    switch (wX) {
      case WXType.SunnyCloudy:
        return '/img/weather/sunny.jpg'
      case WXType.Cloudy:
        return '/img/weather/cloudy.jpg'
      case WXType.CloudyTempRainyOrThunder:
        return '/img/weather/cloudy_temp_rainy_or_thunder.jpg'
    }
  }
}
