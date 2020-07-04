import { WXType } from 'src/features/weather/domain/model/Weather';
import { WXIcons } from 'src/features/weather/domain/model/WXIcons';

export class WeatherDataFactory {
  static createBackground(wX: WXType): string {
    let photoName = '';
    switch (wX) {
      case WXType.Sunny:
        photoName = 'sunny.jpg'
        break;
      case WXType.SunnyCloudy:
        photoName = 'sunny.jpg'
        break;
      case WXType.Cloudy:
        photoName = 'cloudy.jpg'
        break;
      case WXType.CloudyTempRainyOrThunder:
        photoName = 'cloudy_temp_rainy_or_thunder.jpg'
        break;
      case WXType.TempRainyOrThunder:
        photoName = 'temp_rainy_or_thunder.jpg'
        break;
    }
    return '/img/weather/' + photoName;
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
