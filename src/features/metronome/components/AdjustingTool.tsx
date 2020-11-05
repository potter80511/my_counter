import React from 'react';
import '@styles/features/metronome/AdjustingTool.scss';

type AdjustingToolProp = {
  label: string;
  currentValue: number;
  onClick?: (newValue: number) => void;
};

const AdjustingTool = (props: AdjustingToolProp) => {
  const { label, currentValue, onClick } = props;

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <button type="button" onClick={() => onClick(currentValue + 1)}>
          ＋
        </button>
        <button type="button" onClick={() => onClick(currentValue - 1)}>
          －
        </button>
      </div>
    </div>
  );
};

export default AdjustingTool;
