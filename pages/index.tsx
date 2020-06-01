import React, {useState, useEffect} from 'react';
import {
  StartStatus,
  StartText,
  TimeSelectChangeType,
} from '../types/counter';
import Layout from '../components/Layout';
import ViewTimes from '../components/index/ViewTimes';
import TimeSettingTools from '../components/index/TimeSettingTools';
import RingToneSelector from '../components/index/RingToneSelector';
import RingToneSelectModal from '../components/index/RingToneSelectModal';
import Alert from '../components/modals/Alert';
import TimesUpAlertModal from '../components/index/TimesUpAlertModal';
import { RingToneType } from '../types/ring_tone';
import { CounterCookie } from '../types/counterCookie';

import useSound from 'use-sound';
import {Howl, Howler} from 'howler';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useCookies } from 'react-cookie';

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
  const [cookies, setCookie] = useCookies(['counter_settings']);

  const onSetCookie = (settings: CounterCookie) => {
    setCookie('counter_settings', settings);
  };
  const counter_settings = cookies.counter_settings ? cookies.counter_settings : {};

  const presetTotalSeconds = counter_settings && counter_settings.hasOwnProperty('settingTimes') ? counter_settings.settingTimes : 0;

  const presetSeconds = counter_settings && counter_settings.hasOwnProperty('seconds') ? counter_settings.seconds : 0;
  const presetMinutesSeconds = counter_settings && counter_settings.hasOwnProperty('minutesSeconds') ? counter_settings.minutesSeconds : 0;
  const presetHoursSeconds = counter_settings && counter_settings.hasOwnProperty('hoursSeconds') ? counter_settings.hoursSeconds : 0;

  const presetViewSeconds = counter_settings && counter_settings.hasOwnProperty('viewSeconds') ? counter_settings.viewSeconds : '00';
  const presetViewMinutes = counter_settings && counter_settings.hasOwnProperty('viewMinutes') ? counter_settings.viewMinutes : '00';
  const presetViewHours = counter_settings && counter_settings.hasOwnProperty('viewHours') ? counter_settings.viewHours : '00';

  const presetRingTones = counter_settings && counter_settings.hasOwnProperty('ringTone')
    ? counter_settings.ringTone
    : {
      id: 'warm_morning',
      name: '溫暖早晨',
      url: '/audios/warm_morning.mp3'
    };
  // if (counter_settings) {
  //   console.log(counter_settings)
  // }

  const [remainTotalSeconds, setRemainTotalSeconds] = useState<number>(presetTotalSeconds);
  const [tempRemainTotalSeconds, setTempRemainTotalSeconds] = useState<number>(presetTotalSeconds);
  const [settingsTotalSeconds, setSettingsTotalSeconds] = useState<number>(presetTotalSeconds);

  const [prevSeconds, setPrevSeconds] = useState<number>(presetSeconds);
  const [prevMinutesSeconds, setPrevMinutesSeconds] = useState<number>(presetMinutesSeconds);
  const [prevHoursSeconds, setPrevHoursSeconds] = useState<number>(presetHoursSeconds);

  const [viewSeconds, setViewSeconds] = useState<string>(presetViewSeconds);
  const [viewMinutes, setViewMinutes] = useState<string>(presetViewMinutes);
  const [viewHours, setViewHours] = useState<string>(presetViewHours);

  const [startStatus, setStartStatus] = useState<StartStatus>(StartStatus.stop);
  const [startText, setStartText] = useState<string>(StartText.start);

  const [showSettingAlert, setShowSettingAlert] = useState<boolean>(false);
  const [showTimesUpAlert, setShowTimesUpAlert] = useState<boolean>(false);
  const [showTotalSeconds, setShowTotalSeconds] = useState<boolean>(false);
  const [showViewTimes, setShowViewTimes] = useState<boolean>(false);
  const [showViewHours, setShowViewHours] = useState<boolean>(false);
  const [showRingToneSelect, setShowRingToneSelect] = useState<boolean>(false);
  const [showCircleBar, setShowCircleBar] = useState<boolean>(false);

  const [selectedRingTone, setSelectedRingTone] = useState<RingToneType>(presetRingTones);

  const [play, { stop, sound }] = useSound(selectedRingTone.url);
  // const [play, { stop, sound }] = useSound(selectedRingTone.url, { loop: true });

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
      onRing();

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
        setTempRemainTotalSeconds(remainTotalSeconds);
        setShowCircleBar(false);
        setStartStatus(StartStatus.pause);
        setStartText(StartText.continue);
        break;
      case StartStatus.pause: //按繼續
        setTempRemainTotalSeconds(remainTotalSeconds);
        setStartStatus(StartStatus.start);
        setShowCircleBar(true);
        setStartText(StartText.pause);
        counting = setInterval(myTimer, 1000);
        break;
      case StartStatus.stop: //按開始
        setTempRemainTotalSeconds(remainTotalSeconds);
        setShowCircleBar(true);
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
  };

  const onTotalSecondsChange = (t: number, type: string, viewTimes: number, numberTimes: number) => {
    setSettingsTotalSeconds(t);
    calculateTotalSeconds(t);
    let newSettingCookie: CounterCookie;
    const stringViewTimes = viewTimes < 10 ? '0' + viewTimes : String(viewTimes);

    switch (type) {
      case TimeSelectChangeType.seconds:
        setPrevSeconds(numberTimes);
        newSettingCookie = {...counter_settings, settingTimes: t, seconds: numberTimes, viewSeconds: stringViewTimes}
        break;
      case TimeSelectChangeType.minutes:
        setPrevMinutesSeconds(numberTimes);
        newSettingCookie = {...counter_settings, settingTimes: t, minutesSeconds: numberTimes, viewMinutes: stringViewTimes}
        break;
      case TimeSelectChangeType.hour:
        setPrevHoursSeconds(numberTimes);
        newSettingCookie = {...counter_settings, settingTimes: t, hoursSeconds: numberTimes, viewHours: stringViewTimes}
        break;
    }
    onSetCookie(newSettingCookie);
  };

  const onShowSettingAlert = () => {
    setShowSettingAlert(true);
  };

  const onShowTotalSeconds = () => {
    const newShow = !showTotalSeconds;
    setShowTotalSeconds(newShow);
  };

  const onRing = () => {
    sound.fade(0, 1, 1000);
    // Howler.loop(true);
    play();
    setShowCircleBar(false); // 為了重新刷動畫，要讓動畫的spring重新render
    setTempRemainTotalSeconds(remainTotalSeconds);
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
    stop();
  };

  const onRecount = () => {
    stop();
    startCounting();
    onCloseTimesUpAlert();
    setShowCircleBar(true);
    setTempRemainTotalSeconds(remainTotalSeconds);
  };

  const onSetRingTone = (rt: RingToneType) => {
    setSelectedRingTone(rt);
    setShowRingToneSelect(false);
    const newSettingCookie = {...counter_settings, ringTone: rt}
    onSetCookie(newSettingCookie);
  };

  const stopClass = startStatus === StartStatus.start ? 'pause' : 'start';

  const [viewHeight, setViewHeight] = useState<number>(0);
  useEffect(() => {
    setViewHeight(window.innerHeight);
  });
  useEffect(() => {
    remainTotalSeconds < 3600 ? setShowViewHours(false) : setShowViewHours(true);
  }, [remainTotalSeconds]);

  return (
    <Layout
      id={'index'}
      meta={meta}
      viewHeight={viewHeight}
    >
      <div id='counter'>
        <button className="show_total_seconds" onClick={onShowTotalSeconds}>show totalSeconds</button>
        <div className="content">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={showViewTimes}
              classNames='fade'
              timeout={300}
            >
              <div className="time-block">
                { showViewTimes ? (
                  <ViewTimes
                    showViewHours={showViewHours}
                    resetCircle={showCircleBar}
                    totalSeconds={settingsTotalSeconds}
                    remainTotalSeconds={tempRemainTotalSeconds}
                    viewHours={viewHours}
                    viewMinutes={viewMinutes}
                    viewSeconds={viewSeconds}
                    countingStatus={startStatus}
                  />
                ) : (
                  <TimeSettingTools
                    settingsTotalSeconds={settingsTotalSeconds}
                    seconds={Number(viewSeconds)}
                    minutes={Number(viewMinutes)}
                    hours={Number(viewHours)}
                    prevSeconds={prevSeconds}
                    prevMinutesSeconds={prevMinutesSeconds}
                    prevHoursSeconds={prevHoursSeconds}
                    onTotalSecondsChange={(s, type, viewTimes, numberTimes) => onTotalSecondsChange(s, type, viewTimes, numberTimes)}
                  />
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
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
          currentRingTone={selectedRingTone}
          onClick={() => setShowRingToneSelect(true)}
        />
        <RingToneSelectModal
          show={showRingToneSelect}
          currentRingTone={selectedRingTone}
          viewHeight={viewHeight}
          onSubmit={(rt) => onSetRingTone(rt)}
          onCancel={() => setShowRingToneSelect(false)}
        />
        <Alert
          message={'請設定時間再開始計時！'}
          show={showSettingAlert}
          yes={alertOk}
          viewHeight={viewHeight}
        />
        <TimesUpAlertModal
          viewHeight={viewHeight}
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
