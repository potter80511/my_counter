import React from 'react';
import Link from 'next/link';
import Layout from 'src/components/Layout';

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
    <Layout id={'index'} meta={meta} className="flex-center">
      <div className="index">
        <h2>Johnny's App</h2>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/counter">
            <a>Counter</a>
          </Link>
          <Link href="/weather">
            <a>Weather</a>
          </Link>
        </nav>
      </div>
    </Layout>
  );
};

export default index;
