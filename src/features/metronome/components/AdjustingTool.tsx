import React, { useState, useEffect } from 'react';
import ClickNHold from 'react-click-n-hold';
import '@styles/features/metronome/AdjustingTool.scss';

const pressingTime = 1;

type AdjustingToolProp = {
  label: string;
  currentValue: string | number;
  onClick?: (newValue: number) => void;
};

const AdjustingTool = (props: AdjustingToolProp) => {
  const { label, currentValue, onClick } = props;

  const [longClick, setLongClick] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [temp, setTemp] = useState<boolean>(false);

  const addStart = () => {
    setIsAdding(true);
    onClick(Number(currentValue) + 1);
  };

  const end = () => {
    setLongClick(false);
    setIsAdding(false);
  };

  const reduceStart = () => {
    onClick(Number(currentValue) - 1);
  };

  const clickNHold = () => {
    setLongClick(true);
    setTemp(!temp);
  };

  useEffect(() => {
    if (longClick) {
      if (isAdding) {
        onClick(Number(currentValue) + 1);
      } else {
        onClick(Number(currentValue) - 1);
      }
      setTimeout(() => {
        setTemp(!temp);
      }, 100);
    }
  }, [temp]);

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <ClickNHold
          time={pressingTime}
          onStart={addStart}
          onClickNHold={clickNHold}
          onEnd={end}
        >
          <button type="button">＋</button>
        </ClickNHold>
        <ClickNHold
          time={pressingTime}
          onStart={reduceStart}
          onClickNHold={clickNHold}
          onEnd={end}
        >
          <button type="button">－</button>
        </ClickNHold>
      </div>
    </div>
  );
};

export default AdjustingTool;
