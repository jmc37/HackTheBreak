import styles from "../styles/Schedule.module.css";

function Schedule() {
  return (
    <section id="schedule" className={styles.scheduleSection}>
      <div className="container">
        <h2>Hackathon Schedule</h2>
        <div className={styles.scheduleContainer}>
          <p className={styles.hackDay}>Day 1</p>
          <div className={styles.activityContainer}>
            <div className={styles.activityBox}>
              <p className={styles.activityTime}>08:30</p>
              <p className={styles.activityName}>Opening Ceremony</p>
            </div>
            <div className={styles.activityBox}>
              <p className={styles.activityTime}>23:00</p>
              <p className={styles.activityName}>End of Hacking for day 1</p>
            </div>
          </div>
          <p className={styles.hackDay}>Day 2</p>
          <div className={styles.activityContainer}>
            <div className={styles.activityBox}>
              <p className={styles.activityTime}>13:00</p>
              <p className={styles.activityName}>Submissions Due</p>
            </div>
            <div className={styles.activityBox}>
              <p className={styles.activityTime}>13:30</p>
              <p className={styles.activityName}>Judging Begins</p>
            </div>
            <div className={styles.activityBox}>
              <p className={styles.activityTime}>15:30</p>
              <p className={styles.activityName}>Winners Announced!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
