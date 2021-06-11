import React from 'react';
import styles from './CalendarEvents.module.scss';

function Day ({ day, onClick })  {
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  return (
    <div className={styles.day}>
    <div onClick={onClick} className={className}>
       
      {day.value === 'padding' ? '' : day.value}
    
      {day.event && <div className='event'>{day.event.title}</div>}
    </div>
    </div>
  );
};
export default Day;