import { IFetcher } from 'src/api/Fetcher';
import { GetCurrentDayWeather } from 'src/features/weather/domain/usecases/base/GetCurrentDayWeatherUseCaseItf';
import { WeatherLocationType } from 'src/features/weather/domain/model/Location';
import { CityWeatherDataFactory } from 'src/features/weather/domain/factories/CityWeatherDataFactory';
import { LocationWeatherDataFactory } from 'src/features/weather/domain/factories/LocationWeatherDataFactory';
import { currentDayCitiesSeriesNumberData } from 'src/features/weather/domain/data/allCitiesSeriesNumberData';

export class GetCurrentDayWeatherUseCase implements GetCurrentDayWeather.UseCase {
  private fetcher: IFetcher;

  constructor(fetcher: IFetcher) {
    this.fetcher = fetcher;
  }

  execute(
    inputData: GetCurrentDayWeather.InputData,
    callbacks: GetCurrentDayWeather.Callbacks,
  ) {
    const {
      locationType,
      locationName,
      city,
    } = inputData;

    switch (locationType) {
      case WeatherLocationType.City:
        this.fetcher.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FA978B40-46C9-479E-8875-9902059B75D0&locationName=${locationName}`, {
          onSuccess: result => {
            const currentDayDetails = CityWeatherDataFactory.createCurrentDayDataFromNet(result.records.location[0]);
            callbacks.onSuccess({ currentDayDetails });
          },
          onError: e => callbacks.onError(e),
        });
        break;
      case WeatherLocationType.Location:
        const seriesNumber = currentDayCitiesSeriesNumberData.find(item =>
          item.name === city
        ).seriesNumber;
        
        this.fetcher.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${seriesNumber}?Authorization=CWB-FA978B40-46C9-479E-8875-9902059B75D0&locationName=${locationName}`, {
          onSuccess: result => {
            console.log(result.records)
            const currentDayDetails = LocationWeatherDataFactory.createCurrentDayDataFromNet(result.records.locations[0].location[0]);
            callbacks.onSuccess({ currentDayDetails });
          },
          onError: e => callbacks.onError(e),
        });
        break;
    }
  }
}
