import {
  UseCaseInputData,
  UseCaseOutputData,
  UseCaseCallbacks,
  UseCase as BaseUseCase,
} from 'src/domain/usecases/base/UseCase';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import { LocationValue, WeatherLocationType } from 'src/features/weather/domain/model/Location';

export namespace GetCurrentDayWeather {
  export interface InputData extends UseCaseInputData {
    locationName: LocationValue;
    locationType: WeatherLocationType;
  }

  export interface OutputData extends UseCaseOutputData {
    currentDayDetails: CurrentDayDetails;
  }

  export type Callbacks = UseCaseCallbacks<OutputData>;

  export type UseCase = BaseUseCase<InputData, OutputData>;
}
