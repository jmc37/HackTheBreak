import styles from "../styles/Themes.module.css";
import themeImage from "../assets/themes_bucket.png";

function Themes() {
  return (
    <section id="theme" className="container section-no-padding">
      <div className={styles.themeSection}>
        <div className={styles.writtenContainer}>
          <h2>This Year's Theme: Job Security</h2>
          <p>
            Anxious about securing a job? We feel that, too. Hack the Break 2023
            focuses on addressing the challenging job market and fluctuating
            workforce since the pandemic.
          </p>
          <p>
            Build your resumé with an eye-opening hackathon project when you
            unleash your coding skills at Hack the Break from March 11-12, 2023.
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
