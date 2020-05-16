import React, {useState} from 'react';
import {
  StartStatus,
  StartText,
  TimeSelectChangeType,
} from '../types/counter';
import Layout from '../components/Layout';
import TimeSettingTools from '../components/index/TimeSettingTools';
import Alert from '../components/modals/Alert';
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

  const [settingsSeconds, setSettingsSeconds] = useState<number>(0);
  const [settingsMinutes, setSettingsMinutes] = useState<number>(0);
  const [settingsHours, setSettingsHours] = useState<number>(0);

  const [viewSeconds, setViewSeconds] = useState<string>('00');
  const [viewMinutes, setViewMinutes] = useState<string>('00');
  const [viewHours, setViewHours] = useState<string>('00');

  const [timeIsSet, setTimeIsSet] = useState<boolean>(false);
  const [startStatus, setStartStatus] = useState<string>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  const [showSettingAlert, setShowSettingAlert] = useState<boolean>(false);

  let t: number = remainTotalSeconds;
  let countingSeconds: string | number = 0;
  let countingMinutes: string | number = 0;
  let countingHours: string | number = 0;

  const myTimer = () => {
    t -= 1;
    countingSeconds = t % 60;
    countingMinutes = Math.floor(t / 60);
    countingMinutes = countingMinutes > 59 ? countingMinutes % 60 : countingMinutes;

    countingHours = Math.floor(t / 3600);

    countingSeconds = countingSeconds < 10 ? '0' + countingSeconds : countingSeconds;
    countingMinutes = countingMinutes < 10 ? '0' + countingMinutes : countingMinutes;
    countingHours = countingHours < 10 ? '0' + countingHours : countingHours;

    setRemainTotalSeconds(t);
    setViewSeconds(countingSeconds as string);
    setViewMinutes(countingMinutes as string);
    setViewHours(countingHours as string);
    if (t === 0) {
      setStartStatus(StartStatus.stop);
      setStartText(StartText.start);
      
      reset();

      setRemainTotalSeconds(settingsTotalSeconds);
      setTimeIsSet(false);
      return clearInterval(counting);
    }
  };

  const startCounting = () => {
    if (remainTotalSeconds < 1) {
      setShowSettingAlert(true);
      return;
    }
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
    reset();
    setRemainTotalSeconds(settingsTotalSeconds);
    setStartStatus(StartStatus.stop);
    setStartText(StartText.start);
  };

  const reset = () => {
    calculateViewTimes(settingsSeconds, TimeSelectChangeType.seconds);
    calculateViewTimes(settingsMinutes, TimeSelectChangeType.minutes);
    calculateViewTimes(settingsHours, TimeSelectChangeType.hour);
  }

  const calculateSettingsTime = (totalSeconds: number, type: string) => {
    //一分鐘60秒 60分鐘3600秒(1小時) 24小時86400秒
    let newViewTimes = '00';
    let numberTimes = 0;
    let stringTimes = '00';

    switch (type) {
      case TimeSelectChangeType.seconds:
        numberTimes = totalSeconds % 60; //餘分

        stringTimes = String(numberTimes);
        newViewTimes = numberTimes < 10 ? '0' + stringTimes : stringTimes
        setViewSeconds(newViewTimes);
        break;
      case TimeSelectChangeType.minutes:
        numberTimes = Math.floor(totalSeconds / 60); //餘分
        numberTimes = numberTimes > 59 ? numberTimes % 60 : numberTimes;

        stringTimes = String(numberTimes);
        newViewTimes = numberTimes < 10 ? '0' + stringTimes : stringTimes
        setViewMinutes(newViewTimes);
        break;
      case TimeSelectChangeType.hour:
        numberTimes = Math.floor(totalSeconds / 3600); //餘小時
        stringTimes = String(numberTimes);
        newViewTimes = numberTimes < 10 ? '0' + stringTimes : stringTimes
        setViewHours(newViewTimes);
        break;
    }
  };

  const calculateTotalSeconds = (t: number, type: string) => {
    calculateSettingsTime(t, type);
    
    setRemainTotalSeconds(t);
    setSettingsTotalSeconds(t);
  };

  const onTotalSecondsChange = (t: number, type: string) => {
    setSettingsTotalSeconds(t);
    calculateTotalSeconds(t, type);
  };

  const calculateViewTimes = (t: number, type: string) => {
    let newViewTimes = '00';
    const stringTimes = String(t);
    newViewTimes = t < 10 ? '0' + stringTimes : stringTimes
    switch (type) {
      case TimeSelectChangeType.seconds:
        setViewSeconds(newViewTimes);
        break;
      case TimeSelectChangeType.minutes:
        setViewMinutes(newViewTimes);
        break;
      case TimeSelectChangeType.hour:
        setViewHours(newViewTimes);
        break;
    }
  }

  const onSettingsChange = (t: number, type: string) => {
    switch (type) {
      case TimeSelectChangeType.seconds:
        setSettingsSeconds(t);
        break;
      case TimeSelectChangeType.minutes:
        setSettingsMinutes(t);
        break;
      case TimeSelectChangeType.hour:
        setSettingsHours(t);
        break;
    }
  };

  const closeSettingAlert = () => {
    setShowSettingAlert(false);
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
          { startStatus === StartStatus.stop ? (
            <TimeSettingTools
              timeIsSet={timeIsSet}
              seconds={Number(viewSeconds)}
              minutes={Number(viewMinutes)}
              hours={Number(viewHours)}
              onTotalSecondsChange={(s, type) => onTotalSecondsChange(s, type)}
              onSettingsChange={(t, type) => onSettingsChange(t, type)}
            />
          ) : (
            <p className="time">
              <span>{viewHours}：</span>
              <span>{viewMinutes}：</span>
              <span>{viewSeconds}</span>
            </p>
          )}
          <div className="buttons">
            <button
              className="cancel"
              onClick={cancelCounting}
            >
              取消
            </button>
            <button
              className={stopClass}
              onClick={startCounting}
            >
              {startText}
            </button>
          </div>
          <div>剩餘{remainTotalSeconds}</div>
          <div>設定{settingsTotalSeconds}</div>
        </div>
        { showSettingAlert && (
          <Alert
            id="please-set-time"
            className="please-set-time"
            message="請設定時間！"
            onClose={closeSettingAlert}
          />
        )}
      </div>
    </Layout>
  );
};

export default index;