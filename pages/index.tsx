import React, {useState} from 'react';
import {StartStatus, StartText} from '../types/counter';
import Layout from '../components/Layout';
import TimeSettingTools from '../components/index/TimeSettingTools';
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

const index = () => {
  const [remainTotalSeconds, setRemainTotalSeconds] = useState<number>(0);
  const [settingsTotalSeconds, setSettingsTotalSeconds] = useState<number>(0);

  const [viewSeconds, setViewSeconds] = useState<string>('00');
  const [viewMinutes, setViewMinutes] = useState<string>('00');

  const [timeIsSet, setTimeIsSet] = useState<boolean>(false);
  const [startStatus, setStartStatus] = useState<string>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  let t: number = remainTotalSeconds;
  let countingSeconds;

  const myTimer = () => {
    t -= 1;
    countingSeconds = t < 10 ? '0' + t : t;
    setRemainTotalSeconds(t);
    setViewSeconds(countingSeconds);
    if (t === 0) {
      setStartStatus(StartStatus.stop);
      setStartText(StartText.start);
      calculateSettingsTime(settingsTotalSeconds);
      setRemainTotalSeconds(settingsTotalSeconds);
      setTimeIsSet(false);
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
    calculateSettingsTime(settingsTotalSeconds);
    setRemainTotalSeconds(settingsTotalSeconds);
    setStartStatus(StartStatus.stop);
    setStartText(StartText.start);
  };

  const calculateSettingsTime = (totalSeconds: number) => {
    //一分鐘60秒 60分鐘3600秒(1小時) 24小時86400秒
    let newViewSeconds = '00';
    const numberSeconds = totalSeconds % 60; //餘秒數
    const stringSeconds = String(numberSeconds);
    newViewSeconds = numberSeconds < 10 ? '0' + stringSeconds : stringSeconds
    setViewSeconds(newViewSeconds);
  };

  let settingsSeconds = 0;
  let settingsMinutes = 0;

  const calculateTotalSeconds = () => {
    const newTotalSeconds = settingsSeconds + (settingsMinutes * 60);
    calculateSettingsTime(newTotalSeconds);
    setRemainTotalSeconds(newTotalSeconds);
    setSettingsTotalSeconds(newTotalSeconds);
  };

  const onSecondsChange = (s: string) => {
    const secondsNumber = Number(s);

    settingsSeconds = secondsNumber;
    calculateTotalSeconds();
    setTimeIsSet(true);
  };
  const onMinutesChange = (m: string) => {
    console.log(m)
    // const secondsNumber = Number(s);

    // settingsSeconds = secondsNumber;
    // calculateTotalSeconds();
    // setTimeIsSet(true);
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
          <TimeSettingTools
            timeIsSet={timeIsSet}
            seconds={Number(viewSeconds)}
            minutes={Number(viewMinutes)}
            onSecondsChange={onSecondsChange}
            onMinutesChange={onMinutesChange}
          />
          <p className="time">
            <span>00：</span>
            <span>00：</span>
            <span>{viewSeconds}</span>
          </p>
          <div>剩餘{remainTotalSeconds}</div>
          <div>設定{settingsTotalSeconds}</div>
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