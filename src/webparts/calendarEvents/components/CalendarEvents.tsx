import React, { useState, useEffect } from 'react';
import  CalendarHead  from './CalendarHead';
import  Day  from './Day';
import  NewEventModal  from './NewEventModal';
import  DeleteEventModal  from './DeleteEventModal';
import useDate  from './useDate';
import styles from './CalendarEvents.module.scss';


function App(){
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();

  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  return(
    <>
      <div className={styles.container}>
        <CalendarHead
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div className={styles.weekdays}>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
      
        <div className={styles.calendar}>
          
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== 'blank') {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>

</div>
      {
        clicked && !eventForDate(clicked) &&
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      }

      {
        clicked && eventForDate(clicked) &&
        <DeleteEventModal 
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter(e => e.date !== clicked));
            setClicked(null);
          }}
        />
      }
    </>
  );
}

export default App;
