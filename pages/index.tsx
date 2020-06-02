import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';

// import '@styles/index.scss';

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
    <Layout
      id={'index'}
      meta={meta}
    >
      <div id='counter'>
        sdf
      </div>
    </Layout>
  );
};

export default index;
