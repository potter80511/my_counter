import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LocationData } from 'src/features/weather/domain/model/Location';
import { CSSTransition } from 'react-transition-group';
import '@styles/features/weather/CreateLocationItemModal.scss'
import '@styles/transition_group.scss';

type CreateLocationItemModal = {
  show: boolean;
  locationOptions: LocationData[];
  searchValue: string;
  nextIndex: number;
  onCancel: (show: boolean) => void;
  onSearchInputChange: (value: string) => void;
  onCreateLocation: (newLocation: LocationData, nextIndex: number) => void;
};

const CreateLocationItemModal = (props: CreateLocationItemModal) => {
  const {
    show,
    locationOptions,
    searchValue,
    nextIndex,
    onCancel,
    onSearchInputChange,
    onCreateLocation,
  } = props;

  const locationOptionsBlock = locationOptions.map((item, index) => (
    <div
      className="location-option" key={index}
      onClick={() => onCreateLocation(item, nextIndex)}
    >
      <span className="container-wrap">{item.name}</span>
    </div>
  ));
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="slideInUp"
      unmountOnExit
    >
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
                <button onClick={() => onSearchInputChange('')}>
                  <FontAwesomeIcon icon={faTimes}/>
                </button>
              </div>
              <button onClick={() => onCancel(false)}>取消</button>
            </div>
          </div>
        </div>
        {( locationOptions.length > 0 && searchValue !== '' ) && (
          <div className="location-options">
            {locationOptionsBlock}
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default CreateLocationItemModal;
