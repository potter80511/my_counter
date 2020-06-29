import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from 'src/Store';
import {
  temperatureTypeSelector,
} from 'src/features/weather/selectors';
import {
  switchTemperatureType,
} from 'src/features/weather/actions/toolsAction';

import Layout from 'src/components/Layout';
import WeatherContainer from 'src/features/weather/WeatherContainer';
import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import '@styles/features/weather/weather.scss';

// import '@styles/index.scss';

const meta = {
  title: "Johnny's App - Weather",
  description: "Johnny's App - Weather",
  keywords: "Johnny's App - Weather",
  ogtitle: "Johnny's App - Weather",
  ogdescription: "Johnny's App - Weather",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App - Weather",
  ogurl: '',
};

const weather = () => {
  return (
    <Provider store={store}>
      <Layout
        id={'weather'}
        meta={meta}
        className="flex-center"
      >
        <WeatherContainer/>
      </Layout>
    </Provider>
  );
};

export default weather;
