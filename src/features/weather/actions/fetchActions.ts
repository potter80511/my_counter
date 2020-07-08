import { ActionType } from 'src/features/weather/reducers/locationsReducer';
import { Dispatch } from 'src/ReduxTypes';
import { FetchingDecoratorFactory } from 'src/domain/usecases/decorators/fetching_decorator/FetchingDecoratorFactory'
import appProvider from 'src/provider/AppProvider';
import { WeatherProvider } from 'src/features/weather/domain/Provider';
import { LocationValue, WeatherLocationType, TaiwanCities } from 'src/features/weather/domain/model/Location';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';

const getCurrentDayWeatherSuccess = (currentDayDetails: CurrentDayDetails, inputIndex: number) => ({
  type: ActionType.CurrentDayWeatherLoaded,
  data: currentDayDetails,
  inputIndex,
});

export const getCurrentDayWeather = (locationName: LocationValue, locationType: WeatherLocationType, inputIndex: number, city?: TaiwanCities) => async (dispatch: Dispatch) => {
  const useCase = FetchingDecoratorFactory.decorateUseCase(
    WeatherProvider.GetCurrentDayWeatherUseCase,
  );
  appProvider.useCaseHandler.execute(
    useCase,
    {
      dispatch,
      inputIndex,
      locationName,
      locationType,
      city,
    },
    {
      onSuccess: ({ currentDayDetails }) => {
        // console.log(currentDayDetails)
        dispatch(getCurrentDayWeatherSuccess(currentDayDetails, inputIndex));
      },
      onError: () => {},
    },
  );
};

export const getWeekWeather = (locationName: LocationValue, locationType: WeatherLocationType, city?: TaiwanCities) => async (dispatch: Dispatch) => {
  const useCase = FetchingDecoratorFactory.decorateUseCase(
    WeatherProvider.GetWeekWeatherUseCase,
  );
  appProvider.useCaseHandler.execute(
    useCase,
    {
      dispatch,
      locationName,
      locationType,
      city,
    },
    {
      onSuccess: ({ weekTemperatureArray }) => {
        console.log(weekTemperatureArray)
        // dispatch(getWeekWeatherSuccess(weekTemperatureArray));
      },
      onError: () => {},
    },
  );
}
