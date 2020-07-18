import {
  UseCaseInputData,
  UseCaseOutputData,
  UseCaseCallbacks,
  UseCase as BaseUseCase,
} from 'src/domain/usecases/base/UseCase';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import { LocationValue, WeatherLocationType, TaiwanCities } from 'src/features/weather/domain/model/Location';

export namespace GetCurrentDayWeather {
  export interface InputData extends UseCaseInputData {
    inputIndex: number;
    locationName: LocationValue;
    locationType: WeatherLocationType;
    city?: TaiwanCities;
  }

  export interface OutputData extends UseCaseOutputData {
    currentDayDetails: CurrentDayDetails;
  }

  export type Callbacks = UseCaseCallbacks<OutputData>;

  export type UseCase = BaseUseCase<InputData, OutputData>;
}
