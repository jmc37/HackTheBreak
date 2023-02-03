import React from 'react';
import styles from '../styles/About.module.css';

function About() {

    return(
        <section id="about" className={styles.aboutSection}>
            <h2 className={styles.aboutHeader}>About Hack the Break</h2>
            <div className={styles.statContainer}>
                {/* Carousel  */}
                <div className={styles.statBox}>Stat 1</div>
                <div className={styles.statBox}>Stat 2</div>
                <div className={styles.statBox}>Stat 3</div>
                <div className={styles.statBox}>Stat 4</div>
            </div>
            <div className={styles.writtenContainer}>
                <p>Something to summarize the hackathon and provide info behind the organization (eg, past events, mission, school, who we are). Why bother attending?? Convince the users here.</p>
                <p>Location, benefits, activities, target audience for participants (eg - new students, anyone curious about hacks), etc.</p>
            </div>
        </section>
    );
}

export default About;