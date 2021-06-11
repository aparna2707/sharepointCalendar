import React from 'react';
import styles from './CalendarEvents.module.scss';

function CalendarHead ({ onNext, onBack, dateDisplay })  {
  return(
    <div className={styles.header}>
      
      <div>
        <button onClick={onBack} id="backButton">&lt;</button>
        </div>
        <div className={styles.monthDisplay}>{dateDisplay}</div>
        <div>
        <button onClick={onNext} id="nextButton">&gt;</button>
      </div>
    </div>
  );
};
export default CalendarHead;