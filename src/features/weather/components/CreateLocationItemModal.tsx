import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LocationData } from 'src/features/weather/domain/model/Location';
import '@styles/features/weather/CreateLocationItemModal.scss'

type CreateLocationItemModal = {
  show: boolean;
  locationOptions: LocationData[];
  searchValue: string;
  onCancel: (show: boolean) => void;
  onSearchInputChange: (value: string) => void;
};

const CreateLocationItemModal = (props: CreateLocationItemModal) => {
  const {
    show,
    locationOptions,
    searchValue,
    onCancel,
    onSearchInputChange,
  } = props;
  const locationOptionsBlock = locationOptions.map((item, index) => (
    <div className="location-option" key={index}>{item.name}</div>
  ));
  return show && (
    <div id="create-location-item-modal">
      <div className="input-head">
        <div className="container-wrap">
          <label>輸入城市或鄉鎮名字</label>
          <div className="input-block">
            <div className="input-group">
              <input
                type="text"
                placeholder="搜尋"
                value={searchValue}
                onChange={(e) => onSearchInputChange(e.target.value)}
              />
              <button><FontAwesomeIcon icon={faTimes}/></button>
              {( locationOptions.length > 0 && searchValue !== '' ) && (
                <div className="location-options">
                  {locationOptionsBlock}
                </div>
              )}
            </div>
            <button onClick={() => onCancel(false)}>取消</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLocationItemModal;
