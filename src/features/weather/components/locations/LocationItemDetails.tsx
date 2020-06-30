import React from 'react';

type LocationItemDetailsProps = {
  show: boolean;
  onCloseSpread: () => void;
};

const LocationItemDetails = (props: LocationItemDetailsProps) => {
  const {
    show,
    onCloseSpread,
  } = props;
  return show && (
    <div className="location-details">
      <div className="details-tools">
        <button className="close" onClick={onCloseSpread}>關閉</button>
      </div>
    </div>
  );
};

export default LocationItemDetails;
