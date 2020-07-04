import { WXType } from 'src/features/weather/domain/model/Weather';
import { WXIcons } from 'src/features/weather/domain/model/WXIcons';

export class WeatherDataFactory {
  static createBackground(wX: WXType): string {
    switch (wX) {
      case WXType.Sunny:
        return '/img/weather/sunny.jpg'
      case WXType.SunnyCloudy:
        return '/img/weather/sunny.jpg'
      case WXType.Cloudy:
        return '/img/weather/cloudy.jpg'
      case WXType.CloudyTempRainyOrThunder:
        return '/img/weather/cloudy_temp_rainy_or_thunder.jpg'
      case WXType.TempRainyOrThunder:
        return '/img/weather/temp_rainy_or_thunder.jpg'
    }
  }

  static createWXIcon(wx: WXType): string {
    switch (wx) {
      case WXType.Sunny:
        return WXIcons.Sunny
      case WXType.SunnyCloudy:
        return WXIcons.SunnyCloudy
      case WXType.Cloudy:
        return WXIcons.Cloudy
      case WXType.CloudyTempRainyOrThunder:
        return WXIcons.CloudyTempRainyOrThunder
      case WXType.TempRainyOrThunder:
        return WXIcons.TempRainyOrThunder
    }
  }

}
