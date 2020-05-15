import React, {useState} from 'react';
import {
  StartStatus,
  StartText,
  TimeSelectChangeType,
} from '../types/counter';
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
  let countingSeconds: string | number = 0;
  let countingMinutes: string | number = 0;

  const myTimer = () => {
    t -= 1;
    countingSeconds = t % 60;
    countingMinutes = Math.floor(t / 60);

    countingSeconds = countingSeconds < 10 ? '0' + countingSeconds : countingSeconds;
    countingMinutes = countingMinutes < 10 ? '0' + countingMinutes : countingMinutes;

    setRemainTotalSeconds(t);
    setViewSeconds(countingSeconds as string);
    setViewMinutes(countingMinutes as string);
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
    let newViewMinutes = '00';

    const numberSeconds = totalSeconds % 60; //餘秒數
    const stringSeconds = String(numberSeconds);
    const numberMinutes = Math.floor(totalSeconds / 60); //餘分
    const stringMinutes = String(numberMinutes);

    newViewSeconds = numberSeconds < 10 ? '0' + stringSeconds : stringSeconds
    setViewSeconds(newViewSeconds);
    newViewMinutes = numberMinutes < 10 ? '0' + stringMinutes : stringMinutes
    setViewMinutes(newViewMinutes);
  };

  const calculateTotalSeconds = (t: number) => {
    calculateSettingsTime(t);
    setRemainTotalSeconds(t);
    setSettingsTotalSeconds(t);
  };

  const onTotalSecondsChange = (t: number) => {
    setSettingsTotalSeconds(t);
    calculateTotalSeconds(t);
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
            // onSecondsChange={onSecondsChange}
            // onMinutesChange={onMinutesChange}
            onTotalSecondsChange={onTotalSecondsChange}
          />
          <p className="time">
            <span>00：</span>
            <span>00：</span>
            <span>{viewMinutes}：</span>
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