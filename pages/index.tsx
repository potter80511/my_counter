import React from 'react';
import Layout from '../components/Layout';
import '@styles/index.scss';

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
        <h1 className="title">My Counter</h1>
        <div className="content">
          <p className="time">
            <span>00：</span>
            <span>00：</span>
            <span>00</span>
          </p>
          <div className="buttons">
            <button className="cancel">Cancel</button>
            <button className="start">Start</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;