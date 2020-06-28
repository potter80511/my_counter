import {
  UseCaseInputData,
  UseCaseOutputData,
  UseCaseCallbacks,
  UseCase as BaseUseCase,
} from 'src/domain/usecases/base/UseCase';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import { LocationName, WeatherLocationType } from 'src/features/weather/domain/model/LocationName';

export namespace GetCurrentDayWeather {
  export interface InputData extends UseCaseInputData {
    locationName: LocationName;
    locationType: WeatherLocationType;
  }

  export interface OutputData extends UseCaseOutputData {
    currentDayDetails: CurrentDayDetails;
  }

  export type Callbacks = UseCaseCallbacks<OutputData>;

  export type UseCase = BaseUseCase<InputData, OutputData>;
}
