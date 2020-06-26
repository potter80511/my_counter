import React, { useEffect, useState } from 'react';
import Layout from 'src/components/Layout';
import Locations from 'src/features/weather/components/locations/Locations';
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
  const [locationSpread, setLocationSpread] = useState<boolean>(false);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  return (
    <Layout
      id={'weather'}
      meta={meta}
      className="flex-center"
      minHeight={false}
    >
      <div
        className="weather wrap"
        style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
      >
        <h1 className="main-title">Weather</h1>
        <Locations
          spread={locationSpread}
          spreadOut={(on) => setLocationSpread(on)}
        />
      </div>
    </Layout>
  );
};

export default weather;
