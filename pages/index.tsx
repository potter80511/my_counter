import React from 'react';
import Link from 'next/link';
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
      className="flex-center"
    >
      <div className='index'>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/counter">Counter</Link>
        </nav>
      </div>
    </Layout>
  );
};

export default index;
