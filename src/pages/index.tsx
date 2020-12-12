import React from 'react';
import Layout from 'src/components/Layout';
import IndexLink from 'src/features/index/IndexLink';

import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

import WeatherSvg from 'src/components/icons/WeatherSvg';
import InfinitySvg from 'src/components/icons/InfinitySvg';

import '@styles/features/index.scss';

const meta = {
  title: "Johnny's App",
  description: "Johnny's App",
  keywords: "Johnny's App",
  ogtitle: "Johnny's App",
  ogdescription: "Johnny's App",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App",
  ogurl: '',
};

const index = () => {
  return (
    <Layout id="index" meta={meta} className="flex-center">
      <div className="index">
        <h2>Johnny's App</h2>
        <nav>
          <IndexLink
            url="/counter"
            className="counter"
            icon={faStopwatch}
            tip="Counter"
            tipColor="#0a8a77"
          />
          <IndexLink
            url="/weather"
            className="weather"
            tip="Weather"
            tipColor="#daae2b"
          >
            <WeatherSvg />
          </IndexLink>
          <IndexLink
            url="/metronome"
            className="metronome"
            tip="Metronome"
            tipColor="#038caf"
          >
            <InfinitySvg />
          </IndexLink>
        </nav>
      </div>
    </Layout>
  );
};

export default index;
