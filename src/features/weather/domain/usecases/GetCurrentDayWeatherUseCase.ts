import { IFetcher } from 'src/api/Fetcher';
import { GetCurrentDayWeather } from 'src/features/weather/domain/usecases/base/GetCurrentDayWeatherUseCaseItf';
import { WeatherLocationType } from 'src/features/weather/domain/model/Location';
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
      inputIndex,
      locationType,
      locationName,
      city,
    } = inputData;
    const showCity = locationType === WeatherLocationType.Location ? true : false;

    const seriesNumber = locationType === WeatherLocationType.Location
      ? currentDayCitiesSeriesNumberData.find(item =>
        item.name === city
      ).seriesNumber
      : 'F-D0047-089';
    this.fetcher.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${seriesNumber}`, {
      onSuccess: result => {
        const currentDayDetails = LocationWeatherDataFactory.createCurrentDayDataFromNet(
          result.records.locations[0].location[0],
          city,
          showCity,
        );
        callbacks.onSuccess({
          currentDayDetails: {
            ...currentDayDetails,
            inputIndex,
            locationType,
            city,
          }
        });
      },
      onError: e => callbacks.onError(e),
    }, {
      params: {
        Authorization: 'CWB-FA978B40-46C9-479E-8875-9902059B75D0',
        locationName,
      },
    });
  }
}
