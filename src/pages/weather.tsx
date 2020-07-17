import React from 'react';
import Layout from 'src/components/Layout';
import WeatherContainer from 'src/features/weather/WeatherContainer';
import '@styles/features/weather/weather.scss';

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
    <Layout
      id={'weather'}
      meta={meta}
      className="flex-center"
    >
      <WeatherContainer/>
    </Layout>
  );
};

export default weather;
