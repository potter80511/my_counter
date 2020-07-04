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
    let iconName = '';
    switch (wx) {
      case WXType.Sunny:
        iconName = WXIcons.Sunny
        break;
      case WXType.SunnyCloudy:
        iconName = WXIcons.SunnyCloudy
        break;
      case WXType.Cloudy:
        iconName = WXIcons.Cloudy
        break;
      case WXType.CloudyTempRainyOrThunder:
        iconName = WXIcons.CloudyTempRainyOrThunder
        break;
      case WXType.TempRainyOrThunder:
        iconName = WXIcons.TempRainyOrThunder
        break;
    }
    return '/img/weather/wx_icons/' + iconName;
  }

}
