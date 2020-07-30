import React from 'react';
import '@styles/features/weather/Tools.scss';
import {
  TemperatureType,
  SwitchButtonDataType,
} from 'src/features/weather/domain/model/ToolsTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type SwitchButtonProps = SwitchButtonDataType & {
  currentType: TemperatureType;
  onClick: (value: TemperatureType) => void;
};

const SwitchButton = (props: SwitchButtonProps) => {
  const { currentType, value, name, onClick } = props;
  const className = currentType === value ? 'active' : '';
  return (
    <button className={className} onClick={() => onClick(value)}>
      {name}
    </button>
  );
};

type ToolsProps = {
  show: boolean;
  temperatureType: TemperatureType;
  showCreateItemModal: (show: boolean) => void;
  onSwitchTemperatureType: (value: TemperatureType) => void;
  // onCreateLocationItem: (newItem: LocationData) => void;
};

const Tools = (props: ToolsProps) => {
  const {
    show,
    temperatureType,
    showCreateItemModal,
    onSwitchTemperatureType,
  } = props;
  return (
    show && (
      <div className="tools">
        <div className="switch">
          <SwitchButton
            currentType={temperatureType}
            value={TemperatureType.Celsius}
            name="°C"
            onClick={value => onSwitchTemperatureType(value)}
          />
          <span>/</span>
          <SwitchButton
            currentType={temperatureType}
            value={TemperatureType.Fahrenheit}
            name="°F"
            onClick={value => onSwitchTemperatureType(value)}
          />
        </div>
        <Link href="/">
          <a className="home">Johnny's App</a>
        </Link>
        <button id="add-location" onClick={() => showCreateItemModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  );
};

export default Tools;
