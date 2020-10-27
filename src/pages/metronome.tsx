import React from 'react';
import Layout from 'src/components/Layout';
import MetronomeContainer from 'src/features/metronome/MetronomeContainer';

const meta = {
  title: "Johnny's App - 節拍器 Metronome",
  description: "Johnny's App - 節拍器 Metronome",
  keywords: "Johnny's App - 節拍器 Metronome",
  ogtitle: "Johnny's App - 節拍器 Metronome",
  ogdescription: "Johnny's App - 節拍器 Metronome",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App - 節拍器 Metronome",
  ogurl: '',
};

const metronome = () => {
  return (
    <Layout id="metronome" meta={meta} className="flex-center">
      <MetronomeContainer />
    </Layout>
  );
};

export default metronome;
