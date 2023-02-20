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
            Attention all tech lovers! Prepare to immerse yourself in the most
            exhilarating hackathon experience of the year! Introducing the BCIT
            Computing Clubs student-driven code-fest - a hackathon like no
            other! Our extraordinary event brings together the brightest minds
            from BCIT and beyond, including the Computing Club, Women in
            Computing, Coding 4 All, and Part-Time Computing Club.
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
