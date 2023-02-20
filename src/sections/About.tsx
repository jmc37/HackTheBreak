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
            Don't miss out on BCIT's most exhilarating hackathon experience of
            the year, taking place on March 11-12th 2023. Bringing together the
            brightest minds from BCIT and beyond, hosted by BCIT Computing Club,
            Women in Computing, Coding 4 All, and Part-Time Computing Club, this
            hackathon promises to be unlike any other. Open to all BCIT students
            and levels of experience. Register by February 24th to secure your
            spot at this exceptional event!
          </p>
          <p>
            From its inception in 2021, our annual hackathon has been the
            highlight of the Spring break season, providing students with the
            chance to unleash their coding prowess and push the boundaries of
            innovation. This year, we're taking things to the next level with an
            electrifying lineup of challenges, mentorship opportunities, and
            networking sessions. Join us and let your coding skills shine in the
            ultimate hackathon experience!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
