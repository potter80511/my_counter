import { GetWeekWeather } from "src/features/weather/domain/usecases/base/GetWeekWeatherUseCaseItf";
import { IFetcher } from "src/api/Fetcher";
import { WeatherLocationType } from "src/features/weather/domain/model/Location";
import { weekCitiesSeriesNumberData } from 'src/features/weather/domain/data/weekCitiesSeriesNumberData';
import { WeekWeatherDataFactory } from "../factories/WeekWeatherDataFactory";


export class GetWeekWeatherUseCase implements GetWeekWeather.UseCase {
  private fetcher: IFetcher;

  constructor(fetcher: IFetcher) {
    this.fetcher = fetcher;
  }

  execute(
    inputData: GetWeekWeather.InputData,
    callbacks: GetWeekWeather.Callbacks,
  ) {
    const {
      locationType,
      locationName,
      city,
    } = inputData;

    const seriesNumber = locationType === WeatherLocationType.Location
      ? weekCitiesSeriesNumberData.find(item =>
        item.name === city
      ).seriesNumber
      : 'F-D0047-091';

    this.fetcher.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${seriesNumber}?Authorization=CWB-FA978B40-46C9-479E-8875-9902059B75D0&locationName=${locationName}`, {
      onSuccess: result => {
        const weekTemperatureArray = WeekWeatherDataFactory.createWeekDataFromNet(result.records.locations[0].location[0]);
        callbacks.onSuccess({ weekTemperatureArray });
      },
      onError: e => callbacks.onError(e),
    });
  }
}
