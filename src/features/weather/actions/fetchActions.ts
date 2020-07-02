import { ActionType } from 'src/features/weather/reducers/locationsReducer';
import { Dispatch } from 'src/ReduxTypes';
import { FetchingDecoratorFactory } from 'src/domain/usecases/decorators/fetching_decorator/FetchingDecoratorFactory'
import appProvider from 'src/provider/AppProvider';
import { WeatherProvider } from 'src/features/weather/domain/Provider';
import { LocationValue, WeatherLocationType } from 'src/features/weather/domain/model/Location';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';

const getCurrentDayWeatherSuccess = (currentDayDetails: CurrentDayDetails) => ({
  type: ActionType.CurrentDayWeatherLoaded,
  currentDayDetails,
});

export const getCurrentDayWeather = (locationName: LocationValue, locationType: WeatherLocationType,) => async (dispatch: Dispatch) => {
  const useCase = FetchingDecoratorFactory.decorateUseCase(
    WeatherProvider.GetCurrentDayWeatherUseCase,
  );
  appProvider.useCaseHandler.execute(
    useCase,
    {
      dispatch,
      locationName,
      locationType,
    },
    {
      onSuccess: ({ currentDayDetails }) => {
        console.log(currentDayDetails)
        dispatch(getCurrentDayWeatherSuccess(currentDayDetails));
      },
      onError: () => {},
    },
  );
};
