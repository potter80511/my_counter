import React, {useState} from 'react';
import NormalSelect from '../form_elements/NormalSelect';
import { optionType } from '../../types/common';
import { TimeSelectChangeType } from '../../types/counter';
import '@styles/components/TimeSettingTools.scss';

type TimeSettingToolDatas = {
  seconds: optionType[];
  minutes: optionType[];
  hours: optionType[];
};

type TimeSettingToolsType = {
  timeIsSet: boolean;
  seconds: number;
  minutes: number;
  hours: number;
  onTotalSecondsChange(s: number, type: string): void;
  onSettingsChange(s: number, type: string): void;
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
    timeIsSet,
    seconds,
    minutes,
    hours,
    onTotalSecondsChange,
    onSettingsChange,
  } = props;
  const [tempTotalSeconds, setTempTotalSeconds] = useState<number>(0);
  const [prevSeconds, setPrevSeconds] = useState<number>(0);
  const [prevMinutesSeconds, setPrevMinutesSeconds] = useState<number>(0);
  const [prevHoursSeconds, setPrevHoursSeconds] = useState<number>(0);

  const onTimeChange = (t: string, type: string) => {
    let numberTimes= Number(t);
    let newTotalSeconds: number;
    onSettingsChange(numberTimes, type);
    switch (type) {
      case TimeSelectChangeType.seconds:
        numberTimes = numberTimes;
        setPrevSeconds(numberTimes);
        newTotalSeconds = tempTotalSeconds - prevSeconds + numberTimes;
        break;
      case TimeSelectChangeType.minutes:
        numberTimes = numberTimes * 60;
        setPrevMinutesSeconds(numberTimes);
        newTotalSeconds = tempTotalSeconds - prevMinutesSeconds + numberTimes;
        break;
      case TimeSelectChangeType.hour:
        numberTimes = numberTimes * 3600;
        setPrevHoursSeconds(numberTimes);
        newTotalSeconds = tempTotalSeconds - prevHoursSeconds + numberTimes;
        break;
    }
    
    setTempTotalSeconds(newTotalSeconds);
    onTotalSecondsChange(newTotalSeconds, type);
  };

  return (
    <div className="time_setting_tools">
      { !timeIsSet && (
        <p>請設定時間開始計時</p>
      )}
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