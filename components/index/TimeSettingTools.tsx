import React, {useState} from 'react';

type TimeSettingToolDatas = {
  seconds: number[];
};

type TimeSettingTools = {
  seconds: string;
  onSecondsChange(s: string): void;
};

const toolDatas: TimeSettingToolDatas = {
  seconds: [],
};

for (let i = 0; i <= 59; i++) {
  toolDatas.seconds.push(i);
}

const secondsDatas =  toolDatas.seconds.map(num =>
  (
    <option
      value={num}
    >{num}</option>
  )
);

const TimeSettingTools = (props: TimeSettingTools) => {
  const {
    onSecondsChange,
  } = props;
  return (
    <div className="time_setting_tools">
      <div className="select-group">
        <div className="seconds">
          <select onChange={(e) => onSecondsChange(e.target.value)}>
            {secondsDatas}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimeSettingTools;