import styles from '../styles/Schedule.module.css';

function Schedule() {

    return(
        <section id="schedule" className={styles.scheduleSection}>
            <div className="container">
                <h2>Hackathon Schedule</h2>
                <div className={styles.scheduleContainer}>
                    <p className={styles.hackDay}>Day 1</p>
                    <div className={styles.activityContainer}>
                        <div className={styles.activityBox}>
                            <p className={styles.activityTime}>00:00</p>
                            <p className={styles.activityName}>Activity Name</p>
                        </div>
                        <div className={styles.activityBox}>
                            <p className={styles.activityTime}>00:00</p>
                            <p className={styles.activityName}>Activity Name</p>
                        </div>
                    </div>
                    <p className={styles.hackDay}>Day 2</p>
                    <div className={styles.activityContainer}>
                        <div className={styles.activityBox}>
                            <p className={styles.activityTime}>00:00</p>
                            <p className={styles.activityName}>Activity Name</p>
                        </div>
                        <div className={styles.activityBox}>
                            <p className={styles.activityTime}>00:00</p>
                            <p className={styles.activityName}>Activity Name</p>
                        </div>
                        <div className={styles.activityBox}>
                            <p className={styles.activityTime}>00:00</p>
                            <p className={styles.activityName}>Activity Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Schedule;