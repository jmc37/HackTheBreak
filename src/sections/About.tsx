import styles from "../styles/About.module.css";

function About() {
  return (
    <section id="about" className="container">
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHeader}>
          About Hack
          <br className="headingBreak" /> the Break
        </h2>
        <div className={styles.statContainer}>
          <div className={styles.statBoxLight}>
            <p>
              -3- <br /> Years
            </p>
          </div>
          <div className={styles.statBoxLight}>
            <p>
              200+ <br /> Hackers
            </p>
          </div>
          <div className={styles.statBoxDark}>
            <p>
              $5000+ <br /> Prizes
            </p>
          </div>
          <div className={styles.statBoxDark}>
            <p>
              40+ <br /> Projects
            </p>
          </div>
        </div>
        <div className={styles.writtenContainer}>
          <p>
            Join BCIT's hackathon on March 11-12, 2023, hosted by BCIT Computing
            Club, Women in Computing, Coding 4 All, and Part-Time Computing
            Club. This event is open to all BCIT students with any level of
            experience. Register by March 11th to secure your spot in this
            exceptional hackathon, which promises an electrifying lineup of
            challenges, mentorship opportunities, and networking sessions.
            Unleash your coding skills in the ultimate hackathon experience and
            push the boundaries of innovation!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
