import React from 'react';

type LocationItemDetailsProps = {
  onCloseSpread: () => void;
};

const LocationItemDetails = (props: LocationItemDetailsProps) => {
  const {
    onCloseSpread,
  } = props;
  return (
    <div className="location-details">
      <button onClick={onCloseSpread}>關閉</button>
    </div>
  );
};

export default LocationItemDetails;
