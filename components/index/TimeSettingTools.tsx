import React, {useState, useEffect} from 'react';
import NormalSelect from '../form_elements/NormalSelect';
import { optionType } from '../../types/common';
import { TimeSelectChangeType } from '../../types/counter';
import '@styles/counter/TimeSettingTools.scss';

type TimeSettingToolDatas = {
  seconds: optionType[];
  minutes: optionType[];
  hours: optionType[];
};

type TimeSettingToolsType = {
  seconds: number;
  minutes: number;
  hours: number;
  prevSeconds: number;
  prevMinutesSeconds: number;
  prevHoursSeconds: number;
  settingsTotalSeconds: number;
  onTotalSecondsChange(s: number, type: string, viewTimes: number, numberTimes: number): void;
};

const toolDatas: TimeSettingToolDatas = {
  seconds: [],
  minutes: [],
  hours: [],
};

for (let i = 0; i <= 59; i++) {
  toolDatas.seconds.push({
    label: String(i),
    value: String(i),
  });
  toolDatas.minutes.push({
    label: String(i),
    value: String(i),
  });
}
for (let i = 0; i <= 23; i++) {
  toolDatas.hours.push({
    label: String(i),
    value: String(i),
  });
}

const TimeSettingTools = (props: TimeSettingToolsType) => {
  const {
    seconds,
    minutes,
    hours,
    prevSeconds,
    prevMinutesSeconds,
    prevHoursSeconds,
    settingsTotalSeconds,
    onTotalSecondsChange,
  } = props;
  const [tempTotalSeconds, setTempTotalSeconds] = useState<number>(settingsTotalSeconds);

  const onTimeChange = (t: string, type: string) => {
    let numberTimes= Number(t);
    let newTotalSeconds: number;
    switch (type) {
      case TimeSelectChangeType.seconds:
        numberTimes = numberTimes;
        newTotalSeconds = tempTotalSeconds - prevSeconds + numberTimes;
        break;
      case TimeSelectChangeType.minutes:
        numberTimes = numberTimes * 60;
        newTotalSeconds = tempTotalSeconds - prevMinutesSeconds + numberTimes;
        break;
      case TimeSelectChangeType.hour:
        numberTimes = numberTimes * 3600;
        newTotalSeconds = tempTotalSeconds - prevHoursSeconds + numberTimes;
        break;
    }

    setTempTotalSeconds(newTotalSeconds);
    onTotalSecondsChange(newTotalSeconds, type, Number(t), numberTimes);
  };
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    if (firstLoad) {
      onTimeChange(String(seconds), TimeSelectChangeType.seconds);
      onTimeChange(String(minutes), TimeSelectChangeType.minutes);
      onTimeChange(String(hours), TimeSelectChangeType.hour);
      setFirstLoad(false);
    }
  });

  return (
    <div className="time_setting_tools">
      <h1 className="title">Counter</h1>
      <p>請設定時間開始計時</p>
      <div className="flex tools">
        <NormalSelect
          className="hours"
          unit="小時"
          value={hours}
          optionDatas={toolDatas.hours}
          onSelectChange={(t) => onTimeChange(t, TimeSelectChangeType.hour)}
        />
        <NormalSelect
          className="minutes"
          unit="分鐘"
          value={minutes}
          optionDatas={toolDatas.minutes}
          onSelectChange={(t) => onTimeChange(t, TimeSelectChangeType.minutes)}
        />
        <NormalSelect
          className="seconds"
          unit="秒鐘"
          value={seconds}
          optionDatas={toolDatas.seconds}
          onSelectChange={(t) => onTimeChange(t, TimeSelectChangeType.seconds)}
        />
      </div>
    </div>
  );
};

export default TimeSettingTools;
