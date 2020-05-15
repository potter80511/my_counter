import React, {useState} from 'react';
import NormalSelect from '../form_elements/NormalSelect';
import { optionType } from '../../types/common';

type TimeSettingToolDatas = {
  seconds: optionType[];
  minutes: optionType[];
};

type TimeSettingToolsType = {
  timeIsSet: boolean;
  seconds: number;
  minutes: number;
  onTotalSecondsChange(s: number): void;
};

const toolDatas: TimeSettingToolDatas = {
  seconds: [],
  minutes: [],
};

for (let i = 0; i <= 59; i++) {
  toolDatas.seconds.push({
    label: i + '秒',
    value: String(i),
  });
  toolDatas.minutes.push({
    label: i + '分',
    value: String(i),
  });
}

const secondsDatas =  toolDatas.seconds.map(num =>
  (
    <option
      value={num.value}
      key={num.label}
    >{num.label}</option>
  )
);

const TimeSettingTools = (props: TimeSettingToolsType) => {
  const {
    timeIsSet,
    seconds,
    minutes,
    onTotalSecondsChange,
  } = props;
  const [tempTotalSeconds, setTempTotalSeconds] = useState<number>(0);
  const [prevSeconds, setPrevSeconds] = useState<number>(0);
  const [prevMinutesSeconds, setMinutesPrevSeconds] = useState<number>(0);

  const onSecondsChange = (s: string) => {
    const numberSeconds = Number(s)
    setPrevSeconds(numberSeconds);

    const newTotalSeconds = tempTotalSeconds - prevSeconds + numberSeconds;
    setTempTotalSeconds(newTotalSeconds);
    onTotalSecondsChange(newTotalSeconds);
  };

  const onMinutesChange = (m: string) => {
    const numberSeconds = Number(m) * 60;
    setMinutesPrevSeconds(numberSeconds);

    const newTotalSeconds = tempTotalSeconds - prevMinutesSeconds + numberSeconds;
    setTempTotalSeconds(newTotalSeconds);
    onTotalSecondsChange(newTotalSeconds);
  };

  return (
    <div className="time_setting_tools">
      { !timeIsSet && (
        <p>請設定時間開始計時</p>
      )}
      <div className="select-group">
        <div className="seconds">
          <select value={seconds} onChange={(e) => onSecondsChange(e.target.value)}>
            {secondsDatas}
          </select>
          <label>秒</label>
        </div>
      </div>
      <NormalSelect
        className="minutes"
        unit="分"
        value={minutes}
        optionDatas={toolDatas.minutes}
        onSelectChange={(m) => onMinutesChange(m)}
      />
    </div>
  );
};

export default TimeSettingTools;