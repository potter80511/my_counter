import React, {useState} from 'react';
import { optionType } from '../../types/common';

type NormalSelectProps = {
  className?: string
  unit?: string;
  value?: number;
  optionDatas: optionType[];
  onSelectChange(value: string): void;
};

const NormalSelect = (props: NormalSelectProps) => {
  const className = props.className ? props.className : '';
  const {
    unit,
    value,
    optionDatas,
    onSelectChange,
  } = props;
  const options =  optionDatas.map(num =>
    (
      <option
        value={num.value}
        key={num.label}
      >{num.label}</option>
    )
  );
  return (
    <div className="select-group">
      <div className={className}>
        <select value={value} onChange={(e) => onSelectChange(e.target.value)}>
          {options}
        </select>
        { unit && (
          <label>{unit}</label>
        )}
      </div>
    </div>
  );
};

export default NormalSelect;
