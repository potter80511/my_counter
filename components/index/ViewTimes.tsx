import React from 'react';
import { StartStatus } from '../../types/counter';
import { Spring } from 'react-spring/renderprops.cjs';
import { CSSTransition } from 'react-transition-group';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/ViewTimes.scss';
import '@styles/transition_group.scss';

interface ViewTimesProps {
  showViewHours: boolean;
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
    showViewHours,
    resetCircle,
    totalSeconds,
    remainTotalSeconds,
    viewHours,
    viewMinutes,
    viewSeconds,
    countingStatus,
  } = props;

  const height = 300;
  const r = (height - 10 ) / 2;
  const circleHeight = height;
  const circleRadius = r;
  const circleLength = 2 * r * Math.PI;
  const circleStrokeWidth = 7;
  const circleStrokeColor = '#ee951b';

  const passedTimeRate = (totalSeconds - remainTotalSeconds) === 0
    ? 0 : (totalSeconds - remainTotalSeconds) / totalSeconds;
  const circlePassedLength = circleLength * passedTimeRate;

  const fontBigClass = !showViewHours ? ' font-big' : '';
  const countingClass = countingStatus === StartStatus.start ? ' startCounting' : '';

  const statusText = () => {
    switch (countingStatus) {
      case StartStatus.start:
        return '計時中..';
      case StartStatus.pause:
        return '計時暫停';
      case StartStatus.stop:
        return '計時停止';
    }
  }

  return (
    <div className="view-times" style={{height: circleHeight}}>
      <div className="circle" style={{height: circleHeight}}>
        <svg height="100%" width="100%" className="circleSvg">
          <circle cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke="#222" strokeWidth="7" fill="none" />
          { resetCircle ? (
            <Spring
              from={{strokeDashoffset: circlePassedLength}}
              to={{strokeDashoffset: circleLength}}
              config={{duration: remainTotalSeconds * 1000}}
            >
              {stringProps =>
                <circle style={stringProps} cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke={circleStrokeColor} strokeWidth={circleStrokeWidth} strokeDasharray={circleLength} fill="none" strokeLinecap="round" />
              }
            </Spring>
          ) : (
            <circle  cx={circleHeight/2} cy={circleHeight/2} r={circleRadius} stroke={circleStrokeColor} strokeWidth={circleStrokeWidth} strokeDasharray={circleLength} strokeDashoffset={countingStatus === StartStatus.pause ? circlePassedLength : circleLength} fill="none" strokeLinecap="round" />
          )}
        </svg>
        <div className="counting">
          <span className={`label${countingClass}`}>
            <FontAwesomeIcon icon={faStopwatch} />
            {statusText()}
          </span>
          <p className={`time${fontBigClass}`}>
            <CSSTransition
              in={showViewHours}
              classNames='fade'
              timeout={300}
              unmountOnExit
            >
              <span>{viewHours}：</span>
            </CSSTransition>
            <span>{viewMinutes}：</span>
            <span>{viewSeconds}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewTimes;
