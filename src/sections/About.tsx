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
              tba <br /> Prizes
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
            BCIT Hack the Break 2023 is open to all Post-Secondary students with
            any level of coding experience.
          </p>
          <p>
            Hack the Break aims to further develop our attendees' coding skills
            and empower emerging professionals into tech roles.
          </p>
          <p>
            <span className="bolded">Register by March 10th</span> to secure
            your spot and get ready for electrifying challenges, mentorship
            opportunities, and networking sessions!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
