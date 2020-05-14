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
  onSecondsChange(s: string): void;
  onMinutesChange(m: string): void;
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
    onSecondsChange,
    onMinutesChange,
  } = props;
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