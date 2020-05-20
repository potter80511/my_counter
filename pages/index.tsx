import React, {useState} from 'react';
import {
  StartStatus,
  StartText,
  TimeSelectChangeType,
  CounterAlertType,
} from '../types/counter';
import Layout from '../components/Layout';
import TimeSettingTools from '../components/index/TimeSettingTools';
import Alert, { AlertProps } from '../components/modals/Alert';
import ReactHowler from 'react-howler';
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

  const [prevSeconds, setPrevSeconds] = useState<number>(0);
  const [prevMinutesSeconds, setPrevMinutesSeconds] = useState<number>(0);
  const [prevHoursSeconds, setPrevHoursSeconds] = useState<number>(0);

  const [viewSeconds, setViewSeconds] = useState<string>('00');
  const [viewMinutes, setViewMinutes] = useState<string>('00');
  const [viewHours, setViewHours] = useState<string>('00');

  const [timeIsSet, setTimeIsSet] = useState<boolean>(false);
  const [startStatus, setStartStatus] = useState<string>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  const [alertDatas, setAlertDatas] = useState<AlertProps>({message: ''});
  const [showSettingAlert, setShowSettingAlert] = useState<boolean>(false);
  const [showSettingAlertAnimate, setShowSettingAlertAnimate] = useState<boolean>(false);
  const [showTotalSeconds, setShowTotalSeconds] = useState<boolean>(false);

  const [timesUp, setTimesUp] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');

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
      onShowSettingAlert(CounterAlertType.timesUp);
      onRing(true);

      reset();

      setRemainTotalSeconds(settingsTotalSeconds);
      setTimeIsSet(false);
      return clearInterval(counting);
    }
  };

  const startCounting = () => {
    if (remainTotalSeconds < 1) {
      onShowSettingAlert(CounterAlertType.pleaseSetTime);
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
    calculateSettingsTime(settingsTotalSeconds);
  }

  const calculateSettingsTime = (totalSeconds: number) => {
    //一分鐘60秒 60分鐘3600秒(1小時) 24小時86400秒
    let newViewSeconds = '00';
    let numberSeconds = 0;
    let stringSeconds = '00';
    numberSeconds = totalSeconds % 60; //餘分

    stringSeconds = String(numberSeconds);
    newViewSeconds = numberSeconds < 10 ? '0' + stringSeconds : stringSeconds
    setViewSeconds(newViewSeconds);

    let newViewMinutes = '00';
    let numberMinutes = 0;
    let stringMinutes = '00';

    numberMinutes = Math.floor(totalSeconds / 60); //餘分
    numberMinutes = numberMinutes > 59 ? numberMinutes % 60 : numberMinutes;

    stringMinutes = String(numberMinutes);
    newViewMinutes = numberMinutes < 10 ? '0' + stringMinutes : stringMinutes
    setViewMinutes(newViewMinutes);

    let newViewHours = '00';
    let numberHours = 0;
    let stringHours = '00';

    numberHours = Math.floor(totalSeconds / 3600); //餘小時
    stringHours = String(numberHours);
    newViewHours = numberHours < 10 ? '0' + stringHours : stringHours
    setViewHours(newViewHours);
  };

  const calculateTotalSeconds = (t: number) => {
    calculateSettingsTime(t);

    setRemainTotalSeconds(t);
    setSettingsTotalSeconds(t);
  };

  const onTotalSecondsChange = (t: number, type: string) => {
    setSettingsTotalSeconds(t);
    calculateTotalSeconds(t);
  };

  const onPrevTimeChange = (t: number, type: string) => {
    switch (type) {
      case TimeSelectChangeType.seconds:
        setPrevSeconds(t);
        break;
      case TimeSelectChangeType.minutes:
        setPrevMinutesSeconds(t);
        break;
      case TimeSelectChangeType.hour:
        setPrevHoursSeconds(t);
        break;
    }
  };

  const onShowSettingAlert = (type: string) => {
    setShowSettingAlert(true);
    setShowSettingAlertAnimate(true);
    setAlertType(type);

    switch (type) {
      case CounterAlertType.pleaseSetTime:
        setAlertDatas({
          message: '請設定時間再開始計時！',
        });
        break;
      case CounterAlertType.timesUp:
        setAlertDatas({
          message: '時間到！',
        });
        break;
    };
  };

  const closeSettingAlert = () => {
    setShowSettingAlertAnimate(false);
    setTimeout(() => {
      setShowSettingAlert(false);
    }, 400);
  };

  const onShowTotalSeconds = () => {
    const newShow = !showTotalSeconds;
    setShowTotalSeconds(newShow);
  };

  const onRing = (status: boolean) => {
    setTimesUp(status);
  };

  const alertOk = (type: string) => {
    switch (type) {
      case CounterAlertType.timesUp:
        onRing(false);
        break;
    }
  }

  const stopClass = startStatus === StartStatus.start ? 'pause' : 'start';
  return (
    <Layout
      id={'index'}
      meta={meta}
    >
      <div id='counter'>
        <button className="show_total_seconds" onClick={onShowTotalSeconds}>show totalSeconds</button>
        <ReactHowler
          className="howler"
          loop={true}
          preload={true}
          src='http://yss.yisell.com/yisell/ybys2018050819052088/sound/yisell_sound_2014040221463941553_88366.mp3'
          playing={timesUp}
        />
        <h1 className="title">My Counter</h1>
        <div className="content">
          <TimeSettingTools
            timeIsSet={timeIsSet}
            settingsTotalSeconds={settingsTotalSeconds}
            seconds={Number(viewSeconds)}
            minutes={Number(viewMinutes)}
            hours={Number(viewHours)}
            prevSeconds={prevSeconds}
            prevMinutesSeconds={prevMinutesSeconds}
            prevHoursSeconds={prevHoursSeconds}
            onTotalSecondsChange={(s, type) => onTotalSecondsChange(s, type)}
            onPrevTimeChange={(s, type) => onPrevTimeChange(s, type)}
          />
          { startStatus !== StartStatus.stop && (
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
          { showTotalSeconds && (
            <div className="total_seconds">
              <div>剩餘總秒數：{remainTotalSeconds}</div>
              <div>設定總秒數：{settingsTotalSeconds}</div>
            </div>
          )}
        </div>
        { showSettingAlert && (
          <Alert
            message={alertDatas.message}
            show={showSettingAlertAnimate}
            onClose={closeSettingAlert}
            yes={() => alertOk(alertType)}
          />
        )}
      </div>
    </Layout>
  );
};

export default index;