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

let counting;

enum StartStatus {
  start = 'start',
  pause = 'pause',
  stop = 'stop',
}
enum StartText {
  start = '開始',
  continue = '繼續',
  pause = '暫停',
}

const index = () => {
  const [totalTime, setTotalTime] = useState<number>(30);
  const [startStatus, setStartStatus] = useState<string>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  let t: number = totalTime;

  const myTimer = () => {
    t -= 1;
    setTotalTime(t);
    if (t === 0) {
      setStartStatus(StartStatus.stop);
      setStartText(StartText.start);
      return clearInterval(counting);
    }
  };

  const startCounting = () => {
    switch (startStatus) {
      case StartStatus.start: //按暫停
        clearInterval(counting);
        setStartStatus(StartStatus.pause);
        setStartText(StartText.continue);
        break;
      case StartStatus.pause: //按繼續
        setStartStatus(StartStatus.start);
        setStartText(StartText.pause);
        counting = setInterval(myTimer, 1000);
        break;
      case StartStatus.stop: //按開始
        setStartStatus(StartStatus.start);
        setStartText(StartText.pause);
        counting = setInterval(myTimer, 1000);
        break;
    }
  };

  const cancelCounting = () => {
    clearInterval(counting);
    setTotalTime(30);
    setStartStatus(StartStatus.stop);
    setStartText(StartText.start);
  };

  const stopClass = startStatus === StartStatus.start ? 'pause' : 'start';
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
              onClick={cancelCounting}
            >
              Cancel
            </button>
            <button
              className={stopClass}
              onClick={startCounting}
            >
              {startText}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;