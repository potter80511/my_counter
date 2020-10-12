import React from 'react';
import Layout from 'src/components/Layout';
import WeatherContainer from 'src/features/weather/WeatherContainer';
import '@styles/features/weather/weather.scss';

const meta = {
  title: "Johnny's App - 天氣 Weather",
  description: "Johnny's App - 天氣 Weather",
  keywords: "Johnny's App - 天氣 Weather",
  ogtitle: "Johnny's App - 天氣 Weather",
  ogdescription: "Johnny's App - 天氣 Weather",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App - 天氣 Weather",
  ogurl: '',
};

const weather = () => {
  return (
    <Layout id={'weather'} meta={meta} className="flex-center">
      <WeatherContainer />
    </Layout>
  );
};

export default weather;
