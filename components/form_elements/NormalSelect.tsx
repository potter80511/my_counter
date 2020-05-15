import React, {useState} from 'react';
import { optionType } from '../../types/common';
import {
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/NormalSelect.scss';

type NormalSelectProps = {
  className?: string
  unit?: string;
  value?: number;
  optionDatas: optionType[];
  onSelectChange(value: string): void;
};

const NormalSelect = (props: NormalSelectProps) => {
  const className = props.className ? ' ' + props.className : '';
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
      <div className={`times${className}`}>
        <div className="select">
          <select value={value} onChange={(e) => onSelectChange(e.target.value)}>
            {options}
          </select>
          <FontAwesomeIcon icon={faCaretDown}/>
        </div>
        { unit && (
          <label className="unit">{unit}</label>
        )}
      </div>
    </div>
  );
};

export default NormalSelect;
