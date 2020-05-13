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
  const [totalTime, setTotalTime] = useState<number>(30);

  // let counting =
  let t = totalTime;

  const startCounting = () => {
    const myTimer = () => {
      t -= 1;
      setTotalTime(t);
      console.log(t)
      if (t === 0) {
        return clearInterval(counting);
      }
    };
    const counting = setInterval(myTimer, 1000);
  };

  const cancelCounting = () => {
    return clearInterval();
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