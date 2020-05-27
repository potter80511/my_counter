import React, { useRef, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Spring, config } from 'react-spring/renderprops.cjs';
import '@styles/components/ViewTimes.scss';
import '@styles/transition_group.scss';
import { StartStatus } from '../../types/counter';

interface ViewTimesProps {
  show?: boolean;
  resetCircle: boolean;
  totalSeconds: number;
  remainTotalSeconds: number;
  viewHours: string;
  viewMinutes: string;
  viewSeconds: string;
  countingStatus: StartStatus;
};

const ViewTimes = (props: ViewTimesProps) => {
  const {
    show,
    resetCircle,
    totalSeconds,
    remainTotalSeconds,
    viewHours,
    viewMinutes,
    viewSeconds,
    countingStatus,
  } = props;
  const circleSvg = useRef(null);

  const height = 306;
  const r = (height - 10 ) / 2;
  const circleHeight = height;
  const circleRadius = r;
  const circleLength = 2 * r * Math.PI;

  const passedTimeRate = (totalSeconds - remainTotalSeconds) === 0
    ? 0 : (totalSeconds - remainTotalSeconds) / totalSeconds;
  const circlePassedLength = circleLength * passedTimeRate;

  return (
    <CSSTransition
      in={show}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      <div className="view-times" style={{height: circleHeight}}>
        <div className="circle" style={{height: circleHeight}}>
          <svg ref={circleSvg} height="100%" width="100%">
            <circle cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke="gray" strokeWidth="5" fill="none" />
            { resetCircle ? (
              <Spring
                from={{strokeDashoffset: circlePassedLength}}
                to={{strokeDashoffset: circleLength}}
                config={{duration: remainTotalSeconds * 1000}}
              >
                {stringProps =>
                  <circle style={stringProps} cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke="red" strokeWidth="5" strokeDasharray={circleLength} fill="none" />
                }
              </Spring>
            ) : (
              <circle  cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke="red" strokeWidth="5" strokeDasharray={circleLength} strokeDashoffset={countingStatus === StartStatus.pause ? circlePassedLength : circleLength} fill="none" />
            )}
          </svg>
          <p className="time">
            <span>{viewHours}：</span>
            <span>{viewMinutes}：</span>
            <span>{viewSeconds}</span>
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ViewTimes;
