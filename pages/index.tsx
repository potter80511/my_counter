import React from 'react';
import Layout from '../components/Layout';

const meta = {
  title: 'My Counter',
  description: 'My Counter',
  keywords: 'My Counter',
  ogtitle: 'My Counter',
  ogdescription: 'My Counter',
  ogtype: 'website',
  ogimage: '',
  ogsitename: 'My Counter',
  ogurl: '',
};

const index = () => {
  return (
    <Layout
      id={'index'}
      meta={meta}
    >
      <div id='counter'>
        <h1 className="sub">My Counter</h1>
      </div>
    </Layout>
  );
};

export default index;