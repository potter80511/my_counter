import React from 'react';
import Head from 'next/head';

export type MetaType = {
  title?: string;
  description?: string;
  keywords?: string;
  ogtitle?: string;
  ogdescription?: string;
  ogtype?: string;
  ogimage?: string;
  ogsitename?: string;
  ogurl?: string;
};

type MetaProps = {
  meta?: MetaType;
};

const Meta = (props: MetaProps) => {
  const {
    meta: {
      title,
      description,
      keywords,
      ogtitle,
      ogdescription,
      ogtype,
      ogimage,
      ogsitename,
      ogurl,
    },
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogtitle} />
      <meta property="og:description" content={ogdescription} />
      <meta property="og:type" content={ogtype} />
      <meta property="og:image" content={ogimage} />
      <meta property="og:site_name" content={ogsitename} />
      <meta property="og:url" content={ogurl} />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <link href="font/untitled-font-1.ttf" as="font" rel="preload" /> */}
      <link href="font/untitled-font-1.woff" as="font" rel="preload" />
      <link href="css/icons.css" rel="stylesheet" />
    </Head>
  );
};

export default Meta;
