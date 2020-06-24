import React from 'react';
import Layout from 'src/components/Layout';
import Locations from 'src/features/weather/components/locations/Locations';

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
    <Layout
      id={'weather'}
      meta={meta}
      className="flex-center"
    >
      <div className="weather wrap">
        <h1 className="main-title">Weather</h1>
        <Locations/>
      </div>
    </Layout>
  );
};

export default weather;
