import React, { useEffect, useState } from 'react';
import Layout from 'src/components/Layout';
import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import { SwitchButtonType } from 'src/features/weather/domain/model/ToolsTypes';
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
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(122 + 182);  //  122 是title到頂部的距離
  const [openedLocationIndex, setOpenedLocationIndex] = useState<number | null>(2);
  const [locationSpread, setLocationSpread] = useState<boolean>(false);
  const [temperatureType, setTemperatureType] = useState<SwitchButtonType>(SwitchButtonType.Celsius);

  const onSpreadOut = (on: boolean, tlY: number, spreadIndex: number | null) => {
    setLocationSpread(on);
    setTranslateY(tlY);
    setOpenedLocationIndex(spreadIndex);
  };

  const onSwitchTemperatureType = (value: SwitchButtonType) => {
    setTemperatureType(value);
  }

  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  return (
    <Layout
      id={'weather'}
      meta={meta}
      className="flex-center"
    >
      <div
        className="weather wrap"
        style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
      >
        <h1 className="main-title">Weather</h1>
        <Locations
          spread={locationSpread}
          translateY={translateY}
          spreadOut={(on, tlY, spreadIndex) => onSpreadOut(on, tlY, spreadIndex)}
          openedLocationIndex={openedLocationIndex}
        />
        <Tools
          temperatureType={temperatureType}
          onSwitchTemperatureType={onSwitchTemperatureType}
        />
      </div>
    </Layout>
  );
};

export default weather;
