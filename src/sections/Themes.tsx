import styles from "../styles/Themes.module.css";
import themeImage from "../assets/themes_bucket.png";

function Themes() {
  return (
    <section id="theme" className="container section-no-padding">
      <div className={styles.themeSection}>
        <div className={styles.writtenContainer}>
          <h2>This Year's Theme: Job Security</h2>
          <p>
            The pandemic has had a significant impact on the tech industry, with
            many companies struggling to maintain their workforce. As a result,
            numerous individuals in tech are feeling anxious about the stability
            of their jobs or are being forced to seek new opportunities with
            little notice. In response, the theme for this year's "Hack the
            Break" is focused on addressing these challenges and providing
            solutions that offer improved employment prospects and a greater
            sense of job security. Our goal is to support those affected by
            these difficult times and empower them to achieve their professional
            goals.
          </p>
          <button className={styles.themeBtn}>
            <a
              className={styles.themeBtnLink}
              href="https://hack-the-break-2022.devpost.com/project-gallery"
              target={"_blank"}
              title="Link to Devpost"
            >
              Check out last year's projects!
            </a>
          </button>
        </div>
        <div className={styles.themeImageContainer}>
          <img
            className={styles.themeImage}
            src={themeImage}
            alt="Theme Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Themes;
