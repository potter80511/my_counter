import React, {useState} from 'react';
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
  const [totalTime, setTotalTime] = useState<number>(3600);

  // let counting = 
  
  const startCounting = () => {
    let tictock = totalTime;
    setInterval(() => {
      tictock = tictock - 1;
      setTotalTime(tictock);
    }, 1000);
  };
  const myTimer = () => {
    let tictock = totalTime;
    tictock = tictock - 1;
    setTotalTime(tictock);
  };
  const cancelCounting = () => {
    window.clearInterval();
  };
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
          <div>{totalTime}</div>
          <div className="buttons">
            <button
              className="cancel"
              onClick={() => cancelCounting}
            >
              Cancel
            </button>
            <button
              className="start"
              onClick={startCounting}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;