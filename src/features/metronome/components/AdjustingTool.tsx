import React from 'react';
import '@styles/features/metronome/AdjustingTool.scss';

type AdjustingTool = {
  label: string;
};

const AdjustingTool = (props: AdjustingTool) => {
  const { label } = props;

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <button className="" type="button">
          ＋
        </button>
        <button className="" type="button">
          －
        </button>
      </div>
    </div>
  );
};

export default AdjustingTool;
