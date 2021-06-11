import React, { useState } from 'react';
import styles from './CalendarEvents.module.scss';

function NewEventModal  ({ onSave, onClose })  {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  return(
    <>
      <div className={styles.newEventModal}>
        <h2>New Event</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="Event Title" 
        />

        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }} 
          className={styles.saveButton}>Save</button>


        <button 
          onClick={onClose}
          className={styles.cancelButton}>Cancel</button>
      </div>

      <div className={styles.modalBackDrop}></div>
    </>
  );
};
export default NewEventModal;