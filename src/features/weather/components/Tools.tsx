import React from 'react';
import '@styles/features/weather/Tools.scss';
import { TemperatureType, SwitchButtonDataType } from 'src/features/weather/domain/model/ToolsTypes';

type SwitchButtonProps = SwitchButtonDataType & {
  currentType: TemperatureType;
  onClick: (value: TemperatureType) => void;
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
  show: boolean;
  temperatureType: TemperatureType;
  onSwitchTemperatureType: (value: TemperatureType) => void;
};

const Tools = (props: ToolsProps) => {
  const {
    show,
    temperatureType,
    onSwitchTemperatureType,
  } = props;
  return show && (
    <div className="tools">
      <div className="switch">
        <SwitchButton
          currentType={temperatureType}
          value={TemperatureType.Celsius}
          name="°C"
          onClick={(value) => onSwitchTemperatureType(value)}
        />
        <span>/</span>
        <SwitchButton
          currentType={temperatureType}
          value={TemperatureType.Fahrenheit}
          name="°F"
          onClick={(value) => onSwitchTemperatureType(value)}
        />
      </div>
      <button id="add-location">+</button>
    </div>
  );
};

export default Tools;
