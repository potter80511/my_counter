import { WXType } from 'src/features/weather/domain/model/Weather';
import { WXIcons } from 'src/features/weather/domain/model/WXIcons';
import moment, { Moment } from 'moment';

export class WeatherDataFactory {
  static createBackground(wX: WXType): string {
    let photoName = '';
    switch (wX) {
      case WXType.Sunny:
        photoName = 'sunny.jpg'
        break;
      case WXType.SunnyCloudy:
        photoName = 'sunny_cloudy.jpg'
        break;
      case WXType.StrongCloudy:
        photoName = 'strong_cloudy.jpg'
        break;
      case WXType.Cloudy:
        photoName = 'cloudy.jpg'
        break;
      case WXType.CloudySunny:
        photoName = 'cloudy_sunny.jpg'
        break;
      case WXType.CloudyTempRainyOrThunder:
        photoName = 'cloudy_temp_rainy_or_thunder.jpg'
        break;
      case WXType.CloudCloudyTempRain:
        photoName = 'cloud_cloudy_temp_rain.jpg'
        break;
      case WXType.CloudyAfternoonTempRainyOrThunder:
        photoName = 'cloudy_afternoon_temp_rainy_or_thunder.jpg'
        break;
      case WXType.TempRainyOrThunder:
        photoName = 'temp_rainy_or_thunder.jpg'
        break;
      case WXType.AfternoonTempRainyOrThunder:
        photoName = 'afternoon_temp_rainy_or_thunder.jpg'
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
      case WXType.StrongCloudy:
        iconName = WXIcons.StrongCloudy
        break;
      case WXType.Cloudy:
        iconName = WXIcons.Cloudy
        break;
      case WXType.CloudySunny:
        iconName = WXIcons.CloudySunny
        break;
      case WXType.CloudyTempRainyOrThunder:
        iconName = WXIcons.CloudyTempRainyOrThunder
        break;
      case WXType.CloudCloudyTempRain:
        iconName = WXIcons.CloudCloudyTempRain
        break;
      case WXType.CloudTempRain:
        iconName = WXIcons.CloudTempRain
        break;
      case WXType.CloudyAfternoonTempRainyOrThunder:
        iconName = WXIcons.CloudyAfternoonTempRainyOrThunder
        break;
      case WXType.TempRainyOrThunder:
        iconName = WXIcons.TempRainyOrThunder
        break;
      case WXType.AfternoonTempRainyOrThunder:
        iconName = WXIcons.AfternoonTempRainyOrThunder
        break;
    }
    return '/img/weather/wx_icons/' + iconName + '.png';
  }

  static createTemperature(t: string, noUnit?: boolean): string {
    const result = noUnit ? String(Math.round(Number(t))) : Math.round(Number(t)) + '˚';
    return result;
  }

  static createEachHour(time: Moment): string {
    const hour = moment(time).format('HH');
    const newHour = String(Number(hour)) + '時';
    return newHour;
  }

}
