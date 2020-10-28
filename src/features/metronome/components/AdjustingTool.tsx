import React from 'react';
import '@styles/features/metronome/AdjustingTool.scss';
import { AddReduce } from 'src/domain/model/AddReduce';

type AdjustingToolProp = {
  label: string;
  minValue: number;
  maxValue: number;
  currentValue: number;
  onClick?: (newValue: number) => void;
};

const AdjustingTool = (props: AdjustingToolProp) => {
  const { label, minValue, maxValue, currentValue, onClick } = props;

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <button
          type="button"
          onClick={() => {
            if (currentValue < maxValue) {
              onClick(currentValue + 1);
            } else {
              console.log('is max!');
            }
          }}
        >
          ＋
        </button>
        <button
          type="button"
          onClick={() => {
            if (currentValue > minValue) {
              onClick(currentValue - 1);
            } else {
              console.log('is min!');
            }
          }}
        >
          －
        </button>
      </div>
    </div>
  );
};

export default AdjustingTool;
