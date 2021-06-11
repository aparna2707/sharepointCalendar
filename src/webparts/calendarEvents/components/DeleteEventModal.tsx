import React from 'react';
import styles from './CalendarEvents.module.scss';

function DeleteEventModal ({ onDelete, eventText, onClose }) {
  return(
    <>
      <div className={styles.deleteEventModal}>
        <h2>Event</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>

      <div className={styles.modalBackDrop}></div>
    </>
  );
};
export default DeleteEventModal;