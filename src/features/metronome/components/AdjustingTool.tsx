import React from 'react';
import '@styles/features/metronome/AdjustingTool.scss';
import { AddReduce } from 'src/domain/model/AddReduce';

type AdjustingToolProp = {
  label: string;
  onClick?: (type: AddReduce) => void;
};

const AdjustingTool = (props: AdjustingToolProp) => {
  const { label, onClick } = props;

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <button type="button" onClick={() => onClick(AddReduce.Increase)}>
          ＋
        </button>
        <button type="button" onClick={() => onClick(AddReduce.Decrease)}>
          －
        </button>
      </div>
    </div>
  );
};

export default AdjustingTool;
