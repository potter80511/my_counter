import React, {useState} from 'react';
import { optionType } from '../../types/common';



type TimeSettingToolDatas = {
  seconds: optionType[];
};

type TimeSettingTools = {
  timeIsSet: boolean;
  seconds: number;
  onSecondsChange(s: string): void;
};

const toolDatas: TimeSettingToolDatas = {
  seconds: [],
};

for (let i = 0; i <= 59; i++) {
  toolDatas.seconds.push({
    label: i + '秒',
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

const TimeSettingTools = (props: TimeSettingTools) => {
  const {
    timeIsSet,
    seconds,
    onSecondsChange,
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
    </div>
  );
};

export default TimeSettingTools;