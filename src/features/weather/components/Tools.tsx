import React from 'react';
import '@styles/features/weather/Tools.scss';
import { SwitchButtonType, SwitchButtonDataType } from 'src/features/weather/domain/model/ToolsTypes';

type SwitchButtonProps = SwitchButtonDataType & {
  currentType: SwitchButtonType;
  onClick: (value: SwitchButtonType) => void;
};

const SwitchButton = (props: SwitchButtonProps) => {
  const {
    currentType,
    value,
    name,
    onClick,
  } = props;
  const className = currentType === value ? 'active' : '';
  return (
    <button
      className={className}
      onClick={() => onClick(value)}
    >
      {name}
    </button>
  );
};

type ToolsProps = {
  temperatureType: SwitchButtonType;
  onSwitchTemperatureType: (value: SwitchButtonType) => void;
};

const Tools = (props: ToolsProps) => {
  const {
    temperatureType,
    onSwitchTemperatureType,
  } = props;
  return (
    <div className="tools">
      <div className="switch">
        <SwitchButton
          currentType={temperatureType}
          value={SwitchButtonType.Celsius}
          name="°C"
          onClick={(value) => onSwitchTemperatureType(value)}
        />
        <span>/</span>
        <SwitchButton
          currentType={temperatureType}
          value={SwitchButtonType.Fahrenheit}
          name="°F"
          onClick={(value) => onSwitchTemperatureType(value)}
        />
      </div>
      <button id="add-location">+</button>
    </div>
  );
};

export default Tools;
