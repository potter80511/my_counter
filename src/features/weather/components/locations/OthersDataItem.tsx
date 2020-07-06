import React from 'react';
import { OthersData } from 'src/features/weather/domain/model/Weather';

const OthersDataItem = (props: OthersData) => {
  const {
    name,
    value,
  } = props;
  return (
    <div className="other-item">
      <label>{name}</label>
      <span>{value}</span>
    </div>
  );
};

export default OthersDataItem;
