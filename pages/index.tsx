import React, {useState} from 'react';
import {
  StartStatus,
  StartText,
  TimeSelectChangeType,
} from '../types/counter';
import Layout from '../components/Layout';
import TimeSettingTools from '../components/index/TimeSettingTools';
import RingToneSelector from '../components/index/RingToneSelector';
import RingToneSelectModal from '../components/index/RingToneSelectModal';
import Alert, { AlertProps } from '../components/modals/Alert';
import TimesUpAlertModal from '../components/index/TimesUpAlertModal';
import ReactHowler from 'react-howler';
import { CSSTransition } from 'react-transition-group';
import '@styles/index.scss';
import '@styles/transition_group.scss';

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

  const [startStatus, setStartStatus] = useState<string>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  const [showSettingAlert, setShowSettingAlert] = useState<boolean>(false);
  const [showTimesUpAlert, setShowTimesUpAlert] = useState<boolean>(false);
  const [showTotalSeconds, setShowTotalSeconds] = useState<boolean>(false);
  const [showViewTimes, setShowViewTimes] = useState<boolean>(false);
  const [showRingToneSelect, setShowRingToneSelect] = useState<boolean>(false);

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
      setShowTimesUpAlert(true);
      onRing(true);

      setRemainTotalSeconds(settingsTotalSeconds);
      return clearInterval(counting);
    }
  };

  const startCounting = () => {
    if (remainTotalSeconds < 1) {
      onShowSettingAlert();
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
        setShowViewTimes(true);
        counting = setInterval(myTimer, 1000);
        break;
    }
  };

  const cancelCounting = () => {
    clearInterval(counting);
    setShowViewTimes(false);
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

  const onShowSettingAlert = () => {
    setShowSettingAlert(true);
  };

  const onShowTotalSeconds = () => {
    const newShow = !showTotalSeconds;
    setShowTotalSeconds(newShow);
  };

  const onRing = (status: boolean) => {
    setTimesUp(status);
  };

  const onCloseTimesUpAlert = () => {
    setShowTimesUpAlert(false);
    reset();
  };

  const alertOk = () => {
    setShowSettingAlert(false);
    setShowViewTimes(false);
  }

  const onTimesUpOk = () => {
    onCloseTimesUpAlert();
    setShowViewTimes(false);
    onRing(false);
  };

  const onRecount = () => {
    onRing(false);
    startCounting();
    onCloseTimesUpAlert();
  };

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
          src='ring.mp3'
          playing={timesUp}
        />
        <h1 className="title">Counter</h1>
        <div className="content">
          <TimeSettingTools
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
          <CSSTransition
            in={showViewTimes}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            <p className="time">
              <span>{viewHours}：</span>
              <span>{viewMinutes}：</span>
              <span>{viewSeconds}</span>
            </p>
          </CSSTransition>
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
        <RingToneSelector
          onClick={() => setShowRingToneSelect(true)}
        />
        <RingToneSelectModal
          show={showRingToneSelect}
          onCancel={() => setShowRingToneSelect(false)}
        />
        <Alert
          message={'請設定時間再開始計時！'}
          show={showSettingAlert}
          yes={alertOk}
        />
        <TimesUpAlertModal
          message={'時間到'}
          show={showTimesUpAlert}
          yes={onTimesUpOk}
          onRecount={onRecount}
        />
      </div>
    </Layout>
  );
};

export default index;